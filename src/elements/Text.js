import React from "react";
import styled from "styled-components";


// 텍스트 컴포넌트
const Text = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <P>{children}</P>
    </React.Fragment>
  );
};

Text.defaultProps = {
  children: null,
};

const P = styled.p``;

export default Text;
