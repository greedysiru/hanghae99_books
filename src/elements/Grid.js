import React from "react";
import styled from "styled-components";


const Grid = (props) => {
    const {children} = props

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