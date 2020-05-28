import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CartLeft from './CartLeft/CartLeft';
import CartRight from './CartRight/CartRight';
import './Cart.scss';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number : 1, 
            price: 13000,
            allPrice : 13000
        }
    }

    handleDecrease = () => {
        const { number } = this.state;
        if(number === 1) {
            return;
        } else if(number > 1) {
            this.setState({
                number: number - 1,
            }, () => this.calc())
        }
    };

    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1,
        }, () => this.calc());
    }

    calc = () => {
        const { number, price} = this.state;
        this.setState({
            allPrice : price * number
        }, () => console.log("calc callback: ", this.state.allPrice))
    }

    render() {
        const { number, price, allPrice } = this.state;
        return (
            <div className="Cart">
                <Header />
                <div className="container">
                    <div className="pageTitle">
                        <h1>장바구니</h1>
                    </div>
                    <div className="inner">
                        <CartLeft 
                            increase={this.handleIncrease}  
                            decrease={this.handleDecrease} 
                            number={number}
                            price={price}
                        />
                        <CartRight allPrice={allPrice} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Cart;