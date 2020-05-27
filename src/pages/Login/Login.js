import React, { Component } from 'react';
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

        fetch("http://10.58.7.154:8000/accounts/signin", {
            method: "POST",
            body: JSON.stringify({
                'ID' : this.state.loginById,
                'password' : this.state.loginByPw,
            }),
        })
        .then((response) => response.json())
        .then((response) => {
            if (response.token) {
                console.log(response);
                localStorage.setItem("wtw-token", response.token);
                this.props.history.push("/register");
            } else if (!response.token) {
                alert("로그인 오류");
            }
        });
    };
    
    render() {
        return (
            <div className="Login">
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
                    <div className="register">회원가입</div>
                </div>
                <div className="bottom">
                    <div className="social">소셜계정으로 간편하게 로그인 해보세요.</div>
                    <div className="kakaoTalk">
                        <img className="kakao" src="https://www.jeongyookgak.com/assets/login/kakao.svg"></img>
                        <div>카카오톡 로그인</div>
                    </div>
                </div>
            
            
            
            
            
            
            
            </div>
        );
    }
}

export default Login;