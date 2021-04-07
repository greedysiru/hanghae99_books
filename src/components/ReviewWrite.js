import React from 'react';

// 라우터
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';

// SCSS
import '../styles/review-write.scss';

// elements
import { StarRating, TextField } from '../elements';

// 리덕스
import { actionCreators as reviewActions } from "../redux/modules/review";
import { useSelector, useDispatch } from 'react-redux';

// 리뷰 작성 컴포넌트
const ReviewWrite = (props) => {
  // 사용자의 코멘트 아이디 조회
  const comment_id = useSelector((state) => state.review.comment_id);
  // 코멘트 리스트
  const comment_list = useSelector((state) => state.review.comment);
  // 사용자의 리뷰가 있으면 해당 내용 찾기
  if (comment_id) {
    console.log(comment_list)
  }

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
