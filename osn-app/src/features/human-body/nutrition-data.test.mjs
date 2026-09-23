import assert from 'node:assert/strict';
import { NUTRITION_WEDGES, WATER_GLASS, PLATE_RADIUS } from './nutrition-data.js';

assert.equal(NUTRITION_WEDGES.length, 4, 'expected 4 food-group wedges');

NUTRITION_WEDGES.forEach((wedge) => {
  for (const field of ['id', 'name', 'thetaStart', 'thetaLength', 'color', 'fact']) {
    assert.ok(wedge[field] !== undefined, `${wedge.id} missing field "${field}"`);
  }
});

const totalTheta = NUTRITION_WEDGES.reduce((sum, w) => sum + w.thetaLength, 0);
assert.ok(Math.abs(totalTheta - 2 * Math.PI) < 0.0001, `wedges should sum to a full circle (2*PI), got ${totalTheta}`);

assert.ok(WATER_GLASS.fact && WATER_GLASS.position.length === 3);
assert.ok(PLATE_RADIUS > 0);

console.log('nutrition-data: all checks passed');
