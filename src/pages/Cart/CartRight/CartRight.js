import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CartRight.scss';

class CartRight extends Component {

    handleGoPayment = () => {
        this.props.history.push("/payment");
    }

    handleGoList = () => {
        this.props.history.push("/list")
    }

    render() {
        const { totalPrice } = this.props;
        return (
            <div className="CartRight">
                <div className="rightInner">
                    <div className="priceBox">
                        <div className="rightFlex">
                            <span>총 상품 금액</span>
                            <span>{parseInt(totalPrice).toLocaleString()}원</span>
                        </div>
                    </div>
                    <div className="deliverBox">
                        <div className="rightFlex">
                            <span>총 배송비</span>
                            <span>0원</span>
                        </div>
                        <div className="rightFlex justifyBox basicOrder">
                            <span>기본 배송비</span>
                            <span>2500원</span>
                        </div>
                        <div className="rightFlex justifyBox firstBuy">
                            <span>첫구매 무료배송</span>
                            <span>-100%</span>
                        </div>
                    </div>
                    <div className="resultBox">
                        <div className="rightFlex benefit">
                            <span className="">첫구매 무료배송 혜택이 적용되었습니다.</span>
                        </div>
                        <div className="rightFlex justifyBox predictPrice">
                            <span>예상 결제 금액</span>
                        </div>
                        <div className="rightFlex justifyBox allPrice">   
                            <span>{parseInt(totalPrice).toLocaleString()}원</span>
                        </div>
                    </div>
                    <div className="buttonBox">
                        <div className="btnWrap">
                            <button type="button" className="orderBtn" onClick={this.handleGoPayment}>
                                <span>전체상품 주문하기</span>
                            </button>
                        </div>
                        <div className="btnWrap">
                            <button type="button" className="shoppingBtn" onClick={this.handleGoList}>
                                <span>쇼핑계속하기</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}   

export default withRouter(CartRight);