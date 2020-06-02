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
            cartList: [],
            cartQuantity: "",
        }
    }
    
    componentDidMount() {
        fetch("http://10.58.2.176:8000/order/cart" , {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcl9pZCI6MX0.ibPkQgVjNLXv3uLogTIOdjK9A87qVm62YGyhDUJIKm8"
            },
        })
        .then(res => res.json())
        .then(res => this.setState({
            cartList : res.cart_items,
        }, () => console.log(this.state.cartList)))
    }

    handleDecrease = (list) => {
        const { cartList } = this.state;
        const ListCart = [...cartList];
        const i = ListCart.indexOf(list);
        cartList[i] = {...list}
        cartList[i].quantity--;
           
        fetch("http://10.58.2.176:8000/order/cart" , {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcl9pZCI6MX0.ibPkQgVjNLXv3uLogTIOdjK9A87qVm62YGyhDUJIKm8"
            },
            body : JSON.stringify({
                product_id: cartList[i].product_id,
                quantity : cartList[i].quantity
            })
        })
        .then(res => console.log("res: ", res))
        this.setState({
            cartList
        })
    };
    
    handleIncrease = (list) => {
        const { cartList } = this.state;
        console.log("list: ", list)
        const ListCart = [...cartList];
        const i = ListCart.indexOf(list);
        cartList[i] = {...list}
        cartList[i].quantity++
        fetch("http://10.58.2.176:8000/order/cart" , {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcl9pZCI6MX0.ibPkQgVjNLXv3uLogTIOdjK9A87qVm62YGyhDUJIKm8"
            },
            body : JSON.stringify({
                product_id: cartList[i].product_id,
                quantity : cartList[i].quantity
            })
        })
        .then(res => console.log("res: ", res))
        this.setState({
            cartList
        })
    }

    handleRemove = list => {
        const { cartList } = this.state;
        console.log("list: ", list)
        const ListCart = [...cartList];
        const i = ListCart.indexOf(list);
        cartList[i] = {...list}
        fetch("http://10.58.2.176:8000/order/cart" , {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcl9pZCI6MX0.ibPkQgVjNLXv3uLogTIOdjK9A87qVm62YGyhDUJIKm8"
            },
            body : JSON.stringify({
                product_id: cartList[i].product_id,
            })
        })
        .then(res => {
            if(res.status === 200) {
                this.setState({
                    cartList: cartList.filter(cartList => cartList.product_id !== list.product_id)
                })
            }
        })
        
}

    calc = ( ) => {
        const { number, price } = this.state;
        this.setState({
            allPrice : price * number
        }, () => console.log("calc :", this.state.allPrice));
    }

    render() {
        const {  number, price, allPrice, cartList, cartQuantity } = this.state;
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
                            cartList={cartList}
                            cartQuantity={cartQuantity}
                            number={number}
                            price={price}
                        />
                        <CartRight  />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Cart;