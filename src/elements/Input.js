import React from "react";
import styled from "styled-components";


const Input = (props) => {
    const { placeholder} = props;

  return (
    <React.Fragment>
      <ElInput placeholder={placeholder}/>
    </React.Fragment>
  );
};

Input.defaultProps = {
placeholder:false,

};

const ElInput = styled.input``;

export default Input;
