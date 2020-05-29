import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
        <>
            <div className="footerVeryTop">
                <div className="Footer">        
                    <div className="footerTop">
                        <div className="leftTop">
                            <div>이용약관</div>
                            <div>개인정보 취급방침</div>
                            <div>1:1 문의</div>
                            <div>자주묻는 질문</div>
                        </div>
                        <div className="rightTop">
                            카카오톡:@정육각&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;help@yookgak.com
                        </div>   
                    </div>
                    <div className="footerBottom">
                        <div className="logo">
                            <img ClassName="logo" src="https://www.jeongyookgak.com/assets/footer_logo.svg"></img>
                        </div>
                        <div className="companyInfo">
                            <span className="first">(주)정육각</span> <span className="second">대표이사:김재연</span> <span className="third">주소:경기도 성남시 중원구 순환로212, 1층</span>
                            <p>사업자등록번호:224-87-00271 [조회]통신판매업신고번호:2018-성남중원-0191</p>
                            <p>개인정보관리책임자:박준태 privacy@yookgak.com</p>
                            <p>Copyright 2017 정육각 공식 홈페이지</p>
                        </div>
                        <div className="csCenter">
                            <p className="cs">고객센터</p>
                            <p className="csPhone">1800-0658</p>
                            <p className="csTime">평일 오전8시-오후5시</p>
                            <p className="lunchTime">(점심시간: 12시30분-1시30분)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
}

export default Footer;