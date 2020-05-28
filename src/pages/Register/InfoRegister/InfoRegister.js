import React, { Component } from 'react';
import './InfoRegister.scss';


class InfoRegister extends Component {
    render() {
        return (
            <div className="InfoRegister"> {/* 교환할 부분 클래스 시작 */}
                <div className="signin">회원가입</div>
                <div className="topImg">
                    <img id="note" src="https://www.jeongyookgak.com/assets/icon_1.svg"></img>
                    <div id="letter3">01.약관동의</div>
                    <img id="bigger" src="https://www.jeongyookgak.com/assets/icon_6.svg"></img>
                    <img id="pen" src="https://www.jeongyookgak.com/assets/icon_4.svg"></img>
                    <div id="letter4">02.정보입력</div>
                </div>

                <div className="mainBody">
                    <div className="inputRegInfo">
                        가입정보 입력
                    </div>

                    <div className="table">
                        <div className="tableRow">
                            <div className="emailLeft">
                                아이디(이메일주소)
                            </div>
                            <div className="emailRight">
                                <input className="emailValue" type="text" placeholder="아이디로 사용할 이메일 주소"></input>
                            </div>
                        </div>

                        <div className="tableRow">
                            <div className="pwLeft">
                                비밀번호
                            </div>
                            <div className="pwRight">
                                <input className="pwValue" type="text" placeholder="비밀번호"></input>
                            </div>
                        </div>

                        <div className="tableRow">
                            <div className="repwLeft">
                                비밀번호 확인
                            </div>
                            <div className="repwRight">
                                <input className="repwValue" type="text"></input>
                            </div>
                        </div>

                        <div className="tableRow">
                            <div className="nameLeft">
                                이름
                            </div>
                            <div className="nameRight">
                                <input className="nameValue" type="text"></input>
                            </div>
                        </div>

                        <div className="tableRow">
                            <div className="cpLeft">
                                휴대폰번호
                            </div>
                            <div className="cpRight">
                                <input className="cpValue" type="text"></input>
                            </div>
                        </div>

                        <div className="tableRow">
                            <div className="validLeft">
                                인증번호
                            </div>
                            <div className="validRight">
                                <input className="validValue" type="text"></input>
                            </div>
                        </div>
                    </div>

                </div>

                
                <div className="bottomBtn">
                    <button 
                        className="backBtn"
                        onClick={this.props.stageChange}>
                        이전으로
                    </button>
                    <button className="agreeBtn">
                        가입하기
                    </button>
                </div>

            </div>             
        );
    }
}

export default InfoRegister;