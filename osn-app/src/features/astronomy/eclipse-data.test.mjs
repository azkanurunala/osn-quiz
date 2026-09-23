import assert from 'node:assert/strict';
import { ECLIPSE_BODIES, ECLIPSE_LAYOUTS, ECLIPSE_ALIGNMENT_FACT } from './eclipse-data.js';

for (const id of ['sun', 'earth', 'moon']) {
  assert.ok(ECLIPSE_BODIES[id].texture && ECLIPSE_BODIES[id].radius > 0, `${id} body data present`);
}

for (const [mode, layout] of Object.entries(ECLIPSE_LAYOUTS)) {
  assert.ok(layout.label && layout.fact, `${mode} layout has label/fact`);
  assert.ok(['sun', 'earth', 'moon'].includes(layout.blockerId), `${mode} blockerId is a valid body`);
  for (const id of ['sun', 'earth', 'moon']) {
    assert.equal(layout[id].length, 3, `${mode}.${id} position is a 3-tuple`);
    assert.equal(layout[id][1], 0, `${mode}.${id} should sit on y=0`);
    assert.equal(layout[id][2], 0, `${mode}.${id} should sit on z=0 (straight-line alignment)`);
  }
}

assert.ok(ECLIPSE_ALIGNMENT_FACT.length > 0, 'alignment fact present');

console.log('eclipse-data: all checks passed');
