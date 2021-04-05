import React from 'react';

// 라우터
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';

// 부트스트랩
import Pagination from 'react-bootstrap/Pagination';

// 모듈
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as booksActions } from "../redux/modules/books";


// SCSS
import '../styles/paging.scss';


const Paging = (props) => {
  const dispatch = useDispatch();

  // 리덕스의 페이징 정보 가져오기
  const { start, end, current } = useSelector((state) => state.books.paging);
  console.log(start, end, current)


  // 현재 페이지 책 목록 가져오기
  React.useEffect(() => {
    console.log(current);
  })

  // 페이지 이동
  const pageMove = (number) => {
    dispatch(booksActions.updateCurrentPage(number));
  }

  // 인덱스 이동 (이전)
  const indexMoveDown = () => {
    // 10 이하이면 그대로 두기
    if (current <= 10) {
      return
    } else {
      // 10 페이지 전으로
      dispatch(booksActions.updateStartEndPage(start - 10, end - 10));
      // 현재 페이지도 변경
      dispatch(booksActions.updateCurrentPage(end - 10));
    }
  }

  // 인덱스 이동 (이후)
  const indexMoveUp = () => {
    // 10 페이지 후로
    dispatch(booksActions.updateStartEndPage(start + 10, end + 10));
    // 현재 페이지도 변경
    dispatch(booksActions.updateCurrentPage(start + 10));
  }

  // 페이징 넘버들을 넣을 배열
  let items = [];
  // 페이징 넘버 생성
  for (let number = start; number <= end; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === current}
        onClick={() => {
          pageMove(number)
        }}
      >
        {number}
      </Pagination.Item>,
    );
  };
  return (
    <div className="paging">
      <Pagination>
        <Pagination.First />
        {/* end가 10 이하이면 나타내지 않기 */}
        {end <= 10 ? (null) : (
          <Pagination.Prev
            // 이전 인덱스 이동
            onClick={() => {
              indexMoveDown()
            }}
          />
        )}
        {items}
        <Pagination.Next
          // 이후 인덱스 이동
          onClick={() => {
            indexMoveUp()
          }}
        />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default Paging;
