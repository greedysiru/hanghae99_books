import React from "react";
import "../styles/login.scss";

// 모듈
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";


const Login = (props) => {
  const dispatch = useDispatch();
  // 로그인 정보
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const { history } = props;

  // 로그인, API 호출
  const login = () => {
    if (id === "" || pwd === "") {
      window.alert('아이디 혹은 비밀번호가 공란입니다.');
      return;
    }
    dispatch(userActions.loginAPI(id, pwd));
  }

  return (
    <React.Fragment>
      <body className="login_body">

        <div className="header_box">
          <h1 className="ridi_logo"
            onClick={() => { history.push('/') }}
          >RIDIBOOKS</h1>
        </div>
        <div className="container">
          <div className="form_box">
            <div className="inner_form">
              <input
                className="login_input"
                placeholder="아이디"
                type="text"
                // 아이디 입력
                onChange={(e) => {
                  setId(e.target.value);
                }}
              ></input>
              <input
                className="login_input"
                placeholder="비밀번호"
                type="password"
                // 비밀번호 입력
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
                // 엔터키 로그인
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    login();
                  }
                }}
              ></input>

            </div>


            <button
              className="login_button"
              // 로그인
              onClick={login}
            >로그인</button>
            <button className="signin_button"
              onClick={() => {
                { history.push('/signup') }
              }}
            >회원가입</button>
          </div>
        </div>
      </body>
    </React.Fragment>
  );
};

export default Login;
