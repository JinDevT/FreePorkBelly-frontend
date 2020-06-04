import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CartList.scss'
class CartList extends Component {
    render() {
        const { cartList, onIncrease, onDecrease, onRemove } = this.props;
       
        return (
            <>
                <li className="CartList">
                    <div className="productList productDet">
                        <Link to=""className="productImg">
                            <img src={cartList.sub_img_url} alt="cartProductImg" />
                        </Link>
                        <Link to="" className="productInfo">
                            <p className="productName">{cartList.name}</p>
                            <p className="productPurpose">{cartList.selected_option}</p>
                        </Link>
                    </div>
                    <div className="productList productNum">
                        <span className="standard">{cartList.per_quantity}</span>
                        <div className="numberBtn">
                            <button typee="button" onClick={() => onDecrease(cartList)}>-</button>
                            <span className="number">
                                {cartList.quantity}
                            </span>
                            <button type="button" onClick={() => onIncrease(cartList)}>+</button>
                        </div>
                    </div>
                    <div className="productList productPre">
                       {cartList.sales_price * cartList.quantity}원
                    </div>
                    <div className="productList productDel">
                        <button type="button" onClick={() => onRemove(cartList)}>x</button>
                    </div>
                </li>
            </>
        );
    }
}

export default CartList;