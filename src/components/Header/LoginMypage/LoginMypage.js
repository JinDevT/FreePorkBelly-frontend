import React, { Component } from "react";
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
             마이페이지
            </div>
        </div>
        );
    }
  }

export default LoginMypage;