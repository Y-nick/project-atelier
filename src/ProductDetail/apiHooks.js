/* eslint-disable object-shorthand */
/* eslint-disable object-curly-spacing */
/* eslint-disable camelcase */
const axios = require('axios');

const useCurrentProduct = (productId) => (
  axios.get(`api/products/${productId}`)
);

const useStyles = (productId) => (
  axios.get(`api/products/${productId}/styles`)
);

const useReview = (productId) => {
  const options = {
    url: 'api/reviews/meta',
    method: 'get',
    params: { product_id: productId },
  };
  return axios(options);
};

const useCart = (sku_id, count) => {
  const options = {
    url: 'api/cart',
    method: 'post',
    data: {sku_id: sku_id, count: count},
  };
  return axios(options);
};

const useInteractions = (element, widget, time) => {
  const options = {
    url: '/interactions',
    method: 'post',
    data: {element: element, widget: widget, time: time.toString()},
  };
  return axios(options);
};

export {
  useCurrentProduct,
  useStyles,
  useReview,
  useCart,
  useInteractions,
};
