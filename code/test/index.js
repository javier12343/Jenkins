const sum = require('../');
const assert = require('assert');

describe('TEST DE SUMA', () => {
  it('Numero Positivo', () => {
    assert.equal(sum(3, 5), 8);
  });
  it('Numero Negativo', () => {
    assert.equal(sum(3, -5), -2);
  });
  it('Numero Decimal', () => {
    assert.equal(sum(3.5, 7.1), 10.6);
  });
});
