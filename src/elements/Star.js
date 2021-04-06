import React from 'react';

// material ui
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

// 최소 단위 컴포넌트
import { ElSpinner } from '../elements';

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

  // 코멘트인지 판별
  const is_comment = props.is_comment;
  console.log(is_comment)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="half-rating-read"
        style={{
          fontSize: "18px",
          color: "#FA722E"
        }}
        defaultValue={is_comment ? starRate : props.avgStarRate}
        precision={0.5}
        readOnly />

    </div>
  );
}


export default Star;
