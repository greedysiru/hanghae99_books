import React from 'react';

// 라우터
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';

// scss
import '../styles/detail.scss'

// 컴포넌트
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookInfo from '../components/BookInfo';
import Description from '../components/Description';
import CommentWrite from '../components/CommentWrite';

// 최소 단위 컴포넌트
import { Star } from '../elements'


// 책의 정보, 별점,리뷰를 입력할 수 있는 페이지
const Detail = (props) => {

  return (
    <div className="detail">
      <Header></Header>
      <BookInfo></BookInfo>
      <Description></Description>
      <hr className="detailLine"></hr>
      <div className="detail__comment">
        <div className="star__score">
          <span>구매자 별점</span>
          <Star></Star>
        </div>
        <CommentWrite />

      </div>
      <Footer></Footer>
    </div>
  )
};

export default Detail;