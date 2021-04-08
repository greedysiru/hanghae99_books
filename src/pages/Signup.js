import React from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import "../styles/signup.scss";

// 모듈
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";


// 페이지 이동을 위한 history
import { history } from '../redux/configStore';

const Signup = (props) => {
  const dispatch = useDispatch();
  // state 관리를 위한 hook
  // 회원가입 정보
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");

  // 회원가입 버튼 클릭시 아이디 ,비밀번호 유효성 검사 후 API 호출
  const signup = () => {
    // 아이디 유효성 검사
    let idRegExp = /^[a-zA-z0-9]{4,12}$/;
    // 비밀번호 유효성 검사
    let passwordRegExp = /^[a-zA-z0-9]{4,12}$/;

    // 모든 정보 입력 여부 확인
    if (id === '' || pwd === '') {
      window.alert('회원가입에 필요한 모든 정보를 입력해주세요.');
      return
    }
    // 아이디 패스워드 동일 여부 확인
    if (id === pwd) {
      window.alert('아이디와 패스워드가 같습니다.')
      return
    }
    // 패스워드, 패스워드 확인 일치 여부
    if (pwd !== pwd_check) {
      window.alert('패스워드와 패스워드 확인이 일치하지 않습니다.');
      return
    }

    if (!idRegExp.test(id)) {
      alert('아이디는 영문 대소문자와 숫자 4~12자리로 입력해주세요.');
      return
    }

    if (!passwordRegExp.test(pwd)) {
      alert('비밀번호는 영문 대소문자와 숫자 4~12자리로 입력해주세요.');
      return
    }

    // 회원 가입 정보를 서버에 보내기
    dispatch(userActions.signupAPI(id, pwd, pwd_check));

  }

  return (
    <React.Fragment>
      <body className="login_body">
        <div className="header_box">
          <h1 className="ridi_logo">RIDIBOOKS</h1>
        </div>

        <div className="container">
          <div className="form_box">


            <input
              className="input_solo"
              placeholder="아이디(영문 4 ~ 12자리)"
              type="text"
              // 아이디 입력
              onChange={(e) => {
                setId(e.target.value);
              }}
            ></input>

            <div className="inner_form">
              <input
                className="input_group"
                placeholder="비밀번호(영문 4 ~ 12자리)"
                type="password"
                // 비밀번호 입력
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
              ></input>
              <input
                className="input_group"
                placeholder="비밀번호 확인"
                type="password"
                // 비밀번호 확인
                onChange={(e) => {
                  setPwdCheck(e.target.value);
                }}
              ></input>
            </div>

            {/* <input
              className="input_solo"
              placeholder="이메일 주소"
              type="text"
            ></input>
            <input
              className="input_solo"
              placeholder="이름"
              type="text"
            ></input> */}
            <div className="button_group">
              <button
                className="signin_button"
                onClick={history.goBack}
              >뒤로가기</button>
              <button
                className="login_button"
                // 회원 가입
                onClick={signup}
              >회원 가입 완료</button>
            </div>
          </div>

        </div>
      </body>
    </React.Fragment>
  );
};

export default Signup;
