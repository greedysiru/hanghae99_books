import React from "react";
import "../styles/login.scss";


const Login = (props) => {
  return (
    <React.Fragment>
      <body className="login_body">
        <div className="header_box">
          <h1 className="ridi_logo">RIDIBOOKS</h1>
        </div>
        <div className="container">
          <div className="form_box">
            <div className="inner_form">
            <input
              className="login_input"
              placeholder="아이디"
              type="text"
            ></input>
            <input
              className="login_input"
              placeholder="비밀번호"
              type="text"
            ></input>
            <div className="text_box">
            <div className="t_box"><input type="checkbox" />
              <p className="text">로그인 상태 유지</p></div>  
              <p className="text">아이디 찾기| 비밀번호 재설정</p>
            </div>
            </div>
            
            
            <button className="login_button">로그인</button>
            <button className="signin_button">회원가입</button>
          </div>
        </div>
      </body>
    </React.Fragment>
  );
};

export default Login;
