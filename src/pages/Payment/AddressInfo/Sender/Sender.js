import React, { Component } from 'react';
import './Sender.scss';
class Sender extends Component {
    render() {
        return (
            <div className="Sender userInfoBox">
                <div className="userTit">
                    <h2>보내시는 분</h2>
                </div>
                <div className="payTable">
                    <div className="payTableRow">
                        <div className="payTableCell cellTit">
                            <span className="name">이름</span>
                        </div>
                        <div className="payTableCell">
                            <div>
                                <span>정육각</span>
                            </div>
                        </div>
                    </div>
                    <div className="payTableRow">
                        <div className="payTableCell cellTit">
                            <span className="phone">전화번호</span>
                        </div>
                        <div className="payTableCell">
                            <span>1800-0658</span>
                        </div>
                    </div>
                    <div className="payTableRow">
                        <div className="payTableCell cellTit">
                            <span className="email">이메일</span>
                        </div>
                        <div className="payTableCell">
                            <span>help@yookgak.com</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sender;