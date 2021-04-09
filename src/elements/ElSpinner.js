import React from 'react';

import { Spinner } from 'react-bootstrap';

// SCSS
import '../styles/el-spinner.scss'

// 스피너 컴포넌트
const ElSpinner = () => {
  return (
    <div className="elspinner">
      <Spinner
        animation="border"
        style={{
          margin: '0px auto'
        }}
      />
    </div>
  )
}

export default ElSpinner;