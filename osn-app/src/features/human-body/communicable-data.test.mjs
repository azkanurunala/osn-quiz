import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { COMMUNICABLE_PARTS, PATHOGEN_MARKERS, COMMUNICABLE_DETAIL_TARGET, COMMUNICABLE_DETAIL_CAMERA } from './communicable-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(COMMUNICABLE_PARTS.length, 4, 'expected 4 communicable-disease parts');

COMMUNICABLE_PARTS.forEach((part) => {
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

assert.ok(PATHOGEN_MARKERS.flu && PATHOGEN_MARKERS.diare && PATHOGEN_MARKERS.cacar, 'all 3 pathogen markers present');
assert.equal(PATHOGEN_MARKERS.cacar.spots.length, 3);

assert.equal(COMMUNICABLE_DETAIL_TARGET.length, 3);
assert.equal(COMMUNICABLE_DETAIL_CAMERA.length, 3);

console.log('communicable-data: all checks passed');
