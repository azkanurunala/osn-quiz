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
    part.models.forEach((modelPath) => {
      assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
    });
  } else {
    assert.ok(DIGESTIVE_PRIMITIVES[part.id], `${part.id} marked primitive but has no entry in DIGESTIVE_PRIMITIVES`);
  }
});

assert.equal(DIGESTIVE_DETAIL_TARGET.length, 3);
assert.equal(DIGESTIVE_DETAIL_CAMERA.length, 3);

console.log('digestive-data: all checks passed');
