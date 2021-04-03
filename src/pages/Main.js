import React from 'react';

// 컴포넌트
import Header from '../components/Header';
import Navigator from '../components/Navigator';
import Slide from '../components/Slide';
import Card from '../components/Card';



// 메인 페이지 컴포넌트
const Main = (props) => {
  return (
    <div>
      <Header />
      <Navigator />
      <Slide />
      <Card />
    </div>
  )
};

export default Main;
