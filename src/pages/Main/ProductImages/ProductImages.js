import React, { Component } from "react";
import "./ProductImages.scss";

class ProductImages extends Component {
  render() {
    const { imgUrl, name, salesPrice, unitPrice } = this.props;
    return (
      <div className="bestProductImages">
        <div className="productImageContainer">
          <img
            alt="productImage"
            src={imgUrl}
          />
        </div>
        <div className="productInfo">
          <div className="shoppingCar">
            <img
              alt="shopping car"
              src="https://www.jeongyookgak.com/assets/index/shadow.svg"
            />
          </div>
          <div className="productContainer">
          <div className="productName">{name}</div>
          <div className="productPrice">{salesPrice}</div>
            <div className="productPricePerGram">{unitPrice}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductImages;
