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
            number: 1,
            allPrice : 13000,
            price: 13000
        }
    }
    
    handleDecrease = () => {
        const { number } = this.state;
        console.log("Cart에 넘어온 감소버튼 name: ",number);
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
        console.log("증가 눌러서 여기 들어왔어!!", number)
        this.setState({
            number:number + 1
        }, () => this.calc())
    }

    handleRemove = id => {
        const { products } = this.state;
            if(products){
            this.setState({
                products: products.filter(product => product.id !== id)
            })
        }
    }

    calc = ( ) => {
        const { number, price } = this.state;
        this.setState({
            allPrice : price * number
        }, () => console.log("calc :", this.state.allPrice));
    }

    render() {
        const {  number, price, allPrice } = this.state;
        return (
            <div className="Cart">
                <Header />
                <div className="container">
                    <div className="pageTitle">
                        <h1>장바구니</h1>
                    </div>
                    <div className="inner">
                        <CartLeft 
                            onIncrease={this.handleIncrease}  
                            onDecrease={this.handleDecrease} 
                            onRemove={this.handleRemove}
                            number={number}
                            price={price}
                        />
                        <CartRight allPrice={allPrice}  />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Cart;