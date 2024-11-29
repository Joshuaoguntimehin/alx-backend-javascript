// Call done when the test has finished successfully
const getPaymentTokenFromAPI = require('./6-payment_token.js'); // Adjust path as necessary

describe('getPaymentTokenFromAPI', () => {
    it('should resolve with the correct data when called with true', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).toEqual({ data: 'Successful response from the API' });
            done(); // Call done when the test has finished successfully
        });
    });

    it('should do nothing when called with false', (done) => {
        const response = getPaymentTokenFromAPI(false);
        expect(response).toBeUndefined();
        done(); // Call done immediately as there's no async operation for the `false` case
    });
});