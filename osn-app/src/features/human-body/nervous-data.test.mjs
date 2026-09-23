import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { NERVOUS_PARTS, SENSE_MARKERS, NERVOUS_DETAIL_TARGET, NERVOUS_DETAIL_CAMERA } from './nervous-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(NERVOUS_PARTS.length, 7, 'expected 7 nervous-system parts');

NERVOUS_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  if (part.real) {
    part.models.forEach((modelPath) => {
      assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
    });
  }
});

assert.equal(SENSE_MARKERS.length, 4, 'expected 4 primitive sense markers (telinga, hidung, lidah, kulit)');
SENSE_MARKERS.forEach((marker) => {
  assert.ok(NERVOUS_PARTS.some((p) => p.id === marker.id), `marker "${marker.id}" should have a matching NERVOUS_PARTS entry`);
});

assert.equal(NERVOUS_DETAIL_TARGET.length, 3);
assert.equal(NERVOUS_DETAIL_CAMERA.length, 3);

console.log('nervous-data: all checks passed');
