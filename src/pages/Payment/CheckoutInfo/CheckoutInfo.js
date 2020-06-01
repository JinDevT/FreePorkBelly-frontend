import React, { Component } from 'react';
import OrderButton from "../../../components/Button/OrderButton/OrderButton";
import './CheckoutInfo.scss';

class CheckoutInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }

    render() {
        console.log(this.state.isChecked);
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
                   <div className="section paymentWay">
                        <h2>결제방법</h2>
                        <div className="boxModel">
                            <div className="boxModelInner">
                                <ul className="wayList">
                                    <li>
                                        <label> 
                                            <input type="radio"/>
                                            카드결제
                                        </label>
                                        <div className="buttonBox">
                                            <button type="button"> 
                                                <span>결제카드 선택</span>
                                            </button>
                                        </div>
                                    </li>
                                    <li>
                                        <label> 
                                            <input type="radio"/>
                                            무통장
                                        </label>
                                        <div className="buttonBox">
                                            <button type="button">
                                                <span>환급계좌 등록</span>
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                   </div>
                   <div className="section orderHistory">
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
                   <div className="section orderInfo">
                       <h2>배송정보</h2>
                       <div className="boxModel orderInfoInner">
                           <div className="boxModelInner orderInfoInner">
                                <p>2020-06-06 (토) 오전 1시 ~ 7시 사이 도착예정</p>
                           </div>
                           
                       </div>
                   </div>
                   <div className="section checkListInfo">
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
                   <div className="stageButton">
                        <OrderButton text="이전단계" clazzName="prevBtn" stageChange={this.props.stageChange}/>
                        <OrderButton text="다음단계" clazzName="nextBtn" stageChange={this.props.stageChange}/>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default CheckoutInfo;