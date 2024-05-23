import React from "react";
import {menuBtnIcon,closeIcon} from '../../theme/icons'
import styled from "styled-components";

const StyledBtn = styled.button`
    @media (min-width: 500px) {
        display: none;
    }
`

const MenuBtn = ({ setMenuIsClosed,menuIsClosed }) => {

  return (
  <StyledBtn onClick={() => setMenuIsClosed((prev)=> !prev)}>
    {menuIsClosed ? <img src={menuBtnIcon} alt="" /> : <img src={closeIcon} alt="" />}
  </StyledBtn>
  );
};

export default MenuBtn;
