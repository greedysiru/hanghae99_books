import React from 'react';

// material ui
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
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

  const avgStarRate = useSelector((state) => state.review.review_info.avgStarRate);
  // 별점 평균으로
  const starRate = props.starRate
  // 코멘트인지 판별
  const is_comment = props.is_comment;
  console.log(is_comment)
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {is_comment ?
        (<Rating
          name="half-rating-read"
          style={{
            fontSize: "18px",
            color: "#FA722E"
          }}
          defaultValue={starRate}
          precision={0.5}
          readOnly />) :
        (<Rating
          name="half-rating-read"
          style={{
            fontSize: "18px",
            color: "#FA722E"
          }}
          defaultValue={avgStarRate}
          precision={0.5}
          readOnly />)}

    </div>
  );
}


export default Star;
