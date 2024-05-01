import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
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

const Btn = (props) => {

  return (
    <StyledBtn
      $primary={props.isPrimary}>
      {props.btnText}
    </StyledBtn>
  );
};

export default Btn;
