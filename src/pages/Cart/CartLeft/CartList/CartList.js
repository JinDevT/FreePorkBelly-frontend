import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CartList.scss'

class CartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num : ""
        }
    }
    handleIncrease = () => {
        const { increase } = this.props;
        increase();
    }

    handleDecrease = () => {
        const { decrease } = this.props;
        decrease();
    }

    render() {
        const { number, price } = this.props;
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
                        <span className="standard">100g 기준</span>
                        <div className="numberBtn">
                            <button typee="button" onClick={this.handleDecrease}>-</button>
                            <span className="number">{number}</span>
                            <button type="button" onClick={this.handleIncrease}>+</button>
                        </div>
                    </div>
                    <div className="productList productPre">
                       {price * number}원
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