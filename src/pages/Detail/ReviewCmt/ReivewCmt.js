import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './ReviewCmt.scss';

const body = document.getElementsByTagName('body')[0];
class ReviewCmt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalShow: false
        }
    }

    // open modal
    openModal = () => {
        this.setState({ 
            isModalShow: true
        })
    body.classList.add("not_scroll");
    }

    // close modal
    closeModal = () => {
        this.setState({ 
            isModalShow: false
        })
    body.classList.remove("not_scroll");
    }

    render() {
        return (
            <>
                <div className="ReviewCmt" onClick={this.openModal}>
                    <div className="contents">
                        <div className="inner">
                            <div className="contentTit">
                                믿고 먹는 정육각 삼겹살
                            </div>
                            <div className="contentSubT">
                                <span>매번 너무 만족한다.</span>
                            </div>
                            <div className="contentUser">
                                <div className="userInfo">
                                    <span className="userId">wecode</span>
                                    <span className="buyNum">10회구매</span>
                                </div>
                                <div className="userDate">
                                    <span className="buyDate">2020.06.04</span>
                                </div>
                            </div>
                        </div>
                        <div className="togetherInfo">
                            <div className="togetherTit">
                                <span>함께 구매하신 상품</span>
                            </div>
                            <div className="togetherName">
                                <span>초신선 돼지고기</span>
                            </div>
                        </div>
                    </div>
                    <div className="contents">
                        <div className="inner">
                            <div className="contentTit">
                                항상 이용하고있는 사이트
                            </div>
                            <div className="contentSubT">
                                <span>만족한다.</span>
                            </div>
                            <div className="contentUser">
                                <div className="userInfo">
                                    <span className="userId">jintae</span>
                                    <span className="buyNum">1회구매</span>
                                </div>
                                <div className="userDate">
                                    <span className="buyDate">2020.06.01</span>
                                </div>
                            </div>
                        </div>
                        <div className="togetherInfo">
                            <div className="togetherTit">
                                <span>함께 구매하신 상품</span>
                            </div>
                            <div className="togetherName">
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="contents">
                        <div className="inner">
                            <div className="contentTit">
                                회식은 정육각에서!!
                            </div>
                            <div className="contentSubT">
                                <span>회식으로 즐겨먹고 있습니다.</span>
                            </div>
                            <div className="contentUser">
                                <div className="userInfo">
                                    <span className="userId">freeForkBelly</span>
                                    <span className="buyNum">8회구매</span>
                                </div>
                                <div className="userDate">
                                    <span className="buyDate">2020.05.07</span>
                                </div>
                            </div>
                        </div>
                        <div className="togetherInfo">
                            <div className="togetherTit">
                                <span>함께 구매하신 상품</span>
                            </div>
                            <div className="togetherName">
                                <span>등심</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isModalShow={this.state.isModalShow} isModalClose={this.closeModal} />
            </>
        );
    }
}

export default ReviewCmt;