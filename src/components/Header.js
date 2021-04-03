import React from 'react';

// SCSS
import "../styles/header.scss";

// 헤더 컴포넌트
const Header = (props) => {
  const { history } = props;
  return (
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
            <a className="nav-link"
              onClick={() => {
                { history.push('/login') }
              }}
            >로그인</a>
          </li>
        </ul>

      </nav>
    </div>
  )
};

export default Header;
