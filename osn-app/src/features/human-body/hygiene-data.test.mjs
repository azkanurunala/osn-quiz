import assert from 'node:assert/strict';
import { HYGIENE_PARTS, HYGIENE_MARKERS, HYGIENE_DETAIL_TARGET, HYGIENE_DETAIL_CAMERA } from './hygiene-data.js';

assert.equal(HYGIENE_PARTS.length, 5, 'expected 5 hygiene parts');
assert.equal(HYGIENE_MARKERS.length, 5, 'expected 5 hygiene markers');

HYGIENE_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  assert.ok(HYGIENE_MARKERS.some((m) => m.id === part.id), `part "${part.id}" should have a matching marker`);
});

assert.equal(HYGIENE_DETAIL_TARGET.length, 3);
assert.equal(HYGIENE_DETAIL_CAMERA.length, 3);

console.log('hygiene-data: all checks passed');
