import React, { Component } from 'react';
import CartList from './CartList/CartList';
import './CartLeft.scss';

class CartLeft extends Component {
    render() {
        const { onIncrease, onDecrease, onRemove, cartList, cartQuantity, cartPrice } = this.props;
        return (
            <div className="CartLeft">
                <div className="leftHead">
                    <span className="productInfo">상품정보</span>
                    <span className="productNumber">수량</span>
                    <span className="productPrice">가격</span>
                </div>
                <ul className="leftBody">
                    {
                        cartList && cartList.map((list) => {
                            return (
                                <CartList 
                                    key={list.product_id}
                                    cartList={list}
                                    cartQuantity={cartQuantity}
                                    onIncrease={onIncrease} 
                                    onDecrease={onDecrease}
                                    onRemove={onRemove}
                                />
                            )
                        })
                    }
                    
                </ul>
            </div>
        );
    }
}   

export default CartLeft;