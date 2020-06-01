import React, { Component } from 'react';
import Sender from './Sender/Sender'
import Recipient from '../AddressInfo/Recipient/Recipient'
import OrderButton from '../../../components/Button/OrderButton/OrderButton';
import './AddressInfo.scss';

class AddressInfo extends Component {
    render() {
        return (
            <div className="AddressInfo">
                <div className="stageInfo">
                    <div className="stageState">
                        <ul className="stateList">
                            <li>
                                <div className="backImg addressImg">  </div>
                                <span className="stateActive">01. 배송지 정보</span>   
                                <i className="activeArrowIcon"></i>
                            </li>
                            <li>
                                <div className="backImg paymentImg"></div>
                                <span>02. 결제방법</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="paymentUser">
                    <Sender />
                    <Recipient />
                    <div className="stageButton">
                        <OrderButton text="이전단계" clazzName="prevBtn"/>
                        <OrderButton text="다음단계" clazzName="nextBtn" stageChange={this.props.stageChange}/>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default AddressInfo;