import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import FixedHeader from "./FixedHeader/FixedHeader";
import LoginRegister from "./LoginRegister/LoginRegister";
import LoginMypage from "./LoginMypage/LoginMypage";
import "./Header.scss";

class Header extends Component {

  state = {
      isVisible: false
    };

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }


  toggleVisibility() {
    if (window.pageYOffset > 200) { 
      // console.log("more", window.pageYOffset);
      this.setState({
        isVisible: true
      });
    } else if(window.pageYOffset <= 200) {
      // console.log("less", window.pageYOffset);
      this.setState({
        isVisible: false
      });
    }
  }


  render() {
    const { isVisible } = this.state;
    return (
      <>
      <div className="Header">
        <div className="narrowHeader">
          <div> <Link className="logoContainer" to="/index">
            <img
              className="logo "
              src="https://scontent-gmp1-1.xx.fbcdn.net/v/t1.0-9/27971891_1586342984754102_629951959264227627_n.png?_nc_cat=101&_nc_sid=174925&_nc_oc=AQks1felCd6B-Dq8VXHVpUcmogMZN-dVaRc4jKKLzi1CCCvEV6Nfijr2DMlrIkn-Y6s&_nc_ht=scontent-gmp1-1.xx&oh=9c3b5f8738bb0ec8efa1ce2c639c35ca&oe=5EF1BB09"
            />
            <span className="jyk">정육각</span>
            </Link>
          </div>
          <div className="navContainer">
              <div className="loginBar">
                <span>이벤트</span>
                <span>공지사항</span>
                <span>이용가이드</span>
                <LoginMypage />
                {/* <span><Link className="loginLink" to="/login">로그인</Link></span>
                <div className="verticalLine"><Link className="loginLink" to="/register">회원가입</Link></div> */}
              </div>
              <nav className="navigation">
                <div className="navList">
                  <div><Link className="listLink" to="/list">쇼핑하기</Link></div>
                  <div>브랜드스토리</div>
                  <div>리뷰</div>
                  <div>고객센터</div>
                </div>
                <div className="imgList">
                  {/* <div className="meatCount">
                    <div className="meatNumber">0</div>
                  </div> */}
                  <div className="cart">
                    <img
                      className="cart"
                      src="https://www.jeongyookgak.com/assets/gnb_cart_default.svg"
                    />
                  </div>
                  <div className="menu">
                    <img
                      className="menu"
                      src="https://www.jeongyookgak.com/assets/gnb_menu.svg"
                    />
                  </div>
                </div>
              </nav>
            </div>
          </div>
      </div>
      
      <div className="FixedHeader">          
      { isVisible ? <FixedHeader/> : null} 
      </div> 
      </>
    );
  }
}

export default Header;
