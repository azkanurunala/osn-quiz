import assert from 'node:assert/strict';
import { EARTH_LAYERS } from './earth-layers-data.js';

assert.equal(EARTH_LAYERS.length, 4, 'expected 4 Earth layers');

EARTH_LAYERS.forEach((layer) => {
  for (const field of ['id', 'name', 'radius', 'color', 'opacity', 'fact']) {
    assert.ok(layer[field] !== undefined && layer[field] !== '', `${layer.id} missing field "${field}"`);
  }
  assert.ok(layer.opacity > 0 && layer.opacity <= 1, `${layer.id} opacity should be a valid translucent-to-opaque fraction`);
});

for (let i = 1; i < EARTH_LAYERS.length; i++) {
  assert.ok(
    EARTH_LAYERS[i - 1].radius > EARTH_LAYERS[i].radius,
    `${EARTH_LAYERS[i - 1].id} should have a larger radius than ${EARTH_LAYERS[i].id} (outer-to-inner order)`
  );
}

console.log('earth-layers-data: all checks passed');
