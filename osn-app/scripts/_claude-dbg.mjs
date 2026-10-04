import { createServer } from 'vite';
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent', optimizeDeps: { noDiscovery: true, include: [] } });
const { matchObjekFoto } = await server.ssrLoadModule('/src/features/diagrams/objekFoto.js');
for (const t of ['Kelelawar dapat berburu di malam yang sangat gelap dengan menggunakan...', 'Kelelawar yang bisa terbang sebenarnya termasuk hewan...']) {
  console.log(t, '=>', JSON.stringify(matchObjekFoto({ question: t, options: { A: 'x' } }, 'ipa')));
}
await server.close();
