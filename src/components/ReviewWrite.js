import React from 'react';

// 라우터
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';

// SCSS
import '../styles/review-write.scss';

// elements
import { StarRating, TextField } from '../elements';

// components
import ReviewList from '../components/ReviewList';

// 리뷰 작성 컴포넌트
const ReviewWrite = (props) => {
  return (
    <div className="reviewwrite">
      <div className="star__rating">
        {/* 별점 입력 */}
        <StarRating></StarRating>
        {/* 텍스트 입력 */}
      </div>
      <TextField></TextField>

    </div>
  )
};

export default ReviewWrite;
