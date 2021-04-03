import React from 'react';

// SCSS
import '../styles/navigator.scss';

// 네비게이터 컴포넌트
const Navigator = (props) => {
  return (
    <div>
      <div className="navigator">
        <nav className="navbar navbar-expand-md navbar-light">

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">홈</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">최신도서</a>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  )
};

export default Navigator;
