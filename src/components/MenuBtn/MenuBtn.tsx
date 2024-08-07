import styled from "styled-components";
import { menuBtnIcon, closeIcon } from "@styles/icons";
import { menuStateType } from "@models/types";

const StyledBtn = styled.button`
    @media (min-width: 500px) {
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
        <img
          src={menuBtnIcon}
          alt=""
        />
      ) : (
        <img
          src={closeIcon}
          alt=""
        />
      )}
    </StyledBtn>
  );
};

export default MenuBtn;
