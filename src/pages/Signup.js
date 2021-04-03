// 함수형 컴포넌트 기본 틀입니다. 복붙해서 쓰세요~~^^
import React from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import "../styles/signup.scss";

const Signup = (props) => {
  return (
    <React.Fragment>
      <body className="login_body">
        <div className="header_box">
          <h1 className="ridi_logo">RIDIBOOKS</h1>
        </div>

        <div className="container">
          <div className="form_box">
            <div className="form_group"> 
            <input
              className="input_solo"
              placeholder="아이디"
              type="text"
            ></input>

            <div className="inner_form">
              <input
                className="input_group"
                placeholder="비밀번호"
                type="text"
              ></input>
              <input
                className="input_group"
                placeholder="비밀번호 확인"
                type="text"
              ></input>
            </div>

            <input
              className="input_solo"
              placeholder="이메일 주소"
              type="text"
            ></input>
            <input
              className="input_solo"
              placeholder="이름"
              type="text"
            ></input>
            <div>
              <label>
                {" "}
                선택입력
                <input
                  className="input_solo"
                  placeholder="출생년도"
                  type="text"
                ></input>
              </label>
              <div>
                <button>남</button>
                <button>여</button>
              </div>
            </div>
            <div>
              <button className="signin_button">동의안함</button>
              <button className="login_button">회원 가입 완료</button>
            </div>
          </div>
          </div>
        </div>
      </body>
    </React.Fragment>
  );
};

export default Signup;