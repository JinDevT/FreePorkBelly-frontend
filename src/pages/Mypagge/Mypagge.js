import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Mypagge.scss';

class Mypagge extends Component {
    render() {
        return (
            <div className="Mypage">
                <Header />
                <div className="container">
                    <div className="pageTitle">
                        <h1>마이페이지</h1>
                    </div>
                    <div className="inner">
                        <div className="summarize">
                            <div className="gradeImg">
                                <img src="https://www.jeongyookgak.com/assets/mypage/green.svg" alt="grade" />
                            </div>
                            <div className="orderUser">
                                <h1>Hello, My page</h1>
                                <div className="userInfo">
                                    <ul className="infoList">
                                        <li>
                                            <p>회원등급</p>
                                            <p>[웰컴]</p>
                                        </li>
                                        <li>
                                            <p>적립금</p>
                                            <p>[0원]</p>
                                        </li>
                                        <li>
                                            <p>쿠폰</p>
                                            <p>[0개]</p>
                                        </li>
                                        <li>
                                            <p>구매</p>
                                            <p>[1건]</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="orderInfoBox">
                            <p>상품 정보</p>
                            <div className="orderList">
                                <div className="mypageTable">
                                    <div className="mypageRow firstRow">
                                        <div className="mypageCell">
                                            <span>상품명</span>
                                        </div>
                                        <div className="mypageCell">
                                            <span>수량</span>
                                        </div>
                                    </div>
                                    <div className="mypageRow">
                                        <div className="mypageCell">
                                            <span>상품명</span>
                                        </div>
                                        <div className="mypageCell">
                                            <span>1</span>
                                        </div>
                                    </div>
                                    <div className="mypageRow">
                                        <div className="mypageCell">
                                            <span>총합</span>
                                        </div>
                                        <div className="mypageCell">
                                            <spn>가격</spn>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="paymentInfo">
                            <div className="leftBox">
                                <p>쿠폰 / 적립금 정보</p>
                                <div className="leftInner">
                                    <div className="leftInfo couponBox">
                                        <div className="boxWrap">
                                            <span>적용쿠폰</span>
                                            <span>없음</span>
                                        </div>
                                    </div>
                                    <div className="leftInfo savingsBox">
                                        <div className="boxWrap savings">
                                            <span>적립금 사용</span>
                                            <span>0원</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rightBox">
                                <p>결제정보</p>
                                <div className="rightInner">
                                    <div className="paymentWay">
                                        <div>
                                            결제방법
                                        </div>
                                        <div>
                                            무통장 입금
                                        </div>
                                    </div>
                                    <div className="paymentWay productAddPrice">
                                        <div>
                                            상품합계
                                        </div>
                                        <div>
                                            합계
                                        </div>
                                    </div>
                                    <div className="paymentWay lastPrice">
                                        <div>
                                            결제 총액
                                        </div>
                                        <div>
                                            가격
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Mypagge;