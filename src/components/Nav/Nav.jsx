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
            <Link to="saved">
              <img
                src={musicIcon}
                alt=""
              />
            </Link>
          </li>
          <li>
            <SignOutBtn />
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to={"login"}>Log In</Link>
          </li>
          <li>
            <Link to={"login"}>Create Account</Link>
          </li>
        </ul>
      )}
    </StyledNav>
  );
};

export default Nav;
