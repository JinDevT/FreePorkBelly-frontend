import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import "./FixedHeader.scss";


class FixedHeader extends Component {

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

    render() {
      return (
        <div className="FixedHeader">
          <header className="header1">
              <div className="logoContainer1"><Link className="logoContainer" to="/index" onClick={this.scrollToTop}>
                <img
                  alt="logo"
                  src="https://www.jeongyookgak.com/assets/submenu_logo.svg"
                  alt="logo_icon"
                />
                </Link>
              </div>
              <div className="navContainer1">
                <nav className="navigation1">
                  <div className="navList1">
                    <div><Link className="listLink1" to="/list">쇼핑하기</Link></div>
                    <div>브랜드스토리</div>
                    <div>리뷰</div>
                    <div>고객센터</div>
                  </div>          
                  <div className="imgList1">
                      {/* <div className="meatCount1">
                      <div className="meatNumber1">0</div>
                    </div> */}
                    <div><Link to="/cart" onClick={this.scrollToTop}>
                      <img
                        alt="cart"
                        src="https://www.jeongyookgak.com/assets/2-1.svg"
                        alt="cart_icon"
                      />
                      </Link>
                    </div>
                    <div>
                      <img
                        alt="menu"
                        src="https://www.jeongyookgak.com/assets/2-2.svg"
                        alt="menu_icon"
                      />
                    </div>
                  </div>
                  
                </nav>
              </div>
          </header>
        </div>
         );
    }
  }

  export default FixedHeader;