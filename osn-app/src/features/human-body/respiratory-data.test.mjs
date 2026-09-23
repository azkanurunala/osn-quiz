import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { RESPIRATORY_PARTS, NOSE_MARKER, RESPIRATORY_DETAIL_TARGET, RESPIRATORY_DETAIL_CAMERA } from './respiratory-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(RESPIRATORY_PARTS.length, 4, 'expected 4 respiratory parts');

RESPIRATORY_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  if (part.real) {
    assert.ok(Array.isArray(part.models) && part.models.length > 0, `${part.id} marked real but has no models`);
    part.models.forEach((modelPath) => {
      assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
    });
  }
});

const hidung = RESPIRATORY_PARTS.find((p) => p.id === 'hidung');
assert.equal(hidung.real, false, 'hidung should be marked as a primitive fallback (no real model exists)');
assert.equal(NOSE_MARKER.position.length, 3);

assert.equal(RESPIRATORY_DETAIL_TARGET.length, 3);
assert.equal(RESPIRATORY_DETAIL_CAMERA.length, 3);

console.log('respiratory-data: all checks passed');
