import React from 'react';

// 라우터
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';

// SCSS
import '../styles/commentwrite.scss';

// elements
import { StarRating, TextField } from '../elements';






const CommentWrite = (props) => {
  return (
    <div className="commentwrite">
      <div className="star__rating">
        {/* 별점 입력 */}
        <StarRating></StarRating>
        {/* 텍스트 입력 */}
      </div>
      <TextField></TextField>
    </div>
  )
};

export default CommentWrite;
