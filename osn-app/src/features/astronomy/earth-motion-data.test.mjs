import assert from 'node:assert/strict';
import { EARTH_MOTION, getEarthOrbitPosition } from './earth-motion-data.js';

assert.ok(EARTH_MOTION.sun.texture && EARTH_MOTION.sun.radius > 0, 'sun data present');
assert.ok(EARTH_MOTION.earth.texture && EARTH_MOTION.earth.radius > 0, 'earth data present');
assert.ok(EARTH_MOTION.earth.orbitRadius > 0 && EARTH_MOTION.earth.orbitSpeed > 0, 'earth orbit params present');
assert.ok(EARTH_MOTION.facts.rotasi && EARTH_MOTION.facts.revolusi, 'rotasi/revolusi facts present');

const at0 = getEarthOrbitPosition(0);
assert.equal(at0.x, EARTH_MOTION.earth.orbitRadius);
assert.equal(at0.z, 0);

const period = (2 * Math.PI) / EARTH_MOTION.earth.orbitSpeed;
const afterPeriod = getEarthOrbitPosition(period);
assert.ok(Math.abs(afterPeriod.x - at0.x) < 1e-9, 'x should return to start after one period');
assert.ok(Math.abs(afterPeriod.z - at0.z) < 1e-9, 'z should return to start after one period');

console.log('earth-motion-data: all checks passed');
