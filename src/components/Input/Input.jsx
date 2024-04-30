import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;

  input {
    border: 2px solid ${(props) => props.theme.colors.border};
    border-radius: .3rem;
  }
`

const Input = (props) => {
  //console.log(props);
  return (
    <StyledInput>
      <label htmlFor={props.id}>{props.placeholder}</label>
      <input
        type="text"
        name={props.name}
        id={props.id}
        required={props.required}
        onChange={props.handleOnChange}
      />
    </StyledInput>
  );
};

export default Input;
