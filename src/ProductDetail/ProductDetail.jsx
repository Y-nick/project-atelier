import React from 'react';

const apiRequest = require('./apiRequests');

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curProduct: {},
      curStyles: {},
      review: {},
    };
    // this.fetchProduct = this.fetchProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct(66642);
    this.getStyles(66642);
    this.getReview(66642);
  }

  getProduct = (productId) => {
    apiRequest.fetchCurrentProduct(productId)
      .then((response) => this.setState({
        curProduct: response.data,
      }))
      .catch((error) => console.log(error));
  };

  getStyles = (productId) => {
    apiRequest.fetchStyles(productId)
      .then((response) => this.setState({
        curStyles: response.data,
      }))
      .catch((error) => console.log(error));
  };

  getReview = (productId) => {
    apiRequest.fetchReview(productId)
      .then((response) => this.setState({
        review: response.data,
      }))
      .catch((error) => console.log(error));
  };

  render() {
    const { curProduct, curStyles, review } = this.state;
    return (
      <div>
        <div>Hello WORLD</div>
        <div>{curProduct.campus}</div>
      </div>
    );
  }
}

export default ProductDetails;
