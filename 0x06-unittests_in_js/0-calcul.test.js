// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should return the sum of rounded values of a and b', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Edge cases
  it('should handle negative numbers', function () {
    assert.strictEqual(calculateNumber(-1.4, 2.6), 2);
  });

  it('should handle large numbers', function () {
    assert.strictEqual(calculateNumber(1000000, 1000000), 2000000);
  });
});
