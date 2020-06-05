import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import "./LoginRegister.scss";


class LoginRegister extends Component {
    render() {
      return (
        <div className="LoginRegister">
            <span><Link className="loginLink" to="/login">로그인</Link></span>
            <div className="verticalLine"></div>
            <div>
            <Link className="loginLink" to="/register">회원가입</Link>
            </div>
        </div>
        );
    }
  }

  export default LoginRegister;