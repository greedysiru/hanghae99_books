import React from 'react';

// SCSS
import "../styles/cards.scss";

// 리덕스 접근
import { useSelector } from 'react-redux';

// 부트스트랩
import { Container, Row, Col, Card } from 'react-bootstrap';

// 카드 컴포넌트
const Cards = (props) => {
  const { history } = props;
  // 책 목록 가져오기
  const books_list = useSelector((state) => state.books.bookslist)
  console.log(books_list);
  return (
    <div className="cards">
      <Container >
        <Row>
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
        </Row>
      </Container>
    </div>
  )
};

export default Cards;
