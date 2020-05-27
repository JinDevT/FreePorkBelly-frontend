import React, { Component } from 'react';
import './Modal.scss'

class Modal extends Component {
    render() {
        const { isModalShow, isModalClose } = this.props;
        return (
            <>
                {
                    isModalShow ?
                    <div className="Modal">
                        <div className="modal">
                            <div className="contentUser">
                                <div className="userInfo">
                                    <span className="userId">아이디</span>
                                    <span className="buyNum">몇회구매</span>
                                </div>
                                <div className="userDate">
                                    <span className="buyDate">구매날짜</span>
                                </div>
                            </div>
                            <div className="modalTit">
                                믿고 먹는 정육각 삼겹살
                            </div>
                            <div className="modalSubTit">
                                <span className="modalContent">매번 너무 만족합니다.</span>
                                <div className="togetherInfo">
                                    <div className="togetherTit">
                                        <span>함께 꾸매하신 상품</span>
                                    </div>
                                    <div className="togetherList">
                                        <div className="ListTit">
                                            <span>초신선 돼지고기</span>
                                        </div>
                                        <ul className="ListOptions">
                                            <li>· 삼겹살 보통(16mm) X 2</li>
                                            <li>· 삼겹살 보통(16mm) X 2</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="modalClose">
                                <button type="button" onClick={isModalClose}>X</button>
                            </div>
                        </div>
                    </div>
                    :
                    null
                }
            </>
            
        );
    }
}

export default Modal;