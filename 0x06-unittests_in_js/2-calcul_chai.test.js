// 2-calcul_chai.test.js
(async () => {
    const chai = await import('chai');
    const calculateNumber = require('./2-calcul_chai.js');
    const expect = chai.expect;  // Using Chai's expect style
  
    describe('calculateNumber', function () {
      it('should return the sum of two rounded numbers', function () {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      });
  
      it('should return the result of subtracting the two rounded numbers', function () {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      });
  
      it('should return the result of dividing the two rounded numbers', function () {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      });
  
      it('should return "Error" when dividing by zero', function () {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      });
    });
  })();
  