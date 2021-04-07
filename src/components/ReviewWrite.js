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
  // 유저 코멘트 가져오기
  const user_comment = useSelector((state) => state.review.user_comment);
  console.log(user_comment)

  // 수정, 삭제가능 여부
  let is_edit = false;
  let userText = '';
  let userRate = 0;
  if (user_comment) {
    is_edit = true;
    // 사용자가 작성했던 내용 가져오기
    userText = user_comment.comment;
    userRate = user_comment.starRate;
  }

  return (
    <div className="reviewwrite">
      <div className="star__rating">
        {/* 별점 입력 */}
        <StarRating
          // props로 보내기
          userRate={userRate}
          is_edit={is_edit}
        ></StarRating>
        {/* 텍스트 입력 */}
      </div>
      <TextField
        userText={userText}
        is_edit={is_edit}
      ></TextField>

    </div>
  )
};

export default ReviewWrite;
