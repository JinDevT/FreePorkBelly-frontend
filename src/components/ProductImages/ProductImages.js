import React, { Component } from "react";
import "./ProductImages.scss";

/*베스트상품 밑에 있는 상품 리스트 컴포넌트입니다. 다른곳에 붙이실때 부모 컴포넌트에 Main.scss에 있는 
.prodcutImagesContainer와 같이 wrap을 주시고 width를 설정하시면 넘치는 컴포넌트는 밑으로 내려옵니다 */

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
