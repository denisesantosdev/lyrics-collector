import styled from "styled-components";

const StyledSelect = styled.select`
    background-color: inherit;
    padding: 1rem;
    font-weight: bold;
    border: none;
    border-bottom: 1px solid rgba(var(--secondary-clr),0.2);
    
    &:focus {
      border: none;
      border-top: 1px solid rgba(var(--accent-clr));
      outline: none;
    }
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
