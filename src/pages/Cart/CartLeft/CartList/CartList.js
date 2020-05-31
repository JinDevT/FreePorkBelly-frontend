import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CartList.scss'

class CartList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         num : 1 // props
    //     }
    // }
    handleIncrease = () => {
        const { onIncrease, id, number } = this.props;
        console.log("number: ", number)
        onIncrease(id);
    }

    handleDecrease = (id) => {
        const { onDecrease } = this.props;
        onDecrease(id);
    }

    handleRemove = () => {
        const { id, onRemove } = this.props;
        onRemove(id);
    }

    render() {
        const { id, img, name, purpose, standard, number, price} = this.props;
        console.log("cartList num: ", number)
        return (
            <>
                <li className="CartList">
                    <div className="productList productDet">
                        <Link to=""className="productImg">
                            <img alt="cartProductImg" src={img}/>
                        </Link>
                        <Link to="" className="productInfo">
                            <p className="productName">{name}</p>
                            <p className="productPurpose">{purpose}</p>
                        </Link>
                    </div>
                    <div className="productList productNum">
                        <span className="standard">{standard}</span>
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
                        <button type="button" onClick={this.handleRemove}>x</button>
                    </div>
                </li>
            </>
        );
    }
}

export default CartList;