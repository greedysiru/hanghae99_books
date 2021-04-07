import React from 'react';

// 라우터
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';

// SCSS
import '../styles/book-info.scss';

// 머터리얼 ui
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';

// 리덕스 접근
import { useSelector, useDispatch } from 'react-redux';

// 리덕스
import { actionCreators as heartActions } from "../redux/modules/heart";

// elements
import Star from '../elements/Star';

// 최소 단위 컴포넌트
import { ElSpinner } from '../elements';



// 책정보 컴포넌트
const BookInfo = (props) => {
  const dispatch = useDispatch();

  // 해당 책을 좋아요 했는지 가져오기
  let { check, heartCount } = useSelector((state) => state.heart.heart);

  // 책 정보 가져오기
  const { id, imgUrl, title, bookElement } = useSelector(state => state.books.book_info);
  // 로딩끝나기전에는 스피너 표시
  if (!id) {
    return <ElSpinner />
  }
  const bookEtc = bookElement.split('·')
  // 좋아요, 좋아요 취소 함수
  const addHeart = () => {
    dispatch(heartActions.addHeartAPI(id))
  }

  const deleteHeart = () => {
    dispatch(heartActions.deleteHeartAPI(id))
  }

  if (props.is_login) {
    return (
      <div
        // 블러 배경
        className="bookInfo"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="blur">
          <div className="bookInfo__contents">
            <div
              className="bookInfo__contents__img"
              // 책 이미지
              style={{ backgroundImage: `url(${imgUrl})` }}
            >
            </div>
            <div className="bookInfo__contents__col">
              <div className="bookInfo__contents__titile">
                {/* 책 제목 */}
                {title}
              </div>
              <div className="bookInfo__contents__info">
                {/* 저자 및 출판사 정보 등 */}
                <span className="bold">{bookEtc[0]} </span>
              ·<span className="bold"> {bookEtc[1].split('E')[0]}</span>
                <span > EPUB{bookEtc[2]}</span>
                <span>{bookEtc[3]}</span>
              </div>
              <div className="bookInfo__contents__star">
                {/* 별점 표시 */}
                <Star
                  avgStarRate={props.avgStarRate}
                ></Star>
                {props.avgStarRate === NaN ? (

                  <span className="bookInfo__contents__star__text">
                    {props.avgStarRate} 점
                  </span>

                ) : null}
                <span className="bookInfo__contents__star__num">
                  ({props.starRateCount}명)
                </span>
                <span className="bookInfo__contents__heart">
                </span>

              </div>
              {/* 좋아요 표시 */}
              <div className="bookInfo__contents__heart">

                <FavoriteIcon
                  color="secondary"
                  style={{
                    fontSize: '15px',
                    margin: '0px 3px 0px 0px',
                    padding: '0px  0px 1px 0px'
                  }}
                />
                <span className="bookInfo__contents__heart__text">
                  {heartCount} 명
                </span>
              </div>
              {/* 좋아요 버튼 */}
              <div className="bookInfo__contents__like">
                {!check ? (
                  <Button
                    variant="contained"
                    onClick={addHeart}
                  >
                    <FavoriteBorderIcon
                      color="primary"
                    />
                  </Button>
                ) :
                  (
                    <Button
                      variant="contained"
                      onClick={deleteHeart}
                    >
                      <FavoriteIcon
                        color="secondary"
                      />
                    </Button>
                  )
                }

              </div>
            </div>
          </div>
        </div>
      </div >
    )
  } else {
    return (
      <div
        // 블러 배경
        className="bookInfo"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="blur">
          <div className="bookInfo__contents">
            <div
              className="bookInfo__contents__img"
              // 책 이미지
              style={{ backgroundImage: `url(${imgUrl})` }}
            >
            </div>
            <div className="bookInfo__contents__col">
              <div className="bookInfo__contents__titile">
                {/* 책 제목 */}
                {title}
              </div>
              <div className="bookInfo__contents__info">
                {/* 저자 및 출판사 정보 등 */}
                <span className="bold">{bookEtc[0]} </span>
              ·<span className="bold"> {bookEtc[1].split('E')[0]}</span>
                <span > EPUB{bookEtc[2]}</span>
                <span>{bookEtc[3]}</span>
              </div>
              <div className="bookInfo__contents__star">
                {/* 별점 표시 */}
                <Star
                  avgStarRate={props.avgStarRate}
                ></Star>
                <span className="bookInfo__contents__star__text">
                  {props.avgStarRate} 점
                </span>
                <span className="bookInfo__contents__star__num">
                  ({props.starRateCount}명)
                </span>
                <span className="bookInfo__contents__heart">
                </span>

              </div>

            </div>
          </div>
        </div>
      </div >
    )
  }
};

export default BookInfo;
