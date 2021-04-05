import React from 'react';

// 컴포넌트
import Header from '../components/Header';
import Navigator from '../components/Navigator';
import Slide from '../components/Slide';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

// shared
import Paging from '../shared/Paging';

// 리덕스
import { useDispatch } from "react-redux";
import { actionCreators as booksActions } from "../redux/modules/books";


// 메인 페이지 컴포넌트
const Main = (props) => {


  const dispatch = useDispatch();

  React.useEffect(() => {
    // 서버에서 현재 데이터 베이스의 책 정보 목록 가져오기
    dispatch(booksActions.bookListAPI());
  })

  return (
    <div>
      <Header history={props.history} />
      <Navigator />
      <Slide />
      <Cards history={props.history} />
      <Paging />
      <Footer />
    </div>
  )
};

export default Main;
