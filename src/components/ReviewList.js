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

  // React.useEffect(() => {
  //   // 리뷰정보 가져오기
  //   if (!comment_list) {
  //     console.log(comment_list)
  //     dispatch(reviewActions.getReviewAPI(id));
  //   }
  // }, []);

  console.log(comment_list)
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
        {comment_list.map((p, idx) => {
          return (
            <div>
              <div className="reviewlist">
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