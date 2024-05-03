import React from "react";
import styled from "styled-components";
import {deleteIcon,saveIcon} from '../../theme/icons'

const StyledLyricsCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid gray;
  
  > img {
    width: 100px;
    border-radius: .3rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  h1 {
    font-size: ${props=>props.theme.fontSizes.large};
    margin-bottom: .5rem;
  }
  
  h2 {
    font-size: ${props=>props.theme.fontSizes.medium};
    opacity: 70%;
    
  }

  button {
    justify-self: flex-end;
  }
`

const LyricsCard = ({item,deleteSongLyricFromDB}) => {
  return (
    <a>
      <StyledLyricsCard>
        <img
          src={item.albumImageUrl}
          alt="album image"
        />
        <div>
          <h1>{item.songTitle}</h1>
          <h2>{item.artistName}</h2>
        </div>

        <button onClick={() => deleteSongLyricFromDB(item.id)}>
          <img src={deleteIcon} alt="" />
        </button>
      </StyledLyricsCard>
    </a>
  );
};

export default LyricsCard;
