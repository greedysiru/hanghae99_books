import React from 'react';

// 라우터
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';

// SCSS
import '../styles/BookInfo.scss';

// 머터리얼 ui
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';

// 책정보 컴포넌트
const BookInfo = (props) => {
  // 이미지
  const bookImg = "https://img.ridicdn.net/cover/620000190/xxlarge?dpi=xxhdpi";
  return (
    <div
      className="bookInfo"
      style={{ backgroundImage: `url(${bookImg})` }}
    >
      <div className="blur">
        <div className="bookInfo__contents">
          <div
            className="bookInfo__contents__img"
            style={{ backgroundImage: `url(${bookImg})` }}
          >
          </div>
          <div className="bookInfo__contents__col">
            <div className="bookInfo__contents__titile">
              하우스 오브 갓
            </div>
            <div className="bookInfo__contents__info">
              <span >사무엘 셈</span>
            </div>
            <div className="bookInfo__contnets__star">
              ⭐️
          </div>
            <div className="bookInfo__contents__like">
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
    </div>
  )
};

export default BookInfo;
