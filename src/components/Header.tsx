import { useState } from "react";
import styled from "styled-components";

import Nav from "@components/Nav";
import Logo from "@components/Logo";
import MenuBtn from "@components/MenuBtn";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    place-items: center;
    position: relative;
   
    @media (min-width: ${({ theme }) => theme.screenSizes.lg}) {
      max-width: var(--screen-lg);
      margin-inline: auto;
    }
`;

const Header = () => {
  const [menuIsClosed, setMenuIsClosed] = useState(true);

  return (
    <StyledHeader>
      <Logo />
      <MenuBtn
        setMenuIsClosed={setMenuIsClosed}
        menuIsClosed={menuIsClosed}
      />
      <Nav
        menuIsClosed={menuIsClosed}
        setMenuIsClosed={setMenuIsClosed}
      />
    </StyledHeader>
  );
};

export default Header;
