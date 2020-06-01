import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CartList.scss'

class CartList extends Component {
   
    handleIncrease = () => {
        const { onIncrease } = this.props;
    
        onIncrease();
    }

    handleDecrease = () => {
        const { onDecrease } = this.props;
        onDecrease();
    }

    handleRemove = () => {
        const { id, onRemove } = this.props;
        onRemove(id);
    }

    render() {
        const { number, price} = this.props;
        console.log("cartList num: ", number)
        return (
            <>
                <li className="CartList">
                    <div className="productList productDet">
                        <Link to=""className="productImg">
                            <img src="https://www.jeongyookgak.com/assets/thumbnail/newcart/porkleg-fresh.jpg" alt="cartProductImg" />
                        </Link>
                        <Link to="" className="productInfo">
                            <p className="productName">초신선 돼지 앞다리</p>
                            <p className="productPurpose">제육용</p>
                        </Link>
                    </div>
                    <div className="productList productNum">
                        <span className="standard">100g 기준</span>
                        <div className="numberBtn">
                            <button typee="button" onClick={this.handleDecrease}>-</button>
                            <span className="number">{number}</span>
                            <button type="button" onClick={() => {this.handleIncrease(number)}}>+</button>
                        </div>
                    </div>
                    <div className="productList productPre">
                       {price * number}원
                    </div>
                    <div className="productList productDel">
                        <button type="button" onClick={this.handleRemove}>x</button>
                    </div>
                </li>
            </>
        );
    }
}

export default CartList;