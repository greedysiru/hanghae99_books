import React from 'react';

import { Spinner } from 'react-bootstrap';

// SCSS
import '../styles/el-spinner.scss'


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