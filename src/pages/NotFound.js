import React from 'react';

// 라우터
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';



// 올바르지 않은 경로로 사용자가 들어오면 표시할 페이지
const Main = (props) => {
  return (
    <b>찾을 수 없는 페이지</b>
  )
};

export default Main;
