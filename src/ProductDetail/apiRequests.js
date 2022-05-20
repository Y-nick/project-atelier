const axios = require('axios');

const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc';

// Update params object to meet your needs

const fetchCurrentProduct = (productId) => {
  const options = {
    url: `/products/${productId}`,
    baseURL: apiURL,
    method: 'get',
    headers: { authorization: process.env.API_KEY },
  };
  return axios(options);
};

const fetchStyles = (productId) => {
  const options = {
    url: `/products/${productId}/styles`,
    baseURL: apiURL,
    method: 'get',
    headers: { authorization: process.env.API_KEY },
  };
  return axios(options);
};

const fetchReview = (productId) => {
  const options = {
    url: '/reviews/meta',
    baseURL: apiURL,
    method: 'get',
    headers: { authorization: process.env.API_KEY },
    params: { product_id: productId },
  };
  return axios(options);
};

module.exports = {
  fetchCurrentProduct,
  fetchStyles,
  fetchReview,
};
