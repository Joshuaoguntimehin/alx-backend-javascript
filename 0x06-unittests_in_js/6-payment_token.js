// Call done when the test has finished successfully
function getPaymentTokenFromAPI(success){
    return new Promise((resolve, reject) =>{
        const success = true
        if (success){
            resolve({data: 'Successful response from the API' })
        }
    });
}

module.exports = getPaymentTokenFromAPI;