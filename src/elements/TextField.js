import React from 'react';

// 라우터
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// 부트 스트랩
import { Button } from 'react-bootstrap';

// SCSS
import '../styles/textfield.scss'

// 텍스트를 입력하는 폼 컴포넌트
const TextFiled = (props) => {

  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="textfield">
      <TextField
        id="outlined-textarea"
        placeholder="리뷰 작성 시 광고 및 욕설 ,비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
        multiline
        value={value}
        onChange={handleChange}
        variant="outlined"
        size="large"
        style={{
          width: '100%'
        }}
      />
      <Button
        variant="primary"
        style={{
          width: "20%"
        }}
      >Primary</Button>
    </div>
  )
};

export default TextFiled;
