import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.test';

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('returns 6 for inputs 1.4 and 4.5', () => {
      const result = calculateNumber('SUM', 1.4, 4.5);
      expect(result).to.equal(6);
    });
  });

  describe('SUBTRACT', () => {
    it('returns -4 for inputs 1.4 and 4.5', () => {
      const result = calculateNumber('SUBTRACT', 1.4, 4.5);
      expect(result).to.equal(-4);
    });
  });

  describe('DIVIDE', () => {
    it('returns 0.2 for inputs 1.4 and 4.5', () => {
      const result = calculateNumber('DIVIDE', 1.4, 4.5);
      expect(result).to.equal(0.2);
    });

    it('throws an error when dividing by 0', () => {
      const action = () => calculateNumber('DIVIDE', 1.4, 0);
      expect(action).to.throw('Cannot divide by zero');
    });
  });

  describe('Invalid Operation', () => {
    it('throws an error for invalid operation', () => {
      const action = () => calculateNumber('DEVIDE', 1.4, 4.5);
      expect(action).to.throw('Invalid operation');
    });
  });
});
