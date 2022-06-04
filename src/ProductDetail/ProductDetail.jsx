import React from 'react';
import MainQAComponent from '../QuestionsAndAnswers/MainQAComponent.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductDesc from './ProductDesc/ProductDesc.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Tracker from './Tracker.jsx';
import './productDetail.css';

import {
  useCurrentProduct,
  useStyles,
  useReview,
} from './apiHooks';

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
      review: {},
    };
  }

  componentDidMount() {
    const prodNum = 66642;
    this.getProduct(prodNum);
    this.getStyle(prodNum);
    this.getReview(prodNum);
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
    useCurrentProduct(productId)
      .then((response) => this.setState({
        curProduct: response.data,
        features: response.data.features,
      }))
      .catch((error) => console.log(error));
  };

  getStyle = (productId) => {
    useStyles(productId)
      .then((response) => {
        this.setState({
          styles: response.data.results,
        });
        let foundStyle = false;
        response.data.results.forEach((style) => {
          if (style['default?'] === true) {
            foundStyle = true;
            this.handleStyle(style);
          }
          if (foundStyle === false) {
            this.handleStyle(response.data.results[0]);
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

  getReview = (productId) => {
    useReview(productId)
      .then((response) => this.setState({
        review: response.data,
      }))
      .catch((error) => console.log(error));
  };

  render() {
    const {
      curProduct,
      features,
      styles,
      curStyle,
      skus,
      photos,
      curPhoto,
      review,
    } = this.state;

    return (
      <div>
        <Tracker>
          <div className="productDetail">
            <div className="announce-message">SITEWIDE ANNOUNCEMENT HERE! BIG SALE ON CERTAIN ITEMS</div>
            <div className="product-detail-grid">
              <ImageGallery
                pics={photos}
                curPhoto={curPhoto}
                handleCurPhoto={this.handleCurPhoto}
              />
              <ProductInfo
                product={curProduct}
                styleSale={curStyle.sale_price}
                stylePrice={curStyle.original_price}
                review={review}
              />
              <StyleSelector curStyle={curStyle} styles={styles} handleStyle={this.handleStyle} />
              <AddToCart SKUs={skus} />
            </div>
            <ProductDesc
              slogan={curProduct.slogan}
              desc={curProduct.description}
              features={features}
            />
          </div>
        </Tracker>
        <MainQAComponent curProduct={curProduct} />
      </div>
    );
  }
}

export default ProductDetails;
