import React, { Component } from 'react';
import CartList from './CartList/CartList';
import './CartLeft.scss';

class CartLeft extends Component {
    render() {
        const { onIncrease, onDecrease, onRemove, products } = this.props;
        return (
            <div className="CartLeft">
                <div className="leftHead">
                    <span className="productInfo">상품정보</span>
                    <span className="productNumber">수량</span>
                    <span className="productPrice">가격</span>
                </div>
                <ul className="leftBody">
                    {
                        products.map((product, i) => {
                             console.log("map price: ", product.price);
                            return (
                                <CartList 
                                    key={i}
                                    onIncrease={onIncrease} 
                                    onDecrease={onDecrease}
                                    onRemove={onRemove}
                                    id={product.id}
                                    img={product.img}
                                    name={product.name}
                                    purpose={product.purpose}
                                    standard={product.standard}
                                    number={product.number}
                                    price={product.price}
                                />
                            );
                        })
                    }
                    
                </ul>
            </div>
        );
    }
}   

export default CartLeft;