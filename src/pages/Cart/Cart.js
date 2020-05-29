import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CartLeft from './CartLeft/CartLeft';
import CartRight from './CartRight/CartRight';
import './Cart.scss';

class Cart extends Component {
    render() {
        return (
            <div className="Cart">
                <Header />
                <div className="container">
                    <div className="pageTitle">
                        <h1>장바구니</h1>
                    </div>
                    <div className="inner">
                        <CartLeft />
                        <CartRight />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Cart;