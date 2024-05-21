import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../customHooks/useAuth";
import SignOutBtn from "../SignOutBtn/SignOutBtn";
import { musicIcon } from "../../theme/icons";

const StyledNav = styled.nav`

   ul {
    display: flex;
    gap: 2rem;
    list-style-type: none;
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props=>props.theme.colors.text};
  &:hover {
    text-decoration: underline;
    font-weight: bold;
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
          <li>
            <StyledLink to="saved">
              <img
                src={musicIcon}
                alt=""
              />
            </StyledLink>
          </li>
          <li>
            <SignOutBtn />
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <StyledLink to={"login"}>Log In</StyledLink>
          </li>
          <li>
            <StyledLink to={"login"}>Create Account</StyledLink>
          </li>
        </ul>
      )}
    </StyledNav>
  );
};

export default Nav;
