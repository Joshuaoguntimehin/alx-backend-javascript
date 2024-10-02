function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;  // You can change this condition as needed
    
    if (success) {
      resolve("Success! Response from API.");
    } else {
      reject("Error! Failed to get response from API.");
    }
  });
}

