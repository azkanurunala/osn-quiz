$ErrorActionPreference = 'Stop'
Set-Location 'C:\Products\osn-sd\osn-app'

Write-Host "=== Cleanup stray page@ files ==="
$recDir = 'C:\Products\osn-sd\osn-app\recordings'
$archiveDir = 'C:\Products\osn-sd\osn-app\recordings-v1-old'
New-Item -ItemType Directory -Force -Path $archiveDir | Out-Null
$stray = Get-ChildItem -LiteralPath $recDir -Filter 'page@*.webm'
foreach ($f in $stray) {
    Move-Item -LiteralPath $f.FullName -Destination $archiveDir
    Write-Host "  Archived: $($f.Name)"
}
Write-Host "  Archived $($stray.Count) stray files.`n"

Write-Host "=== Starting dev server ==="
$dev = Start-Process -FilePath 'npm' -ArgumentList 'run','dev' -WorkingDirectory 'C:\Products\osn-sd\osn-app' -PassThru -WindowStyle Minimized
Write-Host "  Dev server PID: $($dev.Id)"

$ready = $false
for ($i = 0; $i -lt 30; $i++) {
    Start-Sleep -Seconds 2
    try {
        $r = Invoke-WebRequest -Uri 'http://localhost:5173' -TimeoutSec 3 -UseBasicParsing
        if ($r.StatusCode -eq 200) { $ready = $true; break }
    } catch {}
}
if (-not $ready) {
    Write-Host "  WARNING: Dev server may not be ready yet, proceeding anyway..."
} else {
    Write-Host "  Dev server ready.`n"
}

Write-Host "=== Running batch recording (tier=campur, concurrency=6) ==="
$env:NODE_NO_WARNINGS = '1'
npm run record:videos -- --tier=campur --concurrency=6 2>&1 | Tee-Object -FilePath 'recordings\_batch-continue.log'
$exitCode = $LASTEXITCODE

Write-Host "`n=== Stopping dev server ==="
Stop-Process -Id $dev.Id -Force -ErrorAction SilentlyContinue

Write-Host "`n=== Done (exit $exitCode) ==="
