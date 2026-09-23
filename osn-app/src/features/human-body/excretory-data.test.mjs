import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { EXCRETORY_PARTS, EXCRETORY_DETAIL_TARGET, EXCRETORY_DETAIL_CAMERA } from './excretory-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(EXCRETORY_PARTS.length, 3, 'expected 3 excretory parts');

EXCRETORY_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'models', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  assert.ok(Array.isArray(part.models) && part.models.length > 0, `${part.id} should list at least one model`);
  part.models.forEach((modelPath) => {
    assert.ok(modelPath.startsWith('/models/'), `${part.id} model path should be under /models/`);
    const onDisk = `${PUBLIC_DIR}${modelPath}`;
    assert.ok(existsSync(onDisk), `model file missing on disk: ${onDisk}`);
  });
});

assert.equal(EXCRETORY_DETAIL_TARGET.length, 3, 'detail target should be a 3-tuple');
assert.equal(EXCRETORY_DETAIL_CAMERA.length, 3, 'detail camera should be a 3-tuple');

console.log('excretory-data: all checks passed');
