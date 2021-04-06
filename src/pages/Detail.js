import React from 'react';


// scss
import '../styles/detail.scss'

// 컴포넌트
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookInfo from '../components/BookInfo';
import Description from '../components/Description';
import ReviewWrite from '../components/ReviewWrite';
import ReviewList from '../components/ReviewList';

// 최소 단위 컴포넌트
import { Star } from '../elements'


// 리덕스 접근
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as booksActions } from "../redux/modules/books";




// 책의 정보, 별점,리뷰를 입력할 수 있는 페이지
const Detail = (props) => {
  // 해당 페이지의 책 id 가져오기
  const id = props.match.params.id;
  const dispatch = useDispatch();

  React.useEffect(() => {
    // 서버로부터 책 정보 가져오기
    dispatch(booksActions.bookInfoAPI(id));
  }, []);
  // 로그인 여부 가져오기
  const is_login = useSelector(state => state.user.is_login);


  return (
    <div className="detail">
      <Header></Header>
      {/* {book_info? ():()} */}
      <BookInfo></BookInfo>
      <Description></Description>
      <hr className="detailLine"></hr>
      <div className="detail__review">
        <div className="star__score">
          <span>구매자 별점</span>
          <Star></Star>
        </div>
        {/* 로그인시만 입력 가능하게 하기*/}
        {is_login ? (<ReviewWrite />) : null}
      </div>
      <hr className="detailLine"></hr>
      <ReviewList id={id} />
      <Footer></Footer>
    </div >
  )
};

export default Detail;
