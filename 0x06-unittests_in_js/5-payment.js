const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and log the result', () => {
    // Create a spy for the Utils.calculateNumber function
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function to test
    sendPaymentRequestToApi(100, 20);

    // Assertions
    sinon.assert.calledOnceWithExactly(calculateNumberSpy, 'SUM', 100, 20);

    // Restore the original function
    calculateNumberSpy.restore();
  });
});
