import React from "react";
import styled from "styled-components";
import { deleteIcon, saveIcon } from "../../theme/icons";
import { Link, useNavigate } from "react-router-dom";

const StyledLyricsCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid gray;

  a {
    cursor: pointer;
  }
  
  > img {
    width: 100px;
    border-radius: .3rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight: bold;
  }
  
  span {
    font-size: ${(props) => props.theme.fontSizes.medium};
    opacity: 80%;
    
  }

  button {
    justify-self: flex-end;
  }
`;

const LyricsCard = ({ item, deleteSongLyricFromDB }) => {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate(`/${item.songTitle}/${item.artistName}`);
  }

  return (
    <StyledLyricsCard>
      <img
        src={item.albumImageUrl}
        alt="album image"
      />
      <a onClick={() => handleOnClick()}>
        <p>{item.songTitle}</p>
        <span>{item.artistName}</span>
      </a>

      <button onClick={() => deleteSongLyricFromDB(item.id)}>
        <img
          src={deleteIcon}
          alt=""
        />
      </button>
    </StyledLyricsCard>
  );
};

export default LyricsCard;
