import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

const StyledSearchInput = styled.div`
    label {
    position: absolute;
    opacity: 0;
  }

  input {
    background-color: inherit;
    color: rgb(var(--text-clr));
    width: 100%;
    padding: .7rem;
    font-size: var(--fs-lg);
    border: none;
    border-bottom: 2px solid rgb(var(--text-alt-clr), 0.7);
    transition: border-color 0.3s ease;
    color: rgb(var(--text-alt-clr));

    &:focus {
      border-color: rgb(var(--primary-clr));
      outline: none;
    }

    &::placeholder {
      color: rgb(var(--text-alt-clr), 0.7);
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

const SearchInput: React.FC<InputProps> = (props) => {
  return (
    <StyledSearchInput>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        required={props.required}
        onChange={props.handleOnChange}
        placeholder={props.placeholder}
      />
    </StyledSearchInput>
  );
};

export default SearchInput;
