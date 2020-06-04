import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import "./LoginMypage.scss";


class LoginMypage extends Component {
    render() {
      return (
        <div className="LoginMypage">
            <div className="verticalLine">
            </div>
            <div className="loginLink"> 
             마이페이지
            </div>
        </div>
        );
    }
  }

  export default LoginMypage;