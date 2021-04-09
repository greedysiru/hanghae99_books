import React from 'react';

// 부트스트랩
import { Jumbotron, Container } from 'react-bootstrap';

//material-ui
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";



// 사이트 하단의 Footer
const Footer = (props) => {

  return (
    <Jumbotron fluid
      style={{
        marginBottom: 0,
        height: "300px",
        backgroundColor: '#F7FAFC',
        color: '#40474D',
        textAlign: 'center',
        boxSizing: 'border-box',
        fontWegiht: 'bold',
      }}>
      <container>
        <div className="footer_head" >
          <p>뷰어 다운로드 • 이용 방법 • 이용권 등록 • FAQ</p>
        </div>
        <div className='icons' style={{ margin: '25px' }}>
          <InstagramIcon
            style={{
              color: '#636c73',
              fontSize: '22px',
              margin: '0 10px'
            }} />
          <TwitterIcon
            style={{
              color: '#636c73',
              fontSize: '22px',
              margin: '0 10px'
            }} />
          <FacebookIcon
            style={{
              color: '#636c73',
              fontSize: '22px',
              margin: '0 10px'
            }} />
        </div>
        <div style={{
          fontSize: '11px',
          color: '#636c73',
          lineHeight: '17px'

        }}>
          서울시 강남구 역삼동 702-28 어반벤치빌딩 10층(테헤란로 325)
            <br />
            리디 (주)대표 배기식 사업자등록번호 120-87-27435
            <br />
            통신판매업신고 제 2009-서울강남 35-02139호
            <br />
        </div>
        <p
          style={{
            padding: '20px 0 0 0',
            fontSize: '11px',
            color: '#636c73',
          }}
        >
          종료 예정 도서 | 이용약관 | 개인 정보 처리 방침 | 청소년 보호 정책
          </p>
        <p
          style={{
            padding: '30px 0 30px 0',
            fontSize: '14px',
            color: '#636c73',
          }}>
          © RIDI Corp.</p>
      </container>
    </Jumbotron>
  )

};

export default Footer;
