import React, { Component } from 'react';
import CartList from './CartList/CartList';
import './CartLeft.scss';

class CartLeft extends Component {
    render() {
        const { increase, decrease, number, price } = this.props;
        return (
            <div className="CartLeft">
                <div className="leftHead">
                    <span className="productInfo">상품정보</span>
                    <span className="productNumber">수량</span>
                    <span className="productPrice">가격</span>
                </div>
                <ul className="leftBody">
                    <CartList 
                        increase={increase} 
                        decrease={decrease}
                        number={number}
                        price={price}
                    />
                </ul>
            </div>
        );
    }
}   

export default CartLeft;