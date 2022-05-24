import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductDesc from './ProductDesc/ProductDesc.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import './productDetail.css';

const apiRequest = require('./apiRequests');

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curProduct: {},
      features: [],
      styles: [],
      curStyle: {},
      skus: [],
      photos: [],
      curPhoto: 0,
      // review: {},
    };
  }

  componentDidMount() {
    this.getProduct(66642);
    this.getStyle(66642);
    // this.getReview(66642);
  }

  handleStyle = (style) => {
    this.setState({
      curStyle: style,
      skus: Object.entries(style.skus),
      photos: style.photos,
      curPhoto: 0,
    });
  };

  getProduct = (productId) => {
    apiRequest.fetchCurrentProduct(productId)
      .then((response) => this.setState({
        curProduct: response.data,
        features: response.data.features,
      }))
      .catch((error) => console.log(error));
  };

  getStyle = (productId) => {
    apiRequest.fetchStyles(productId)
      .then((response) => {
        this.setState({
          styles: response.data.results,
        });
        response.data.results.forEach((style) => {
          console.log(style);
          if (style['default?'] === true) {
            this.handleStyle(style);
          }
        });
      })
      .catch((error) => console.log(error));
  };

  handleCurPhoto = (value) => {
    this.setState({
      curPhoto: value,
    });
  };
  // getReview = (productId) => {
  //   apiRequest.fetchReview(productId)
  //     .then((response) => this.setState({
  //       review: response.data,
  //     }))
  //     .catch((error) => console.log(error));
  // };

  render() {
    const {
      curProduct,
      features,
      styles,
      curStyle,
      skus,
      photos,
      curPhoto,
    } = this.state;

    return (
      <div className="product-detail-container">
        <div>Hello WORLD</div>
        <ImageGallery pics={photos} curPhoto={curPhoto} handleCurPhoto={this.handleCurPhoto} />
        <ProductInfo
          product={curProduct}
          styleSale={curStyle.sale_price}
          stylePrice={curStyle.original_price}
        />
        <StyleSelector curStyle={curStyle} styles={styles} handleStyle={this.handleStyle} />
        <AddToCart SKUs={skus} />
        <ProductDesc
          slogan={curProduct.slogan}
          desc={curProduct.description}
          features={features}
        />
      </div>
    );
  }
}

export default ProductDetails;
