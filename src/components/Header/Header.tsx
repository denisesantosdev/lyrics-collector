import  { useState } from "react";
import styled from "styled-components";

import Nav from "@components/Nav/Nav";
import Logo from "@components/Logo/Logo";
import MenuBtn from "@components/MenuBtn/MenuBtn";

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
