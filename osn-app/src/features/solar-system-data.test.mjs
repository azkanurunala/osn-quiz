import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { PLANETS, SUN, BACKGROUND_TEXTURE, getPlanetPosition } from './solar-system-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../public', import.meta.url));
function assertTextureFileExists(texturePath) {
  const onDisk = `${PUBLIC_DIR}${texturePath}`;
  assert.ok(existsSync(onDisk), `texture file missing on disk: ${onDisk}`);
}

assert.equal(PLANETS.length, 8, 'expected 8 planets');

PLANETS.forEach((p, i) => {
  assert.equal(p.order, i + 1, `planet at index ${i} should have order ${i + 1}`);
  for (const field of ['id', 'name', 'color', 'radius', 'orbitRadius', 'orbitSpeed', 'texture', 'fact']) {
    assert.ok(p[field] !== undefined && p[field] !== '', `${p.id} missing field "${field}"`);
  }
  assert.ok(p.texture.startsWith('/textures/'), `${p.id} texture path should be under /textures/`);
  assertTextureFileExists(p.texture);
});

for (let i = 1; i < PLANETS.length; i++) {
  assert.ok(
    PLANETS[i - 1].orbitSpeed > PLANETS[i].orbitSpeed,
    `${PLANETS[i - 1].id} should orbit faster than ${PLANETS[i].id}`
  );
}

assert.ok(SUN.color && SUN.radius > 0 && SUN.texture, 'sun data present');
assertTextureFileExists(SUN.texture);
assert.ok(BACKGROUND_TEXTURE.startsWith('/textures/'), 'background texture path should be under /textures/');
assertTextureFileExists(BACKGROUND_TEXTURE);

const earth = PLANETS.find((p) => p.id === 'bumi');
const at0 = getPlanetPosition(earth, 0);
assert.equal(at0.x, earth.orbitRadius);
assert.equal(at0.z, 0);

const period = (2 * Math.PI) / earth.orbitSpeed;
const afterPeriod = getPlanetPosition(earth, period);
assert.ok(Math.abs(afterPeriod.x - at0.x) < 1e-9, 'x should return to start after one period');
assert.ok(Math.abs(afterPeriod.z - at0.z) < 1e-9, 'z should return to start after one period');

console.log('solar-system-data: all checks passed');
