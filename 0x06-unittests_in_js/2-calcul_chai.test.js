// 2-calcul_chai.test.js
let chai;
let calcul;

before(async () => {
  // Dynamically import chai
  const chaiModule = await import('chai');
  chai = chaiModule.expect;
  
  // Import your calculator module normally
  calcul = require('./2-calcul_chai.js');
});

describe('Calculator Tests with Chai', function () {
  describe('Addition Tests', function () {
    it('should add two numbers correctly', function () {
      const result = calcul.add(2, 3);
      chai(result).to.equal(5);
    });
  });

  describe('Subtraction Tests', function () {
    it('should subtract two numbers correctly', function () {
      const result = calcul.subtract(5, 3);
      chai(result).to.equal(2);
    });
  });

  describe('Multiplication Tests', function () {
    it('should multiply two numbers correctly', function () {
      const result = calcul.multiply(2, 3);
      chai(result).to.equal(6);
    });
  });

  describe('Division Tests', function () {
    it('should divide two numbers correctly', function () {
      const result = calcul.divide(6, 3);
      chai(result).to.equal(2);
    });

    it('should throw an error when dividing by zero', function () {
      chai(() => {
        calcul.divide(6, 0);
      }).to.throw('Division by zero');
    });
  });
});
