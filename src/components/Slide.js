import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import '../styles/slide.scss';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Slider,
  IconButton
} from '@material-ui/core';

function Slide(props) {


  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item item1 active">
          <div className="helper"></div>
          <div className="intro">
            <h2>음악 배워보세요</h2>
            <h3>멋진 뮤지션들이 주변에 있습니다.</h3>
            <a href="#">수업 찾기</a>
          </div>
        </div>
        <div className="carousel-item item2">
          <div className="helper"></div>
          <div className="intro">
            <h2>메이크업 배워보세요</h2>
            <h3>멋진 메이크업 아티스트들이 주변에 있습니다.</h3>
            <a href="#">수업 찾기</a>
          </div>
        </div>
        <div className="carousel-item item3">
          <div className="helper"></div>
          <div className="intro">
            <h2>요리 배워보세요</h2>
            <h3>멋진 요리사들이 주변에 있습니다.</h3>
            <a href="#">수업 찾기</a>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )

}

export default Slide;