import React, { Component } from 'react';
import './OrderInfo.scss';

class OrderInfo extends Component {
    render() {
        return (
            <div className="section OrderInfo">
                <h2>배송정보</h2>
                <div className="boxModel orderInfoInner">
                    <div className="boxModelInner orderInfoInner">
                        <p>2020-06-06 (토) 오전 1시 ~ 7시 사이 도착예정</p>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default OrderInfo;