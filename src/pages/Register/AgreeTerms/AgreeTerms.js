import React, { Component } from 'react';
import './AgreeTerms.scss';

class AgreeTerms extends Component {

    state = {
        agreeBtn: false,
        stage: 1,
    };
    
    handleChange = () => {
        this.setState({
            agreeBtn: true,
            stage: 2
        }, () => alert('change')
        );
    };



    render() {
        return (
            <div className="Register">
                <div className="signin">회원가입</div>
                <div className="TermsCondition"> {/* 교환할 부분 클래스 시작 */}
                    <div className="topImg">
                        <img id="note" src="https://www.jeongyookgak.com/assets/icon_3.svg"></img>
                        <div id="letter1">01.약관동의</div>
                        <img id="bigger" src="https://www.jeongyookgak.com/assets/icon_6.svg"></img>
                        <img id="pen" src="https://www.jeongyookgak.com/assets/icon_2.svg"></img>
                        <div id="letter2">02.정보입력</div>
                    </div>
                    <div className="main1">
                        <div className="agreeTerms">
                            <div className="agreeService">
                                <div>
                                    <input 
                                        className="checkBox1" 
                                        type="checkBox" 
                                        id="cb1" 
                                        onClick={this.handleCheckBox1}>
                                    </input>
                                </div>
                                <div>
                                &nbsp;&nbsp;정육각 서비스 약관 동의
                                </div>
                            </div>
                            <div className="termsBox">
                                <div className="implDate">시행일자: 2019년 11월 18일</div>
                                <div className="detailTerms">
                                    [이용약관]
                                    <p>2</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                </div>
                            </div>          
                        </div>

                        <div className="personalInfo">
                            <div className="agreePersonal">
                                <div>
                                    <input 
                                        className="checkBox2" 
                                        type="checkBox" 
                                        id="cb2" 
                                        onClick={this.handleCheckBox2}>
                                    </input>
                                </div>
                                <div>
                                &nbsp;&nbsp;개인정보 이용 방침
                                </div>
                            </div>
                            <div className="termsBox">
                                <div className="implDate">시행일자: 2019년 11월 18일</div>
                                <div className="detailTerms">
                                    [이용약관]
                                    <p>3</p>
                                    <p>2</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    
                                </div>
                            </div>          
                        </div>
                    
                    <div className="bottomBtn">
                        <button className="backBtn">
                            이전으로
                        </button>
                        <button 
                            className="agreeBtn" 
                            onClick={this.handleChange}>
                            동의하기
                        </button>
                    </div>
                </div>

                </div> {/* 교환할 부분 클래스 끝 */}
            </div>


        );
    }
}

export default AgreeTerms;