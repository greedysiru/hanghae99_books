import React from 'react';

// SCSS
import "../styles/header.scss";

// 리덕스
import { useSelector } from 'react-redux';
// 로그아웃
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

// 페이지 이동을 위한 history
import { history } from '../redux/configStore';


// 헤더 컴포넌트
const Header = (props) => {
  const dispatch = useDispatch();
  // 로그인 여부 가져오기
  const is_login = useSelector(state => state.user.is_login);

  // 로그아웃
  const logOut = () => {
    dispatch(userActions.logoutStorage());
  }

  React.useEffect(() => {
    dispatch(userActions.logInCheckStorage());
  }, [])

  return (
    <React.Fragment>
      <div className="header">
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand"
            onClick={() => { history.push('/') }}
          ><span className="logo-bold">RIDI</span> <span className="logo">Select</span></a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link"
                onClick={() => { history.push('/') }}
              ><span className="logo-bold">RIDIBOOKS</span></a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* 로그인 상태이면 로그아웃 표시하기 */}
              {is_login ?
                (<a className="nav-link"
                  onClick={logOut}
                >로그아웃</a>)
                :
                (<a className="nav-link"
                  onClick={() => {
                    { history.push('/login') }
                  }}
                >로그인</a>)
              }

            </li>
          </ul>

        </nav>
      </div>
      <hr className="headerLine"></hr>
    </React.Fragment>
  )
};

export default Header;
