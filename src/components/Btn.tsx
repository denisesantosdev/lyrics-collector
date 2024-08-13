import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button<{ $primary?: boolean }>`
  background-color: ${(props) =>
    props.$primary ? "rgba(var(--accent-clr))" : "transparent"};
  color: ${(props) =>
    props.$primary ? "rgba(var(--text-alt-clr))" : "rgba(var(--text-clr))"};
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
     background-color: ${(props) =>
    props.$primary ? "rgba(var(--accent-clr))" : "transparent"};
    transform: translateY(-2px);
  }
`;

interface BtnProps {
  isPrimary?: boolean;
  btnText: string;
  handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Btn: React.FC<BtnProps> = (props) => {
  return (
    <StyledBtn
      onClick={props.handleOnClick}
      $primary={props.isPrimary}>
      {props.btnText}
    </StyledBtn>
  );
};

export default Btn;
