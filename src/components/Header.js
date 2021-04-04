import React from 'react';

// SCSS
import "../styles/header.scss";

// 리덕스
import { useSelector } from 'react-redux';

// 헤더 컴포넌트
const Header = (props) => {
  // 로그인 여부 가져오기
  const is_login = useSelector(state => state.user.is_login);

  const { history } = props;
  return (
    <React.Fragment>
      <div className="header">
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand" href="#">RIDI Select</a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">RIDIBOOKS</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* 로그인 상태이면 로그아웃 표시하기 */}
              {is_login ?
                (<a className="nav-link"
                  onClick={() => {
                    { window.alert('로그아웃 구현하기') }
                  }}
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
