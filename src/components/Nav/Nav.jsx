import React, { useEffect } from "react";
import Link from "../Link/Link";
import styled from "styled-components";
import useAuth from "../../customHooks/useAuth";
import SignOutBtn from "../SignOutBtn/SignOutBtn";
import { musicIcon } from "../../theme/icons";

const StyledNav = styled.nav`

   ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

const Nav = () => {
  const { authCheckAuthState, isUserLoggedIn } = useAuth();

  useEffect(() => {
    authCheckAuthState();
  }, []);

  return (
    <StyledNav>
      {isUserLoggedIn ? (
        <ul>
          <li><a href="#"><img src={musicIcon} alt="" /></a></li>
          <li><SignOutBtn /></li>
        </ul>
        
      ) : (
        <ul>
          <li>
            <Link linkText="Sign In" />
          </li>
          <li>
            <Link linkText="Create Account" />
          </li>
        </ul>
      )}
    </StyledNav>
  );
};

export default Nav;
