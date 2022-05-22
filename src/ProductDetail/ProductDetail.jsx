import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductDesc from './ProductDesc/ProductDesc.jsx';

const apiRequest = require('./apiRequests');

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curProduct: {},
      features: [],
      curStyle: {},
      // review: {},
    };
  }

  componentDidMount() {
    this.getProduct(66642);
    this.getStyle(66642, 411534);
    this.getReview(66642);
  }

  getProduct = (productId) => {
    apiRequest.fetchCurrentProduct(productId)
      .then((response) => this.setState({
        curProduct: response.data,
        features: response.data.features,
      }))
      .catch((error) => console.log(error));
  };

  getStyle = (productId, styleID) => {
    apiRequest.fetchStyles(productId)
      .then((response) => {
        response.data.results.forEach((style) => {
          if (style.style_id === styleID) {
            this.setState({
              curStyle: style,
            });
          }
        });
      })
      .catch((error) => console.log(error));
  };

  // getReview = (productId) => {
  //   apiRequest.fetchReview(productId)
  //     .then((response) => this.setState({
  //       review: response.data,
  //     }))
  //     .catch((error) => console.log(error));
  // };

  render() {
    const { curProduct, curStyle, features } = this.state;
    console.log(curProduct);
    return (
      <div>
        <div>Hello WORLD</div>
        <ProductInfo
          product={curProduct}
          styleSale={curStyle.sale_price}
          stylePrice={curStyle.original_price}
        />
        <ProductDesc desc={curProduct.description} features={features} />
      </div>
    );
  }
}

export default ProductDetails;
