import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { NONCOMMUNICABLE_PARTS, NONCOMMUNICABLE_DETAIL_TARGET, NONCOMMUNICABLE_DETAIL_CAMERA } from './noncommunicable-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(NONCOMMUNICABLE_PARTS.length, 4, 'expected 4 noncommunicable-disease parts');

NONCOMMUNICABLE_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'models', 'tint', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  part.models.forEach((modelPath) => {
    assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
  });
});

assert.equal(NONCOMMUNICABLE_DETAIL_TARGET.length, 3);
assert.equal(NONCOMMUNICABLE_DETAIL_CAMERA.length, 3);

console.log('noncommunicable-data: all checks passed');
