import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import FixedHeader from "./FixedHeader/FixedHeader";
import LoginRegister from "./LoginRegister/LoginRegister";
import LoginMypage from "./LoginMypage/LoginMypage";
import "./Header.scss";

class Header extends Component {
  state = {
      isVisible: false,
      stage: true
    };

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });

    const token = localStorage.getItem("access_token");
    if (token) {
      this.setState({
        stage : false
      })
    } else {
      this.setState({
        stage: true
      })
    }
  }

  clickHandler = () => {
    localStorage.removeItem("access_token")

    this.setState({
        stage: true      
    }, () => alert("로그아웃이 성공되었습니다."));
}

  toggleVisibility() {
    if (window.pageYOffset > 200) { 
      this.setState({
        isVisible: true
      });
    } else if(window.pageYOffset <= 200) {
      this.setState({
        isVisible: false
      });
    }
  }

  render() {
    const { isVisible } = this.state;
    const { stage } = this.state;
    return (
      <>
      <div className="Header">
        <div className="narrowHeader">
          <div> <Link className="logoContainer" to="/index">
            <img
              className="logo "
              src="https://scontent-gmp1-1.xx.fbcdn.net/v/t1.0-9/27971891_1586342984754102_629951959264227627_n.png?_nc_cat=101&_nc_sid=174925&_nc_oc=AQks1felCd6B-Dq8VXHVpUcmogMZN-dVaRc4jKKLzi1CCCvEV6Nfijr2DMlrIkn-Y6s&_nc_ht=scontent-gmp1-1.xx&oh=9c3b5f8738bb0ec8efa1ce2c639c35ca&oe=5EF1BB09"
              alt="logo_icon"
            />
            <span className="jyk">정육각</span>
            </Link>
          </div>
          <div className="navContainer">
              <div className="loginBar">
                <span>이벤트</span>
                <span>공지사항</span>
                <span>이용가이드</span>
                  { stage ? <LoginRegister /> : <LoginMypage logoutHandler={this.clickHandler} /> }
              </div>
              <nav className="navigation">
                <div className="navList">
                  <div><Link className="listLink" to="/list">쇼핑하기</Link></div>
                  <div>브랜드스토리</div>
                  <div>리뷰</div>
                  <div>고객센터</div>
                </div>
                <div className="imgList">
                  <div> 
                    <Link className="cart" to="/cart">
                    <img
                      className="cart"
                      src="https://www.jeongyookgak.com/assets/gnb_cart_default.svg"
                      alt="cart_icon"
                    />
                    </Link>
                  </div>
                  <div className="menu">
                    <img
                      className="menu"
                      src="https://www.jeongyookgak.com/assets/gnb_menu.svg"
                      alt="menu_icon"
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