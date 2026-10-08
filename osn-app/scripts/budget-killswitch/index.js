// Cloud Function (gen2, Pub/Sub). Budget alert -> lepas billing dari semua project di billing account.
// Hanya unlink (bisa dibalik dengan relink). Tidak menghapus project.
const { CloudBillingClient } = require('@google-cloud/billing');
const client = new CloudBillingClient();
const BILLING = `billingAccounts/${process.env.BILLING_ACCOUNT_ID}`;

exports.killBilling = async (event) => {
  const msg = JSON.parse(Buffer.from(event.data.message.data, 'base64').toString());
  console.log('budget msg', msg);
  if (msg.costAmount < msg.budgetAmount) return; // alert threshold < 100%, abaikan

  const [projects] = await client.listProjectBillingInfo({ name: BILLING });
  for (const p of projects.filter((p) => p.billingEnabled)) {
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
};
