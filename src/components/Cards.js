import React from 'react';

// SCSS
import "../styles/cards.scss";

// 리덕스 접근
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as booksActions } from "../redux/modules/books";


// 부트스트랩
import { Container, Row, Col, Card } from 'react-bootstrap';

// 카드 컴포넌트
const Cards = (props) => {
  const dispatch = useDispatch();
  const { history } = props;



  // 책 목록 가져오기
  const book_list = useSelector((state) => state.books.book_list.content)
  console.log(book_list);

  console.log(book_list.length)

  // 책 카드를 넣을 배열
  let bookCard = [];
  // 현재 책 목록의 길이
  const bookCardLength = book_list.length;
  // 받아온 책 리스트를 하나하나 접근하여 리액트 요소로 만들기
  for (let i = 0; i < bookCardLength; i++) {
    // i가 6으로 나누어 1이 남는 경우 한 줄의 시작
    // if (i % 6 === 1) {
    bookCard.push(
      <Row>
        <Col>
          <Card
            style={{ width: '120px' }}
            //  키값
            key={book_list[i].id}
          >
            <Card.Img
              onClick={() => {
                // 책 고유번호로 링크
                { history.push(`/detail/${book_list[i].id}`) }
              }}
              variant="top" src={book_list[i].imgUrl} width="120px" />
          </Card>
          <span>{book_list[i].title}</span>
        </Col>
      </Row>
    );
    // } else if (i % 6 === 0) {

    // }
  }

  return (
    <div className="cards">
      <Container >
        {/* <Row>
          <Col>
            <Card style={{ width: '120px' }}>
              <Card.Img
                onClick={() => {
                  { history.push('/detail') }
                }}
                variant="top" src="https://img.ridicdn.net/cover/1568000061/small 50w,https://img.ridicdn.net/cover/1568000061/small 90w,https://img.ridicdn.net/cover/1568000061/small?dpi=xhdpi 120w,https://img.ridicdn.net/cover/1568000061/large 165w,https://img.ridicdn.net/cover/1568000061/small?dpi=xxhdpi 180w,https://img.ridicdn.net/cover/1568000061/large?dpi=xhdpi 220w,https://img.ridicdn.net/cover/1568000061/xlarge 225w,https://img.ridicdn.net/cover/1568000061/xlarge?dpi=xhdpi 300w,https://img.ridicdn.net/cover/1568000061/large?dpi=xxhdpi 330w,https://img.ridicdn.net/cover/1568000061/xlarge?dpi=xxhdpi 450w,https://img.ridicdn.net/cover/1568000061/xxlarge 480w,https://img.ridicdn.net/cover/1568000061/xxlarge?dpi=xhdpi 640w,https://img.ridicdn.net/cover/1568000061/xxlarge?dpi=xxhdpi 960w" width="120px" />
            </Card>
            <span>알지 못하는 아이의 죽음</span>
          </Col>
        </Row> */}
        {bookCard}
      </Container>
    </div>
  )
};

export default Cards;
