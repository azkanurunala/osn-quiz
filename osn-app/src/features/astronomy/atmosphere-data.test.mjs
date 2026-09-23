import assert from 'node:assert/strict';
import { ATMOSPHERE_EARTH, ATMOSPHERE_LAYERS } from './atmosphere-data.js';

assert.ok(ATMOSPHERE_EARTH.texture && ATMOSPHERE_EARTH.radius > 0, 'earth data present');
assert.equal(ATMOSPHERE_LAYERS.length, 5, 'expected 5 atmosphere layers');

ATMOSPHERE_LAYERS.forEach((layer) => {
  for (const field of ['id', 'name', 'radius', 'color', 'opacity', 'fact']) {
    assert.ok(layer[field] !== undefined && layer[field] !== '', `${layer.id} missing field "${field}"`);
  }
  assert.ok(layer.opacity > 0 && layer.opacity < 1, `${layer.id} opacity should be a translucent fraction`);
});

assert.ok(ATMOSPHERE_LAYERS[0].radius > ATMOSPHERE_EARTH.radius, 'innermost layer should sit outside the Earth mesh');
for (let i = 1; i < ATMOSPHERE_LAYERS.length; i++) {
  assert.ok(
    ATMOSPHERE_LAYERS[i].radius > ATMOSPHERE_LAYERS[i - 1].radius,
    `${ATMOSPHERE_LAYERS[i].id} should have a larger radius than ${ATMOSPHERE_LAYERS[i - 1].id} (inner-to-outer order)`
  );
}

console.log('atmosphere-data: all checks passed');
