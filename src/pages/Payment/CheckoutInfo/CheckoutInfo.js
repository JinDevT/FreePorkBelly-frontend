import React, { Component } from 'react';
import OrderButton from "../../../components/Button/OrderButton/OrderButton";
import './CheckoutInfo.scss';

class CheckoutInfo extends Component {
    render() {
        return (
            <>
                <div className="CheckoutInfo">
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
                   결제방법
                   <div className="stageButton">
                        <OrderButton text="이전단계" clazzName="prevBtn" stageChange={this.props.stageChange}/>
                        <OrderButton text="다음단계" clazzName="nextBtn" stageChange={this.props.stageChange}/>
                    </div>
                </div>
            </>
            
        );
    }
}

export default CheckoutInfo;