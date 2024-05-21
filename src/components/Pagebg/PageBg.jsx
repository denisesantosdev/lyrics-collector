import React from "react";
import { doodles } from "../../theme/images";
import styled from "styled-components";

const StyledPageBg = styled.div`
    position: fixed;
    inset: 0;
    top: 50%;
    background: 
        linear-gradient(to bottom, ${props=>props.theme.colors.primary}, transparent 90%), 
        url(${doodles});
    background-size: cover;
    z-index: -100000;
`;

const PageBg = () => {
  return (
    <StyledPageBg>
      
    </StyledPageBg>
  );
};

export default PageBg;
