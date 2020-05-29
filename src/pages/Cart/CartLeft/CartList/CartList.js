import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CartList.scss'

class CartList extends Component {
    render() {
        return (
            <>
                <li className="CartList">
                    <div className="productList productDet">
                        <Link to=""className="productImg">
                            <img alt="cartProductImg"/>
                        </Link>
                        <Link to="" className="productInfo">
                            <p className="productName">초신선 돼지 앞다리</p>
                            <p className="productPurpose">제육욕</p>
                        </Link>
                    </div>
                    <div className="productList productNum">
                        <span className="standard">g 기준</span>
                        <div className="numberBtn">
                            <button typee="button">-</button>
                            <span className="number">1</span>
                            <button type="button">+</button>
                        </div>
                    </div>
                    <div className="productList productPre">
                        가격
                    </div>
                    <div className="productList productDel">
                        <button type="button">x</button>
                    </div>
                </li>
            </>
        );
    }
}

export default CartList;