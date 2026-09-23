import assert from 'node:assert/strict';
import { DNA_STRAND_A_POINTS, DNA_STRAND_B_POINTS, DNA_RUNGS, BIOTECH_PARTS, FERMENTATION_JAR } from './biotech-data.js';

assert.equal(DNA_STRAND_A_POINTS.length, 40, 'expected 40 points on strand A');
assert.equal(DNA_STRAND_B_POINTS.length, 40, 'expected 40 points on strand B');
[...DNA_STRAND_A_POINTS, ...DNA_STRAND_B_POINTS].forEach((p) => assert.equal(p.length, 3, 'each strand point should be [x,y,z]'));

assert.equal(DNA_RUNGS.length, 18, 'expected 18 rungs');
DNA_RUNGS.forEach((rung) => {
  assert.equal(rung.from.length, 3);
  assert.equal(rung.to.length, 3);
});

assert.equal(BIOTECH_PARTS.length, 2, 'expected 2 biotech parts (dna, fermentasi)');
BIOTECH_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
});

assert.equal(FERMENTATION_JAR.position.length, 3);
assert.ok(FERMENTATION_JAR.radius > 0 && FERMENTATION_JAR.height > 0);

console.log('biotech-data: all checks passed');
