import React, { Component } from 'react';
import './CheckListInfo.scss';

class CheckListInfo extends Component {
    render() {
        return (
            <div className="section CheckListInfo">
                <div className="boxModel checkListInner">
                    <div className="checkListTit">
                        <div className="pointIcon">!</div>
                        <span>주문전 확인사항!</span>
                    </div>
                    <div className="checkSubTit">
                        <p>주문 확정 버튼을 누르면 고객님이 주문하신 상품의 생산이 시작될 예정이며, 생산이 완료되면 결제가 진행됩니다.</p>
                        <p>정상적인 결제가 가능하도록 카드 정보를 한번 더 확인해주세요! (유효기간 마료, 사용한도 초과, 잔액부족, 거래거절, 도난/분실 신청 등)</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckListInfo;