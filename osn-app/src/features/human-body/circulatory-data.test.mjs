import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { CIRCULATORY_PARTS, CIRCULATORY_DETAIL_TARGET, CIRCULATORY_DETAIL_CAMERA } from './circulatory-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(CIRCULATORY_PARTS.length, 2, 'expected 2 circulatory parts');

CIRCULATORY_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'models', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  part.models.forEach((modelPath) => {
    assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
  });
});

assert.equal(CIRCULATORY_DETAIL_TARGET.length, 3);
assert.equal(CIRCULATORY_DETAIL_CAMERA.length, 3);

console.log('circulatory-data: all checks passed');
