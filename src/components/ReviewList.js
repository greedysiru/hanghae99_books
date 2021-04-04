import React from 'react';

// 라우터
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';

// SCSS
import '../styles/review-list.scss';




// 리뷰 목록 컴포넌트
const ReviewList = (props) => {
  return (
    <div className="reviewlist">
      <div>
        아이디
      </div>
      <div>
        리뷰 내용
      </div>
    </div>
  )
};

export default ReviewList;
