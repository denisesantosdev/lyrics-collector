import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  
  label {
    margin-bottom: .3rem;
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  input {
    border: 2px solid ${(props) => props.theme.colors.border};
    border-radius: .3rem;
    background-color: ${(props) => props.theme.colors.primary};
    padding: ${(props) => props.theme.padding.small};

  }
`;

interface InputProps {
  id: string;
  placeholder: string;
  type: string;
  name: string;
  required: boolean;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <StyledInput>
      <label htmlFor={props.id}>{props.placeholder}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        required={props.required}
        onChange={props.handleOnChange}
      />
    </StyledInput>
  );
};

export default Input;
