import React, { Component }from 'react';
import './OrderHistory.scss';

class OrderHistory extends Component {
    render() {
        return (
            <div className="section OrderHistory">
                <h2>주문내역</h2>
                <div className="boxModel">
                    <div className="boxModelInner orderInner">
                        <ul className="historyList">
                            <li>
                                <div className="listName">
                                    <span>초신선 닭볶음탕</span>
                                    <span>탕류</span>
                                </div>
                                <div className="listPurpose">
                                    <span>180g 기준</span>
                                </div>
                                <div className="listNumber">
                                    <span>1팩</span>
                                </div>
                                <div className="listPrice">
                                    <span>4,900원</span>
                                </div>
                            </li>
                        </ul>
                        <div className="historyPrice">
                            <div className="priceInfoWrap">
                                <p>상품총합</p>
                                <p>가격</p>
                            </div>
                            <i className="plusIcon"></i>
                            <div className="priceInfoWrap">
                                <p>무통장 추가 금액</p>
                                <p>가격</p>
                            </div>
                            <i className="plusIcon"></i>
                            <div className="priceInfoWrap">
                                <p>배송비</p>
                                <p>0원</p>
                            </div>
                            <i className="minusIcon"></i>
                            <div className="priceInfoWrap">
                                <p>쿠폰/적립금</p>
                                <p>금액</p>
                            </div>
                            <i className="equalIcon"></i>
                            <div className="priceInfoWrap">
                                <p>최종 결제예정금액</p>
                                <p>총액금액원</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderHistory;