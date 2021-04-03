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
placeholder: "텍스트를 입력해 주세요.",

};

const ElInput = styled.input``;


export default Input;
