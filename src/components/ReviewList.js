import React from 'react';

// 라우터
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';

// SCSS
import '../styles/review-list.scss';

// 리덕스 접근
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as reviewActions } from "../redux/modules/review";

// 최소 단위 컴포넌트
import { ElSpinner, Star } from '../elements';

// 리뷰 목록 컴포넌트
const ReviewList = (props) => {
  // 해당 페이지의 책 id 가져오기
  const id = props.id;
  const dispatch = useDispatch();

  // 코멘트 정보 가져오기
  const comment_list = useSelector((state) => state.review.review_info.comment);


  // 코멘트 리스트를 받아올 때 까지 로딩하기
  if (!comment_list) {
    return <ElSpinner />
  }
  if (comment_list === null) {
    return (
      <div>
        리뷰가 없습니다.
      </div>
    )
  } else {
    return (
      <div>
        {/* 가져온 코멘트 리스트를 하나하나 접근하며 출력 */}
        {comment_list.map((p, idx) => {
          return (
            <div key={p.id}>
              <div className="reviewlist" >
                <div className="reviewlist__header">
                  <Star is_comment={true} starRate={p.starRate} />
                  <span
                    className="reviewlist__header__text"
                  >{p.account.username}</span>
                  <span
                    className="reviewlist__header__date"
                  // 정규식으로 문자열 처리
                  >{p.modifiedAt.split('T')[0].replace(/-/gi, '.')}</span>
                </div>
                <div>
                  {p.comment}
                </div>
              </div >
              <hr className="reviewlist__hr" ></hr>
            </div>
          )
        })
        }
      </div>


    )

  }

};

export default ReviewList;