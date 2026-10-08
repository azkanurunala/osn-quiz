# Hapus semua project GCP + lepas billing untuk akun azukanurunara94@gmail.com.
# Pakai gcloud config "osn-sd" saja. JANGAN sentuh config "default" (milik klien lain).
#   .\scripts\gcp-cleanup.ps1 -DryRun   # cuma tampilkan
#   .\scripts\gcp-cleanup.ps1           # eksekusi (minta ketik email sbg konfirmasi)
param([switch]$DryRun)

$ErrorActionPreference = 'Stop'
$Email = 'azukanurunara94@gmail.com'
$env:CLOUDSDK_ACTIVE_CONFIG_NAME = 'osn-sd'

$active = (gcloud config get-value account 2>$null).Trim()
if ($active -ne $Email) { throw "Akun aktif config osn-sd = '$active', bukan $Email. Stop." }

$projects = gcloud projects list --format='value(projectId)' | Where-Object { $_ }
$billing  = gcloud billing accounts list --format='value(name)' 2>$null | Where-Object { $_ }

Write-Host "Akun   : $Email"
Write-Host "Project: $($projects -join ', ')"
Write-Host "Billing: $($billing -join ', ')"
if ($DryRun) { Write-Host '[dry-run] tidak ada yang diubah.'; return }

if (-not $projects) { Write-Host 'Tidak ada project.' }
else {
    $c = Read-Host "Ketik '$Email' untuk MENGHAPUS semua project di atas"
    if ($c -ne $Email) { throw 'Konfirmasi salah. Batal.' }
    foreach ($p in $projects) {
        Write-Host "-> $p"
        gcloud billing projects unlink $p --quiet 2>$null   # lepas billing dulu
        gcloud projects delete $p --quiet                   # soft-delete, bisa undelete 30 hari
    }
}

gcloud auth revoke $Email --quiet
Remove-Item Env:CLOUDSDK_ACTIVE_CONFIG_NAME

Write-Host @"

SISA MANUAL (tidak bisa lewat gcloud/API):
 1. Tutup billing account : https://console.cloud.google.com/billing  -> pilih akun -> Account management -> Close billing account
 2. Hapus metode bayar    : https://pay.google.com  -> Payment methods -> Remove
 3. Hapus akun Google     : https://myaccount.google.com/delete-services-or-account
"@
