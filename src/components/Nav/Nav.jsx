import React from "react";
import Link from "../Link/Link";
import styled from "styled-components";

const StyledNav = styled.ul`
    display: flex;
    gap: 1rem;
    list-style-type: none;
    font-size: ${props=>props.theme.fontSizes.small};
`;

const Nav = () => {
  return (
    <StyledNav>
      <li>
        <Link linkText="Sign In" />
      </li>
      <li>
        <Link linkText="Create Account" />
      </li>
    </StyledNav>
  );
};

export default Nav;
