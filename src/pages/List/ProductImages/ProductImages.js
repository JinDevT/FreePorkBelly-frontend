import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import { API } from '../../../../src/config'
import "./ProductImages.scss";

/*베스트상품 밑에 있는 상품 리스트 컴포넌트입니다. 다른곳에 붙이실때 부모 컴포넌트에 Main.scss에 있는 
.prodcutImagesContainer와 같이 wrap을 주시고 width를 설정하시면 넘치는 컴포넌트는 밑으로 내려옵니다 */

class ProductImages extends Component {

    state = {
      productList: []
    }


    clickHandler = () => {
        const queryProductId = this.props.productId;
        console.log("query Product Id: ", queryProductId);
        this.props.history.push(`detail/${queryProductId}`);
    }

  render() {
    const { imgUrl, name, salesPrice, unitPrice, productId } = this.props;
    return (
      <div className="bestProductImages">
        <div className="productImageContainer" onClick={this.clickHandler}>
       
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

export default withRouter(ProductImages);
