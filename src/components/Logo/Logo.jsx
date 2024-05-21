import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logoIcon } from "../../theme/icons";

const StyledLogo = styled.div`
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.large};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  gap: .5rem;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <StyledLink to={"/"}>
        <img
          src={logoIcon}
          alt=""
        />
        <p>Lyrics Collector</p>
      </StyledLink>
    </StyledLogo>
  );
};

export default Logo;
