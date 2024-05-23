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

    @media (max-width: 500px) {
      flex-direction: column;
      
    }
  }

  @media (max-width: 500px) {
    display: ${(props) => (props.menuIsClosed ? "none" : "block")};
    position: absolute;
    right: 1rem;
    top: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: .3rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Nav = ({ menuIsClosed, setMenuIsClosed }) => {
  const { authCheckAuthState, isUserLoggedIn } = useAuth();

  useEffect(() => {
    authCheckAuthState();
  }, []);

  return (
    <StyledNav menuIsClosed={menuIsClosed}>
      {isUserLoggedIn ? (
        <ul>
          <li>
            <StyledLink
              to="saved"
              onClick={() => setMenuIsClosed((prev) => !prev)}>
              <img
                src={musicIcon}
                alt=""
              />
            </StyledLink>
          </li>
          <li>
            <SignOutBtn setMenuIsClosed={setMenuIsClosed} />
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <StyledLink
              to={"login"}
              onClick={() => setMenuIsClosed((prev) => !prev)}>
              Log In
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to={"login"}
              onClick={() => setMenuIsClosed((prev) => !prev)}>
              Create Account
            </StyledLink>
          </li>
        </ul>
      )}
    </StyledNav>
  );
};

export default Nav;
