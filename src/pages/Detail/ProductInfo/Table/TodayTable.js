import React, { Component } from 'react';
import './Table.scss';

class TodayTable extends Component {
    render() {
        return (
            <div className="Table TodayTable">
                <div className="tableRow firstRow">
                    <div className="tableCell">
                        <p>서비스</p>
                    </div>
                    <div className="tableCell rightCell">
                        <p>당일배송</p>
                    </div>
                </div>
                <div className="tableRow">
                    <div className="tableCell">
                        <p>지역</p>
                    </div>
                    <div className="tableCell rightCell">
                        <p>서울</p>
                    </div>
                </div>
                <div className="tableRow">
                    <div className="tableCell">
                        <p>주문 마감</p>
                    </div>
                    <div className="tableCell rightCell">
                        <p>낮 12시</p>
                    </div>
                </div>
                <div className="tableRow">
                    <div className="tableCell">
                        <p>배송 시간</p>
                    </div>
                    <div className="tableCell rightCell">
                        <p>오후 7시 전</p>
                    </div>
                </div>
                <div className="tableRow">
                    <div className="tableCell">
                        <p>배송일</p>
                    </div>
                    <div className="tableCell rightCell">
                        <p>월 ~ 금</p>
                    </div>
                </div>
                <div className="tableRow">
                    <div className="tableCell">
                        <p>배송비</p>
                    </div>
                    <div className="tableCell rightCell">
                        <p>3,500원</p>
                    </div>
                </div>
                <div className="tableRow lastRow">
                    <div className="tableCell">
                        <p>비고</p>
                    </div>
                    <div className="tableCell rightCell">
                        <p>교통상황에 따라 지체될 수 있음</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodayTable;