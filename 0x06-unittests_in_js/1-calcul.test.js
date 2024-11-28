const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should throw an error when dividing by 0', () => {
      assert.throws(() => calculateNumber('DIVIDE', 1.4, 0), /Cannot divide by zero/);
    });
  });

  describe('Invalid Operation', () => {
    it('should throw an error for invalid operation', () => {
      assert.throws(() => calculateNumber('DEVIDE', 1.4, 4.5), /Invalid operation/);
    });
  });
});
