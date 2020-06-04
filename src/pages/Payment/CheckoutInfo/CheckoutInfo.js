import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { API } from '../../../config';
import PaymentWay from './PaymentWay/PaymentWay';
import OrderHistory from './OrderHistory/OrderHistory';
import OrderInfo from './OrderInfo/OrderInfo';
import CheckListInfo from './CheckListInfo/CheckListInfo';
import OrderButton from '../../../components/Button/OrderButton/OrderButton';
import './CheckoutInfo.scss';
class CheckoutInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartList: [],
            addPrice: 0,
            isMadalShow: false
        }
    }
    
    componentDidMount() {
        localStorage.setItem("access_token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcl9pZCI6OX0.FfOcmHfD1eYobVgH8qWmfnucZQwkjsOs0KxlAxNO6so")
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
        }, () => console.log(this.state.cartList)))
    }

    handleGoMain = () => {
        alert("주문이 완료되었습니다.")
        this.props.history.push("/index")
    }

    render() {
        const { cartList, addPrice } = this.state;
        return (
            <div className="CheckoutInfo">
                <div className="stageInfo">
                    <div className="stageState">
                        <ul className="stateList">
                            <li>
                                <div className="backImg addressImg">  </div>
                                <span >01. 배송지 정보</span>   
                                <i className="arrowIcon"></i>
                            </li>
                            <li>
                                <div className="backImg paymentImg"></div>
                                <span className="stateActive">02. 결제방법</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="paymentUser">
                    <PaymentWay />
                    <OrderHistory cartList={cartList} totalPrice={addPrice}/>
                    <OrderInfo />
                    <CheckListInfo />
                   <div className="stageButton">
                        <OrderButton text="이전단계" clazzName="prevBtn" stageChange={this.props.stageChange}/>
                        <OrderButton text="주문확정" clazzName="nextBtn" stageChange={this.handleGoMain}/>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default withRouter(CheckoutInfo);