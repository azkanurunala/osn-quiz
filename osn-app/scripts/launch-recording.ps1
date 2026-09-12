$proc = Start-Process -FilePath 'pwsh' -ArgumentList '-NoProfile','-ExecutionPolicy','Bypass','-File','C:\Products\osn-sd\osn-app\scripts\continue-recording.ps1' -WindowStyle Minimized -PassThru
Write-Host "Background PID: $($proc.Id)"
