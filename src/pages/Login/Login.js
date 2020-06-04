import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from '../../../src/components/Footer/Footer';

import './Login.scss';

class Login extends Component {

    state = {
        loginById: "",
        loginByPw: "",
        btState: true,
    };

    typeId = (e) => {
        this.setState({
            loginById: e.target.value,
        });
    };

    typePw = (e) => {
        this.setState({
            loginByPw: e.target.value,
        });
    };
    
    clickEvent = () => {
        console.log(this.state.loginById);
        console.log(this.state.loginByPw);
//"http://10.58.0.24:8000/customer/signin"
        fetch("http://10.58.5.193:8000/customer/signin", {
            method: "POST",
            body: JSON.stringify({
                'email' : this.state.loginById,
                'password' : this.state.loginByPw,
            }),
        })
        .then((response) => response.json())
        .then((response) => {
            if (response.token) {
                console.log(response);
                localStorage.setItem("access_token", response.token);
                this.props.history.push("/index");
            } else if (!response.token) {
                alert("로그인 오류");
            }
        });
    };
    
    render() {
        return (
            <div className="Login">
              <Header />
                <div className="loginText">로그인
                </div>
                <div className="loginContainer">
                    <div className="loginLeft">
                        <div>
                            <input 
                                onChange={this.typeId}
                                className="ID" 
                                type="text" 
                                placeholder="아이디(이메일 주소)를 입력하세요">
                            </input>
                        </div>
                        <div className="password">
                            <input 
                                onChange={this.typePw}
                                className="PW" 
                                type="password" 
                                placeholder="비밀번호를 입력하세요">
                            </input>
                        </div>
                    </div>
                    <div className="loginButton">
                        <button 
                            onClick={this.clickEvent}
                            className="loginBtn"
                            type="submit">
                                로그인
                        </button>
                    </div>
                </div>
                <div className="middle">
                    <div className="search">아이디/비밀번호 찾기</div>
                    <div className="register"><Link to="/register">회원가입</Link></div>
                </div>
                <div className="bottom">
                    <div className="social">소셜계정으로 간편하게 로그인 해보세요.</div>
                    <div className="kakaoTalk">
                        <img className="kakao" src="https://www.jeongyookgak.com/assets/login/kakao.svg"></img>
                        <div>카카오톡 로그인</div>
                    </div>
                </div>
            
            
            
            
            
            
              <Footer />
            </div>
        );
    }
}

export default Login;