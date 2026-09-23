import assert from 'node:assert/strict';
import { PLANETS, SUN, getPlanetPosition } from './solar-system-data.js';

assert.equal(PLANETS.length, 8, 'expected 8 planets');

PLANETS.forEach((p, i) => {
  assert.equal(p.order, i + 1, `planet at index ${i} should have order ${i + 1}`);
  for (const field of ['id', 'name', 'color', 'radius', 'orbitRadius', 'orbitSpeed', 'fact']) {
    assert.ok(p[field] !== undefined && p[field] !== '', `${p.id} missing field "${field}"`);
  }
});

for (let i = 1; i < PLANETS.length; i++) {
  assert.ok(
    PLANETS[i - 1].orbitSpeed > PLANETS[i].orbitSpeed,
    `${PLANETS[i - 1].id} should orbit faster than ${PLANETS[i].id}`
  );
}

assert.ok(SUN.color && SUN.radius > 0, 'sun data present');

const earth = PLANETS.find((p) => p.id === 'bumi');
const at0 = getPlanetPosition(earth, 0);
assert.equal(at0.x, earth.orbitRadius);
assert.equal(at0.z, 0);

const period = (2 * Math.PI) / earth.orbitSpeed;
const afterPeriod = getPlanetPosition(earth, period);
assert.ok(Math.abs(afterPeriod.x - at0.x) < 1e-9, 'x should return to start after one period');
assert.ok(Math.abs(afterPeriod.z - at0.z) < 1e-9, 'z should return to start after one period');

console.log('solar-system-data: all checks passed');
