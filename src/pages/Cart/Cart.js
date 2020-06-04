import React, { Component } from 'react';
import { API } from '../../config.js';
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
            addPrice: 0
        }
    }
    
    componentDidMount() {
        localStorage.setItem("access_token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcl9pZCI6NH0.xeQ7_gfDUiKnLVqnIfCtPbyBQ7i7x8m-2xRDHEAGdmM")
        const token = localStorage.getItem("access_token");
        console.log(token)
        fetch(`${API}/order/cart` , {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization" : token
            },
        })
        .then(res => res.json())
        .then(res => this.setState({
            cartList : res.cart_items,
            addPrice : res.cart[0]["total_amount"]
        }))
    }

    // 총 상품금액 함수
    getData = () => {
        const token = localStorage.getItem("access_token");
        fetch(`${API}/order/cart`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization" : token
            },
        })
        .then(res => res.json())
        .then(res => this.setState({
            addPrice : res.cart[0]["total_amount"],
        }))
    }

    handleDecrease = (list) => {
        const token = localStorage.getItem("access_token");
        const { cartList } = this.state;
        const listCart = [...cartList];
        const i = listCart.indexOf(list);
        cartList[i] = {...list, quantity: --list.quantity};
        fetch(`${API}/order/cart`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization" : token
            },
            body : JSON.stringify({
                product_id: cartList[i].product_id,
                quantity : cartList[i].quantity
            })
        })
        .then(res => {
            if (res.status === 200) {
                this.getData();
            }
        })
        this.setState({
            cartList
        })
    };
    
    handleIncrease = (list) => {
        const token = localStorage.getItem("access_token");
        const { cartList } = this.state;
        const listCart = [...cartList];
        const i = listCart.indexOf(list);
        cartList[i] = {...list, quantity: ++list.quantity}
        fetch(`${API}/order/cart`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization" : token
            },
            body : JSON.stringify({
                product_id: cartList[i].product_id,
                quantity : cartList[i].quantity
            })
        })
        .then(res => {
            if (res.status === 200) {
                this.getData();
            }
        })
        this.setState({
            cartList
        })
    }

    handleRemove = list => {
        const token = localStorage.getItem("access_token");
        const { cartList } = this.state;
        const listCart = [...cartList];
        const i = listCart.indexOf(list);
        cartList[i] = {...list}
        fetch(`${API}/order/cart` , {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization" : token
            },
            body : JSON.stringify({
                product_id: cartList[i].product_id,
            })
        })
        .then(res => {
            if(res.status === 200) {
                this.getData();
            }
        })
        this.setState({
            cartList: cartList.filter(cartList => cartList.product_id !== list.product_id)
        })
    }
  
    render() {
        const {  cartList, cartQuantity } = this.state;
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
                        />
                        <CartRight totalPrice={this.state.addPrice}/>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Cart;