#Requires -Version 7.0
# Pasang kill-switch: budget -> Pub/Sub -> Cloud Function -> unlink billing semua project.
# Billing putus saat sisa kredit tinggal ~Rp 410.000 (~$25).
# Budget = pemakaian KOTOR (kredit tidak dikurangkan) sejak hari ini, sebesar sisa kredit - batas.
# Tidak menangkap kredit kedaluwarsa. Billing account pakai IDR.
# Pakai config gcloud "osn-sd" saja. Jalankan di pwsh 7 (Windows PowerShell 5.1 salah membaca stderr gcloud):
#   pwsh -ExecutionPolicy Bypass -File .\setup.ps1 -SisaKreditIdr 3000000
# Jalankan ulang dengan sisa kredit terbaru kapan saja: budget lama diganti.
param(
  [Parameter(Mandatory)][long]$SisaKreditIdr,   # Billing -> Overview -> Credits, hari ini
  [long]$SisaMinimalIdr = 410000                # ~$25; billing putus saat sisa kredit segini
)

$ErrorActionPreference = 'Stop'
function g { gcloud @args; if ($LASTEXITCODE) { throw "gagal: gcloud $args" } }

$env:CLOUDSDK_ACTIVE_CONFIG_NAME = 'osn-sd'
$Email   = 'azukanurunara94@gmail.com'
$Host_   = 'project-a087bc92-937b-4ba3-859'   # project tempat fungsi hidup
$Billing = '01BF9F-B38A8F-EA116E'
$Region  = 'asia-southeast2'
$Topic   = 'budget-alerts'
$Sa      = "killswitch@$Host_.iam.gserviceaccount.com"
$Budget  = $SisaKreditIdr - $SisaMinimalIdr
# periode budget Cloud Billing memakai zona waktu Pacific
$Mulai   = [TimeZoneInfo]::ConvertTimeBySystemTimeZoneId((Get-Date), 'Pacific Standard Time').ToString('yyyy-MM-dd')

if ($Budget -le 0) { throw 'Sisa kredit sudah di bawah batas. Jangan pasang; putuskan billing manual.' }
if ((gcloud config get-value account).Trim() -ne $Email) { throw 'Akun aktif salah. Stop.' }
g config set project $Host_

g services enable cloudfunctions.googleapis.com run.googleapis.com cloudbuild.googleapis.com `
  eventarc.googleapis.com pubsub.googleapis.com cloudbilling.googleapis.com billingbudgets.googleapis.com artifactregistry.googleapis.com

gcloud pubsub topics create $Topic 2>$null              # gagal = sudah ada, lanjut
gcloud iam service-accounts create killswitch 2>$null
if ($LASTEXITCODE -eq 0) { Start-Sleep 15 }             # SA baru perlu waktu sebelum bisa di-bind

# izin: billing admin di billing account, projectBillingManager di tiap project, invoker untuk trigger
g billing accounts add-iam-policy-binding $Billing --member="serviceAccount:$Sa" --role=roles/billing.admin --format=none
foreach ($p in (gcloud projects list --format='value(projectId)')) {
  g projects add-iam-policy-binding $p --member="serviceAccount:$Sa" --role=roles/resourcemanager.projectBillingManager --condition=None --format=none
}
g projects add-iam-policy-binding $Host_ --member="serviceAccount:$Sa" --role=roles/run.invoker --condition=None --format=none

g functions deploy kill-billing --gen2 --runtime=nodejs22 --region=$Region `
  --source=$PSScriptRoot --entry-point=killBilling --trigger-topic=$Topic `
  --service-account=$Sa --trigger-service-account=$Sa `
  --set-env-vars="BILLING_ACCOUNT_ID=$Billing" --quiet

foreach ($b in (gcloud billing budgets list --billing-account=$Billing --filter='displayName=killswitch' --format='value(name)')) {
  g billing budgets delete $b --quiet
}
# alert email di 90%, putus di 100%
g billing budgets create --billing-account=$Billing --display-name=killswitch `
  --budget-amount=$Budget --start-date=$Mulai `
  --credit-types-treatment=exclude-all-credits `
  --threshold-rule=percent=0.9 --threshold-rule=percent=1.0 `
  --notifications-rule-pubsub-topic="projects/$Host_/topics/$Topic"

Remove-Item Env:CLOUDSDK_ACTIVE_CONFIG_NAME
Write-Host "Selesai. Budget Rp $Budget sejak $Mulai (PT). Billing putus saat sisa kredit ~Rp $SisaMinimalIdr."
