import React from 'react';

// 라우터
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';

// SCSS
import '../styles/description.scss';



// 책의 상세 설명을 보여주는 컴포넌트
const Description = (props) => {

  return (
    <div className="description">
      <h2 className="introduce">책 소개</h2>
      <p className="detail">상세 내용</p>
      더보기 버튼?
    </div>
  )
};

export default Description;
