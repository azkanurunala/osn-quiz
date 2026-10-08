# Pasang kill-switch: budget -> Pub/Sub -> Cloud Function -> unlink billing.
# Pakai config gcloud "osn-sd" saja. Jalankan: .\setup.ps1 -BudgetUsd 290
param([Parameter(Mandatory)][int]$BudgetUsd)

$ErrorActionPreference = 'Stop'
$env:CLOUDSDK_ACTIVE_CONFIG_NAME = 'osn-sd'
$Email   = 'azukanurunara94@gmail.com'
$Host_   = 'project-a087bc92-937b-4ba3-859'   # project tempat fungsi hidup
$Billing = '01BF9F-B38A8F-EA116E'
$Region  = 'asia-southeast2'
$Topic   = 'budget-alerts'
$Sa      = "killswitch@$Host_.iam.gserviceaccount.com"

if ((gcloud config get-value account).Trim() -ne $Email) { throw 'Akun aktif salah. Stop.' }
gcloud config set project $Host_

gcloud services enable cloudfunctions.googleapis.com run.googleapis.com cloudbuild.googleapis.com `
  eventarc.googleapis.com pubsub.googleapis.com cloudbilling.googleapis.com billingbudgets.googleapis.com artifactregistry.googleapis.com

gcloud pubsub topics create $Topic 2>$null
gcloud iam service-accounts create killswitch 2>$null

# izin: billing admin di billing account + projectBillingManager di tiap project
gcloud billing accounts add-iam-policy-binding $Billing --member="serviceAccount:$Sa" --role=roles/billing.admin | Out-Null
foreach ($p in (gcloud projects list --format='value(projectId)')) {
  gcloud projects add-iam-policy-binding $p --member="serviceAccount:$Sa" --role=roles/resourcemanager.projectBillingManager | Out-Null
}

gcloud functions deploy kill-billing --gen2 --runtime=nodejs20 --region=$Region `
  --source=$PSScriptRoot --entry-point=killBilling --trigger-topic=$Topic `
  --service-account=$Sa --set-env-vars="BILLING_ACCOUNT_ID=$Billing"

# budget ukur pemakaian kotor (kredit TIDAK dikurangkan), alert di 90% dan 100%
gcloud billing budgets create --billing-account=$Billing --display-name=killswitch `
  --budget-amount="${BudgetUsd}USD" --calendar-period=year `
  --filter-credit-types-treatment=exclude-all-credits `
  --threshold-rule=percent=0.9 --threshold-rule=percent=1.0 `
  --notifications-rule-pubsub-topic="projects/$Host_/topics/$Topic"

Remove-Item Env:CLOUDSDK_ACTIVE_CONFIG_NAME
Write-Host 'Selesai. Uji: kirim pesan palsu ke topic hanya kalau siap semua project di-unlink.'
