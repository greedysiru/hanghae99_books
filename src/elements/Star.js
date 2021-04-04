import React from 'react';

// material ui
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

// 라우터
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';

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
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Rating
        name="half-rating-read"
        style={{
          fontSize: "18px"
        }}
        defaultValue={2.5}
        precision={0.5}
        readOnly />
    </div>
  );
}


export default Star;
