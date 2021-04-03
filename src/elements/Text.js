import React from "react";
import styled from "styled-components";

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
