const axios = require('axios');

const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products';

// Update params object to meet your needs
const options = {
  url: apiURL,
  method: 'get',
  headers: { authorization: process.env.API_KEY },
  params: {
    page: 1,
    count: 5,
  },
};

const request = () => (
  axios(options)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error))
);

module.exports = {
  request,
};
