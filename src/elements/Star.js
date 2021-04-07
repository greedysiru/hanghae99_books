import React from 'react';

// material ui
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

// 리덕스 접근
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

// 책의 별점을 출력하는 최소 단위 컴포넌트
const Star = (props) => {
  // 사용자 별점
  const starRate = props.starRate;
  // 별점 가져오기
  const avgStarRate = useSelector(state => state.review.review_info.avgStarRate);
  // 코멘트인지 판별
  const is_comment = props.is_comment;
  const classes = useStyles();

  if (is_comment) {
    return (
      <div className={classes.root}>
        <Rating
          name="half-rating-read"
          style={{
            fontSize: "18px",
            color: "#FA722E"
          }}
          value={starRate}
          precision={0.5}
          readOnly />

      </div>
    )
  } else {
    return (
      <div className={classes.root}>
        <Rating
          name="half-rating-read"
          style={{
            fontSize: "18px",
            color: "#FA722E"
          }}
          value={avgStarRate ? avgStarRate : 0}
          precision={0.5}
          readOnly />

      </div>
    )
  }

}


export default Star;
