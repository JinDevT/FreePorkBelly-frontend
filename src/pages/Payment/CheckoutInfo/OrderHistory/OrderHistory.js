import React, { Component }from 'react';
import './OrderHistory.scss';
import OrderList from './OrderList/OrderList';

class OrderHistory extends Component {
   
    render() {
        const { cartList, totalPrice } = this.props;
        return (
            <div className="section OrderHistory">
                <h2>주문내역</h2>
                <div className="boxModel">
                    <div className="boxModelInner orderInner">
                        <ul className="historyList">
                            {
                                cartList && cartList.map((list) => {
                                    return (
                                        <OrderList 
                                            key={list.product_id}
                                            cartList={list}
                                        />
                                    );
                                })
                            }
                          
                        </ul>
                        <div className="historyPrice">
                            <div className="priceInfoWrap">
                                <p>상품총합</p>
                                <p>{parseInt(totalPrice).toLocaleString()}원</p>
                            </div>
                            <i className="plusIcon"></i>
                            <div className="priceInfoWrap">
                                <p>무통장 추가 금액</p>
                                <p>0원</p>
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
                                <p>{parseInt(totalPrice).toLocaleString()}원</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderHistory;