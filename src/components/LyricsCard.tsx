import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { CiBookmarkRemove } from "react-icons/ci";

const StyledLyricsCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 1rem;
  align-items: center;
  gap: 2rem;
  border-bottom: 1px solid rgba(var(--text-clr) ,0.3);

  a {
    cursor: pointer;
  }
  
  > img {
    width: 150px;
    border-radius: .3rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  p {
    font-size: var(--fs-lg);
    font-weight: bold;
  }
  
  span {
    font-size: var(--fs-md);
    opacity: 80%;
  }

  button {
    justify-self: flex-end; 
  }
`;

interface LyricsCardProps {
  item?: any;
  deleteSongLyricFromDB: Function;
}

const LyricsCard: React.FC<LyricsCardProps> = ({
  item,
  deleteSongLyricFromDB,
}) => {
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
      <CiBookmarkRemove></CiBookmarkRemove>
      </button>
    </StyledLyricsCard>
  );
};

export default LyricsCard;
