import assert from 'node:assert/strict';
import { PHASE_NAMES, getMoonOrbitPosition, getPhaseNameAtAngle } from './moon-phases-data.js';

assert.equal(PHASE_NAMES.length, 8, 'expected 8 named phases');

const at0 = getMoonOrbitPosition(0);
assert.equal(at0.angle, 0);

// Every one of the 8 named phases should be reachable across a full orbit.
const seen = new Set();
for (let i = 0; i < 8; i++) {
  seen.add(getPhaseNameAtAngle((i / 8) * Math.PI * 2));
}
assert.equal(seen.size, 8, 'all 8 phase names should be reachable across one orbit');

assert.equal(getPhaseNameAtAngle(0), 'Bulan Baru');
assert.equal(getPhaseNameAtAngle(Math.PI), 'Purnama');

console.log('moon-phases-data: all checks passed');
