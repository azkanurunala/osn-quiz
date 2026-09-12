try {
    $r = Invoke-WebRequest -Uri 'http://localhost:5173' -TimeoutSec 3 -UseBasicParsing
    Write-Host "Dev server running, status: $($r.StatusCode)"
} catch {
    Write-Host "Dev server NOT running: $($_.Exception.Message)"
}
