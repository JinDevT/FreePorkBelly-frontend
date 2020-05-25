import React, { Component } from "react";
import "./ProductImages.scss";

class ProductImages extends Component {
  render() {
    return (
      <div className="bestProductImages">
        <div className="productImageContainer">
          <img
            alt="productImage"
            src="https://www.jeongyookgak.com/assets/thumbnail/newwhite/porkbelly-fresh.jpg"
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
            <div className="productName">초신선 돼지 삼겹살 구이용</div>
            <div className="productPrice">기준가 13200원/600g</div>
            <div className="productPricePerGram">(100g당 2,200원)</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductImages;
