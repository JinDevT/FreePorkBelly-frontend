import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './ReviewCmt.scss';

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
    }

    // close modal
    closeModal = () => {
        this.setState({ 
            isModalShow: false
        })
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
                                    <span className="userId">아이디</span>
                                    <span className="buyNum">몇회구매</span>
                                </div>
                                <div className="userDate">
                                    <span className="buyDate">구매날짜</span>
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
                </div>
                <Modal isModalShow={this.state.isModalShow} isModalClose={this.closeModal} />
            </>
        );
    }
}

export default ReviewCmt;