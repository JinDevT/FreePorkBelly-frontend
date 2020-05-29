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
            allPrice : 15200,
            products : [
                {
                    id: 0,
                    img: "https://www.jeongyookgak.com/assets/thumbnail/newcart/porkleg-fresh.jpg",
                    name: "초신선 돼지 앞다리",
                    purpose: "제육욕",
                    standard: "100g 기준",
                    number: 1,
                    price: 8700
                },
                {
                    id: 1,
                    img: "https://www.jeongyookgak.com/assets/thumbnail/newcart/milk-fresh.jpg",
                    name: "우유",
                    purpose: "이유식",
                    standard: "100ml 기준",
                    number: 3,
                    price: 3200
                }
            ]
        }
    }

    handleDecrease = (id) => {
        const { products } = this.state;
        console.log("Cart에 넘어온 감소버튼 name: ", products[id].number);
        if(products[id].number === 1) { 
            return;
        } else if(products[id].number > 1) {
            this.setState({
                number: products[id].number - 1,
            }, () => this.calc())
        }
    };
    
    // 스프레드 오퍼레이터 ...
    handleIncrease = id => {
        const { products } = this.state;
        const find = products.find(product => product.id === id)
        console.log(find)
        this.setState({
            number : find.number + 1
        })

        // this.setState({
        //     number: products[id].number + 1,
        // }, () => this.calc(id));
       
        // this.setState({
        //     ...this.state,
        //     number: products.push(
        //       products[id].number + 1,
        //     )
        
        // }, () => console.log("setState: ", this.state.products[id].number))

        this.setState({
            
        })
    }

    handleRemove = id => {
        const { products } = this.state;
        this.setState({
            products: products.filter(product => product.id !== id)
        })
    }

    calc = (id) => {
        const { number, products } = this.state;
        this.setState({
            allPrice : products[id].price * number
        }, () => console.log("calc :", this.state.allPrice));
    }

    render() {
        const { number, products, allPrice } = this.state;
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
                            products={products}
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