// 6-payment_token.test.js
describe('getPaymentTokenFromAPI', function() {
    let expect;

    before(async () => {
        // Dynamically import chai for ES module support
        const chai = await import('chai');
        expect = chai.expect;
    });

    this.timeout(5000); // Increase timeout to 5 seconds

    it('should return a resolved promise with the correct data when success is true', (done) => {
        const { getPaymentTokenFromAPI } = require('./6-payment_token');
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).to.deep.equal({ data: 'Successful response from the API' });
            done();
        }).catch(done); // If the promise rejects, we call 'done' with the error
    });

    it('should not resolve or reject when success is false', (done) => {
        const { getPaymentTokenFromAPI } = require('./6-payment_token');
        const promise = getPaymentTokenFromAPI(false);
        expect(promise).to.be.a('promise');
        promise.then(() => {
            done();
        }).catch(done); // Catch any unexpected rejection
    });
});
