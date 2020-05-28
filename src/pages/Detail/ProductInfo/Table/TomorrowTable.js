import React, { Component } from 'react';
import './Table.scss';

class TomorrowTable extends Component {
    render() {
        return (
            <div className="Table">
                <div className="tableRow firstRow">
                    <div className="tableCell">
                        <p>서비스</p>
                    </div>
                    <div className="tableCell">
                        <p>새벽 배송</p>
                    </div>
                    <div className="tableCell rightCell">
                        <p>우체국 배송</p>
                    </div>
                </div>
                <div className="tableRow">
                    <div className="tableCell">
                        <p>지역</p>
                    </div>
                    <div className="tableCell">
                        <p>서울/경기/인천</p>
                    </div>
                    <div className="tableCell rightCell">
                        <p>전국</p>
                    </div>
                </div>
                <div className="tableRow">
                    <div className="tableCell">
                        <p>주문 마감</p>
                    </div>
                    <div className="tableCell">
                        <p>오후 8시</p>
                    </div>
                    <div className="tableCell rightCell">
                        <p>오후 4시</p>
                    </div>
                </div>
                <div className="tableRow">
                    <div className="tableCell">
                        <p>배송 시간</p>
                    </div>
                    <div className="tableCell">
                        <p>다음 날 아침 7시 전</p>
                    </div>
                    <div className="tableCell rightCell">
                        <p>다음 날 저녁 전</p>
                    </div>
                </div>
                <div className="tableRow">
                    <div className="tableCell">
                        <p>배송일</p>
                    </div>
                    <div className="tableCell">
                        <p>화 - 도</p>
                    </div>
                    <div className="tableCell rightCell">
                        <p>화 - 토</p>
                    </div>
                </div>
                <div className="tableRow">
                    <div className="tableCell">
                        <p>배송비</p>
                    </div>
                    <div className="tableCell">
                        <p>3,500원</p>
                    </div>
                    <div className="tableCell rightCell">
                        <p>2,500원</p>
                    </div>
                </div>
                <div className="tableRow lastRow">
                    <div className="tableCell">
                        <p>비고</p>
                    </div>
                    <div className="tableCell">
                        <p>경기 일부 지역 제외</p>
                    </div>
                    <div className="tableCell rightCell">
                        <p>제주도 및 일부 도서산간 제외</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TomorrowTable;