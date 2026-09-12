$ErrorActionPreference = 'Stop'
$recDir = 'C:\Products\osn-sd\osn-app\recordings'
$archiveDir = 'C:\Products\osn-sd\osn-app\recordings-v1-old'
New-Item -ItemType Directory -Force -Path $archiveDir | Out-Null
$files = Get-ChildItem -LiteralPath $recDir -Filter 'page@*.webm'
foreach ($f in $files) {
    Move-Item -LiteralPath $f.FullName -Destination $archiveDir
    Write-Host "Moved: $($f.Name)"
}
Write-Host "Done. Moved $($files.Count) stray files."
