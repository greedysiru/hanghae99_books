import React from 'react';

// 라우터
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';

// SCSS
import '../styles/description.scss';

// 최소 단위 컴포넌트
import { ElSpinner } from '../elements';

// 리덕스 접근
import { useSelector } from 'react-redux';



// 책의 상세 설명을 보여주는 컴포넌트
const Description = (props) => {
  // 책 정보 가져오기
  const { description } = useSelector(state => state.books.book_info);

  if (!description) {
    return <ElSpinner />
  }

  return (
    <div className="description">
      <h2 className="introduce">책 소개</h2>
      <p className="detail">{description.split('계속 읽기').[0]}</p>
    </div>
  )
};

export default Description;
