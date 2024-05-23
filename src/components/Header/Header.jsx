import React, { useState } from "react";
import Nav from "../Nav/Nav";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import MenuBtn from "../MenuBtn/MenuBtn";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    place-items: center;
    padding: 1rem;
    margin-bottom: 3rem;
    position: relative;
   
    @media (min-width: 1024px) {
      max-width: 1024px;
      margin-inline: auto;
    }
  
`;

const Header = () => {
  const [menuIsClosed, setMenuIsClosed] = useState(true)

  return (
    <StyledHeader>
        <Logo />
        <MenuBtn setMenuIsClosed={setMenuIsClosed} menuIsClosed={menuIsClosed}/>
         <Nav menuIsClosed={menuIsClosed} setMenuIsClosed={setMenuIsClosed}/>
    </StyledHeader>
  );
};

export default Header;
