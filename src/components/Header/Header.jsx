import React from "react";
import Nav from "../Nav/Nav";
import styled from "styled-components";
import Logo from "../Logo/Logo";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    place-items: center;
    padding: 1rem;
    margin-bottom: 3rem;
   
    @media (min-width: 1024px) {
      max-width: 1024px;
      margin-inline: auto;
    }
  
`;



const Header = () => {
  return (
    <StyledHeader>
        <Logo />
        <Nav />
    </StyledHeader>
  );
};

export default Header;
