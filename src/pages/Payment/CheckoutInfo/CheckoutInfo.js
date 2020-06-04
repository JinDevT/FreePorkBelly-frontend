import React, { Component } from 'react';
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
            showTooltip : false,
        }
    }

    showTooltip = () => {
        const { showTooltip } = this.state;
        this.setState({
            showTooltip: !showTooltip
        })
    }

    render() {
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
                    <OrderHistory />
                    <OrderInfo />
                    <CheckListInfo />
                   <div className="stageButton">
                        <OrderButton text="이전단계" clazzName="prevBtn" stageChange={this.props.stageChange}/>
                        <OrderButton text="주문확정" clazzName="nextBtn" />
                    </div>
                </div>
            </div>
            
        );
    }
}

export default CheckoutInfo;