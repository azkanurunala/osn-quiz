$ErrorActionPreference = 'Stop'
Set-Location 'C:\Products\osn-sd\osn-app'

Write-Host "Starting dev server (vite)..."
$dev = Start-Process -FilePath 'node' -ArgumentList 'node_modules\vite\bin\vite.js','--host' -WorkingDirectory 'C:\Products\osn-sd\osn-app' -PassThru -WindowStyle Hidden
Write-Host "Vite PID: $($dev.Id)"

$ready = $false
for ($i = 0; $i -lt 30; $i++) {
    Start-Sleep -Seconds 2
    try {
        $r = Invoke-WebRequest -Uri 'http://localhost:5173' -TimeoutSec 3 -UseBasicParsing
        if ($r.StatusCode -eq 200) { $ready = $true; break }
    } catch {}
}
if ($ready) {
    Write-Host "Dev server ready on :5173"
} else {
    Write-Host "WARNING: Dev server may not be ready, proceeding anyway"
}

Write-Host "`nRunning record-videos (tier=campur, concurrency=6)..."
$env:NODE_NO_WARNINGS = '1'
node scripts/record-videos.mjs --tier=campur --concurrency=6 2>&1 | Tee-Object -FilePath 'recordings\_batch-continue.log'
$exitCode = $LASTEXITCODE

Write-Host "`nStopping dev server..."
Stop-Process -Id $dev.Id -Force -ErrorAction SilentlyContinue

Write-Host "`n=== Done (exit $exitCode) ==="
