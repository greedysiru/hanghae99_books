import React from 'react';

// 라우터
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';

// 컴포넌트
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookInfo from '../components/BookInfo';




const Detail = (props) => {

  return (
    <div className="detail">
      <Header></Header>
      <BookInfo></BookInfo>
      <Footer></Footer>
    </div>
  )
};

export default Detail;
