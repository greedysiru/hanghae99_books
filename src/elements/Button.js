import React from "react";
import styled from "styled-components";


const Button = (props) => {

    const {text, children, _onClick} = props

  return (
    <React.Fragment>
      <ElButton onClick={_onClick}>{text? text: children}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
    chidren: null,
    _onClick: () => {},
};

const ElButton = styled.button``;

export default Button;