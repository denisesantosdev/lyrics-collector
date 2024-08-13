import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  
  label {
    font-size: var(--fs-sm);
    margin-bottom: .5rem;
  }

  input {
    width: 100%;
    padding: .7rem;
    font-size: var(--fs-md);
    border: 2px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: rgb(var(--accent-clr));
      box-shadow: 0 0 10px rgba(var(--accent-clr), 0.5);
      outline: none;
    }
  }
`;

interface InputProps {
  id: string;
  placeholder?: string;
  type: string;
  name: string;
  required: boolean;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
  labelText?: string
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <StyledInput>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        required={props.required}
        onChange={props.handleOnChange}
        placeholder={props.placeholder}
      />
    </StyledInput>
  );
};

export default Input;
