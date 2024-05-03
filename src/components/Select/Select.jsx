import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
    background-color: inherit;
    padding: 1rem;
    border: none;
    font-weight: bold;
    border-bottom: 2px solid ${(props) => props.theme.colors.border};
`

const Select = (props) => {

  return (
    <StyledSelect
      name={props.name}
      id={props.id}
      onChange={props.handleOnChange}
      >
      <option value={props.option.value}>{props.option.optionText}</option>
      {props.renderFilterOptions()}
    </StyledSelect>
  );
};

export default Select;
