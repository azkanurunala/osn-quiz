import assert from 'node:assert/strict';
import { SYMPTOM_PARTS, SYMPTOM_MARKERS, SYMPTOM_DETAIL_TARGET, SYMPTOM_DETAIL_CAMERA } from './symptoms-data.js';

assert.equal(SYMPTOM_PARTS.length, 5, 'expected 5 symptom parts');
assert.equal(SYMPTOM_MARKERS.length, 5, 'expected 5 symptom markers');

SYMPTOM_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  assert.ok(SYMPTOM_MARKERS.some((m) => m.id === part.id), `part "${part.id}" should have a matching marker`);
});

assert.equal(SYMPTOM_DETAIL_TARGET.length, 3);
assert.equal(SYMPTOM_DETAIL_CAMERA.length, 3);

console.log('symptoms-data: all checks passed');
