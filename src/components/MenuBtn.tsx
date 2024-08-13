import styled from "styled-components";
import { menuStateType } from "@models/types";

import { CiMenuFries } from "react-icons/ci";
import { CiSquareRemove } from "react-icons/ci";

const StyledBtn = styled.button`
  padding: 1rem;

  @media (min-width: ${({ theme }) => theme.screenSizes.sm}) {
    display: none;
  }
`;

const MenuBtn: React.FC<menuStateType> = ({
  setMenuIsClosed,
  menuIsClosed,
}) => {
  return (
    <StyledBtn onClick={() => setMenuIsClosed((prev) => !prev)}>
      {menuIsClosed ? (
        <CiMenuFries></CiMenuFries>
      ) : (
        <CiSquareRemove></CiSquareRemove>
      )}
    </StyledBtn>
  );
};

export default MenuBtn;
