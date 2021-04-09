import React from "react";
import styled from "styled-components";


// 기본 버튼 양식 컴포넌트
const Button = (props) => {

  const { text, children, _onClick } = props

  return (
    <React.Fragment>
      <ElButton onClick={_onClick}>{text ? text : children}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  chidren: null,
  _onClick: () => { },
};

const ElButton = styled.button``;

export default Button;