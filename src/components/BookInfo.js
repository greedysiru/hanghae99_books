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
import { useSelector } from 'react-redux';

// elements
import Star from '../elements/Star';

// 최소 단위 컴포넌트
import { ElSpinner } from '../elements';

// 책정보 컴포넌트
const BookInfo = (props) => {
  // 책 정보 가져오기
  const { id, imgUrl, title, bookElement } = useSelector(state => state.books.book_info);
  // 로딩끝나기전에는 스피너 표시
  if (!id) {
    return <ElSpinner />
  }
  const bookEtc = bookElement.split('·')
  console.log(bookElement)
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
            <div className="bookInfo__contnets__star">
              {/* 별점 표시 */}
              <Star
                avgStarRate={props.avgStarRate}
              ></Star>
            </div>
            <div className="bookInfo__contents__like">
              {/* 좋아요 버튼 */}
              <Button variant="contained">
                <FavoriteBorderIcon
                  color="primary"
                />
              </Button>

              <FavoriteIcon
                color="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
};

export default BookInfo;
