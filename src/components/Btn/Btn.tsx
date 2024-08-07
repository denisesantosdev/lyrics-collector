import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button<{$primary?: boolean}>`
    background-color: ${(props) =>
      props.$primary ? props.theme.colors.accent : "transparent"};
    color: ${(props) =>
      props.$primary ? props.theme.colors.primary : props.theme.colors.text};
    border: 2px solid ${(props) => props.theme.colors.border};
    cursor: pointer;
    font-weight: bold;
    border-radius: .3rem;
    transition: all .3s ease;
    padding: ${props=>props.theme.padding.large};

    &:hover, &:focus {
      transform: scale(1.1,1.1)
    }
`;

interface BtnProps {
  isPrimary?: boolean;
  btnText: string
  handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Btn: React.FC<BtnProps> = (props) => {
//console.log(props);
  return (
    <StyledBtn
      onClick={props.handleOnClick}
      $primary={props.isPrimary}>
      {props.btnText}
    </StyledBtn>
  );
};

export default Btn;
