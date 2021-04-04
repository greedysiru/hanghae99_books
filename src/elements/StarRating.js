import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


// 별점 입력 최소 컴포넌트

// 라벨
const labels = {
  0: '이 책을 평가해주세요!',
  1: '별로예요',
  2: '그저 그래요',
  3: '보통이에요',
  4: '좋아요',
  5: '최고예요',
};

// 스타일
const useStyles = makeStyles({
  root: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// 별점 점수 elements
export default function StarRating() {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      {value !== null &&
        <Box
          style={{
            margin: "0",
            width: "100%",
          }}
        >{labels[hover !== -1 ? hover : value]}
        </Box>}
      <Rating
        style={{ fontSize: "50px" }}
        name="hover-feedback"
        value={value}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />

    </div>
  );
}