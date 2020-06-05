import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./LoginMypage.scss";

class LoginMypage extends Component {
    render() {
      // console.log(this.props.logoutHandler)
      return (
        <div className="LoginMypage">
            <div onClick={this.props.logoutHandler}>로그아웃</div>
            <div className="verticalLine" >
            </div>
            <div className="loginLink"> 
            <Link className="loginLink" to="/mypage">
             마이페이지
             </Link>
            </div>
        </div>
        );
    }
  }

export default LoginMypage;