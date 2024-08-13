import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import useAuth from "@hooks/useAuth";

import { menuStateType } from "@models/types";

import { CiMusicNote1 } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const StyledNav = styled.nav<{ $menuIsClosed?: boolean }>`

   ul {
    display: flex;
    list-style-type: none;
    font-size: var(--fs-sm);

    @media (max-width: ${({ theme }) => theme.screenSizes.sm}) {
      flex-direction: column;
    }
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.sm}) {
    display: ${(props) => (props.$menuIsClosed ? "none" : "block")};
    position: absolute;
    z-index: 100;
    right: 1rem;
    top: 100%;
    background-color: rgba(var(--primary-clr));
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: .3rem;
  }
`;

const StyledLinkItem = styled.li`
  color: rgba(var(--text-clr));
  padding: 1rem;
  transition: all .4s ease;
  border-radius: 5px;
  
  span {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  
  &:hover {
    background-color: rgba(var(--accent-clr), .30);
  }
`;

const Nav: React.FC<menuStateType> = ({ menuIsClosed, setMenuIsClosed }) => {
  const { authCheckAuthState, isUserLoggedIn, authSignOut } = useAuth();

  useEffect(() => {
    authCheckAuthState();
  }, []);

  return (
    <StyledNav $menuIsClosed={menuIsClosed}>
      {isUserLoggedIn ? (
        <ul>
          <StyledLinkItem>
            <Link
              to="saved"
              onClick={() => setMenuIsClosed((prev) => !prev)}>
              <span>
                <CiMusicNote1></CiMusicNote1>
                Saved lyrics
              </span>
            </Link>
          </StyledLinkItem>
          <StyledLinkItem>
            <Link
              to={"/"}
              onClick={() => {
                authSignOut();
                setMenuIsClosed((prev) => !prev);
              }}>
              <span>
                <CiLogout></CiLogout>
                Logout
              </span>
            </Link>
          </StyledLinkItem>
        </ul>
      ) : (
        <ul>
          <StyledLinkItem>
            <Link
              to={"login"}
              onClick={() => setMenuIsClosed((prev) => !prev)}>
              Log In
            </Link>
          </StyledLinkItem>
          <StyledLinkItem>
            <Link
              to={"login"}
              onClick={() => setMenuIsClosed((prev) => !prev)}>
              Create Account
            </Link>
          </StyledLinkItem>
        </ul>
      )}
    </StyledNav>
  );
};

export default Nav;
