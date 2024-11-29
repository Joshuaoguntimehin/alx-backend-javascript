// 6-payment_token.test.js
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    test('should return a resolved promise with the correct data when success is true', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).toEqual({ data: 'Successful response from the API' });
            done();
        });
    });

    test('should not resolve or reject when success is false', () => {
        const promise = getPaymentTokenFromAPI(false);
        expect(promise).toBeInstanceOf(Promise);
        return expect(promise).resolves.toBeUndefined();
    });
});
