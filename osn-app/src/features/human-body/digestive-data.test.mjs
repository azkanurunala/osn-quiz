import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { DIGESTIVE_PARTS, DIGESTIVE_PRIMITIVES, DIGESTIVE_DETAIL_TARGET, DIGESTIVE_DETAIL_CAMERA } from './digestive-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(DIGESTIVE_PARTS.length, 5, 'expected 5 digestive parts');

DIGESTIVE_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  if (part.real) {
    assert.ok(part.tint, `${part.id} marked real but has no tint color`);
    part.models.forEach((modelPath) => {
      assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
    });
  } else {
    assert.ok(DIGESTIVE_PRIMITIVES[part.id], `${part.id} marked primitive but has no entry in DIGESTIVE_PRIMITIVES`);
  }
});

// Chain-continuity check: each primitive segment's lower Y bound should be at or above the next
// segment's upper Y bound minus a small overlap tolerance, i.e. no visible gap between segments.
const mulutBottom = DIGESTIVE_PRIMITIVES.mulut.position[1] - DIGESTIVE_PRIMITIVES.mulut.radius;
const kerongkonganTop = DIGESTIVE_PRIMITIVES.kerongkongan.from[1];
assert.ok(kerongkonganTop <= mulutBottom + 0.05, 'kerongkongan top should be close to mulut bottom');

const kerongkonganBottom = DIGESTIVE_PRIMITIVES.kerongkongan.to[1];
const lambungTop = DIGESTIVE_PRIMITIVES.lambung.position[1] + DIGESTIVE_PRIMITIVES.lambung.radiusY;
assert.ok(lambungTop >= kerongkonganBottom - 0.05, 'lambung top should reach up to meet kerongkongan bottom');

const lambungBottom = DIGESTIVE_PRIMITIVES.lambung.position[1] - DIGESTIVE_PRIMITIVES.lambung.radiusY;
const SMALL_INTESTINE_BBOX_TOP_Y = 0.3652; // from gltf-transform inspect public/models/small_intestine.glb
assert.ok(lambungBottom <= SMALL_INTESTINE_BBOX_TOP_Y + 0.05, 'lambung bottom should reach down to overlap the real intestine mesh');

assert.equal(DIGESTIVE_DETAIL_TARGET.length, 3);
assert.equal(DIGESTIVE_DETAIL_CAMERA.length, 3);

console.log('digestive-data: all checks passed');
