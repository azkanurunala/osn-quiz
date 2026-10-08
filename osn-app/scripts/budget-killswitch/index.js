// Cloud Function (gen2, Pub/Sub). Budget alert -> lepas billing dari semua project di billing account.
// Hanya unlink (bisa dibalik dengan relink). Tidak menghapus project.
const functions = require('@google-cloud/functions-framework');
const { CloudBillingClient } = require('@google-cloud/billing');
const client = new CloudBillingClient();
const BILLING = `billingAccounts/${process.env.BILLING_ACCOUNT_ID}`;

functions.cloudEvent('killBilling', async (event) => {
  const msg = JSON.parse(Buffer.from(event.data.message.data, 'base64').toString());
  // list di setiap notifikasi (beberapa kali sehari), sekalian bukti izin service account masih jalan
  const [projects] = await client.listProjectBillingInfo({ name: BILLING });
  const aktif = projects.filter((p) => p.billingEnabled);
  console.log('budget', msg.costAmount, '/', msg.budgetAmount, msg.currencyCode, 'aktif:', aktif.map((p) => p.projectId).join(','));
  if (!(msg.costAmount >= msg.budgetAmount)) return; // putus hanya kalau jelas >= budget; pesan rusak/uji diabaikan

  for (const p of aktif) {
    try {
      await client.updateProjectBillingInfo({
        name: `projects/${p.projectId}`,
        projectBillingInfo: { billingAccountName: '' },
      });
      console.log('unlinked', p.projectId);
    } catch (e) {
      console.error('gagal unlink', p.projectId, e.message);
    }
  }
});
