import React from "react";
import styled from "styled-components";

// 그리드 컴포넌트
const Grid = (props) => {
  const { children } = props

  return (
    <React.Fragment>
      <GridBox>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,

};

const GridBox = styled.div``;


export default Grid;