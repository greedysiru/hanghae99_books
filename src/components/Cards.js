import React from 'react';

// SCSS
import "../styles/cards.scss";

// 리덕스 접근
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as booksActions } from "../redux/modules/books";


// 부트스트랩
import { Container, Row, Col, Card, CardColumns } from 'react-bootstrap';

// 최소 단위 컴포넌트
import { ElSpinner } from '../elements';


// 카드 컴포넌트
const Cards = (props) => {
  const dispatch = useDispatch();
  const { history } = props;



  // 책 목록 가져오기
  const book_list = useSelector((state) => state.books.book_list.content)
  console.log(book_list);

  // 로딩이 안되었을 시 대기
  if (!book_list) {
    return (
      <ElSpinner />
    )
  } else {
    // map으로 서버로부터 받아온 책 정보 하나씩 넣기
    // 정렬은 felx-wrap 으로 적용
    return (
      <div className="cards">
        {book_list.map((info, idx) => {
          return (
            <Card
              style={{
                width: '120px',
                border: 'none',
                margin: '80px 0px 0px 0px',
                cursor: 'pointer',
              }}
              key={info.id}
            >
              <Card.Img
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                }}
                onClick={() => {
                  { history.push(`/detail/${info.id}`) }
                }}
                variant="top"
                src={info.imgUrl}
                width="120px" />
              <span>{info.title}</span>
            </Card>
          )
        })}
      </div>
    )

  }

};

export default Cards;
