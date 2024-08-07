import styled from "styled-components";

const StyledSelect = styled.select`
    background-color: inherit;
    padding: 1rem;
    border: none;
    font-weight: bold;
    border-bottom: 2px solid ${(props) => props.theme.colors.border};
`;

interface SelectProps {
  name: string;
  id: string;
  option: { value: string; optionText: string };
  handleOnChange: React.ChangeEventHandler<HTMLSelectElement>;
  renderFilterOptions: Function;
}

const Select: React.FC<SelectProps> = (props) => {
  return (
    <StyledSelect
      name={props.name}
      id={props.id}
      onChange={props.handleOnChange}>
      <option value={props.option.value}>{props.option.optionText}</option>
      {props.renderFilterOptions()}
    </StyledSelect>
  );
};

export default Select;
