import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { SKELETAL_PARTS, SKELETAL_PRIMITIVES, SKELETAL_DETAIL_TARGET, SKELETAL_DETAIL_CAMERA } from './skeletal-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(SKELETAL_PARTS.length, 7, 'expected 7 skeletal/muscular parts');

SKELETAL_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  if (part.real) {
    part.models.forEach((modelPath) => {
      assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
    });
  }
});

const realCount = SKELETAL_PARTS.filter((p) => p.real).length;
assert.equal(realCount, 2, 'expected exactly 2 real-model parts (tulang-belakang, panggul)');

assert.ok(SKELETAL_PRIMITIVES.tengkorak && SKELETAL_PRIMITIVES.tulangRusuk, 'primitive geometry present');
assert.equal(SKELETAL_DETAIL_TARGET.length, 3);
assert.equal(SKELETAL_DETAIL_CAMERA.length, 3);

console.log('skeletal-data: all checks passed');
