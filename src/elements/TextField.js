import React from 'react';


import TextField from '@material-ui/core/TextField';

// 부트 스트랩
import { Button } from 'react-bootstrap';

// SCSS
import '../styles/text-field.scss'

// 리덕스
import { actionCreators as reviewActions } from "../redux/modules/review";
import { useSelector, useDispatch } from 'react-redux';

// 텍스트를 입력하는 폼 컴포넌트
const TextFiled = (props) => {
  const dispatch = useDispatch()
  const id = useSelector((state) => state.books.book_info.id)

  const [value, setValue] = React.useState('');
  const handleChange = (e) => {
    setValue(e.target.value)
    dispatch(reviewActions.setText(e.target.value))

  };

  const submitReview = () => {
    dispatch(reviewActions.writeReviewAPI(id))
  }

  return (
    <div className="textfield">
      <TextField
        id="outlined-textarea"
        placeholder="리뷰 작성 시 광고 및 욕설 ,비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
        multiline
        value={value}
        onChange={handleChange}
        variant="outlined"
        size="medium"
        style={{
          width: '100%',
          marginBottom: '5px',
        }}
      />
      <Button
        variant="primary"
        style={{
          height: "30px",
          width: "95px",
          fontSize: "12px",
        }}
        onClick={submitReview}
      >리뷰 남기기</Button>
    </div>
  )
};

export default TextFiled;
