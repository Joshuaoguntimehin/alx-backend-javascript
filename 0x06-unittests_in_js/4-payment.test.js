// Spy on console.log
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber to always return 10 and verify console.log output', () => {
    // Stub the Utils.calculateNumber function to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function to test
    sendPaymentRequestToApi(100, 20);

    // Assertions
    sinon.assert.calledOnceWithExactly(calculateNumberStub, 'SUM', 100, 20); // Verify stub was called with the correct arguments
    sinon.assert.calledOnceWithExactly(consoleLogSpy, 'The total is: 10'); // Verify console.log output

    // Restore the stub and spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
