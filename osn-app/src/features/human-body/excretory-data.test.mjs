import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { EXCRETORY_PARTS, EXCRETORY_DETAIL_TARGET, EXCRETORY_DETAIL_CAMERA } from './excretory-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(EXCRETORY_PARTS.length, 3, 'expected 3 excretory parts');

EXCRETORY_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'models', 'tint', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  part.models.forEach((modelPath) => {
    assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
  });
});

assert.equal(EXCRETORY_DETAIL_TARGET.length, 3);
assert.equal(EXCRETORY_DETAIL_CAMERA.length, 3);

console.log('excretory-data: all checks passed');
