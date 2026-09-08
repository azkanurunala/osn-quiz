# batch-rerecord.ps1 — resumes the 43-package batch, then re-records the 117 v1 videos
# with the new split/compact design. Runs a chain in the background:
#   1. Wait for the in-flight resume batch (PID 19024, batch A) to finish.
#   2. Archive old v1 recordings (global numbers 001..117 + stray files) to recordings-v1-old/.
#   3. Re-run record-videos --tier=campur so only the missing 117 get captured.

$ErrorActionPreference = 'Stop'
Set-Location 'C:\Products\osn-sd\osn-app'
$log = 'recordings\_batch-rerecord.log'
"=== chain start $(Get-Date -Format o) ===" | Tee-Object -FilePath $log | Out-Null

# 1) wait for resume batch (PID 19024)
if (Get-Process -Id 19024 -ErrorAction SilentlyContinue) {
  "waiting PID 19024 (resume batch 43)... $(Get-Date -Format o)" | Tee-Object -FilePath $log -Append | Out-Null
  Wait-Process -Id 19024
  "resume batch finished $(Get-Date -Format o)" | Tee-Object -FilePath $log -Append | Out-Null
}

# 2) archive v1 videos (number <= 117) and stray page@ files
New-Item -ItemType Directory -Force -Path 'recordings-v1-old' | Out-Null
$moved = 0
Get-ChildItem 'recordings' -Filter *.webm | ForEach-Object {
  $num = [int]0
  if ($_.Name -match '^(\d+)') { $num = [int]$Matches[1] }
  if ($num -ge 1 -and $num -le 117) {
    Move-Item -LiteralPath $_.FullName -Destination 'recordings-v1-old'
    $moved++
  } elseif ($_.Name -like 'page@*') {
    Move-Item -LiteralPath $_.FullName -Destination 'recordings-v1-old'
    $moved++
  }
}
"Moved $moved v1 videos to recordings-v1-old/ $(Get-Date -Format o)" | Tee-Object -FilePath $log -Append | Out-Null

# 3) re-record the missing 117 with the new design
"re-record start $(Get-Date -Format o)" | Tee-Object -FilePath $log -Append | Out-Null
npm run record:videos -- --tier=campur --concurrency=6 *>&1 | Tee-Object -FilePath $log -Append | Out-Null
"=== chain done $(Get-Date -Format o) ===" | Tee-Object -FilePath $log -Append | Out-Null