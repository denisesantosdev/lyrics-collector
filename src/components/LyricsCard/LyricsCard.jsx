import React from "react";

const LyricsCard = ({item,deleteSongLyricFromDB}) => {
  return (
    <a>
      <div>
        <img
          src={item.albumImageUrl}
          alt="album image"
        />
        <div>
          <h1>{item.songTitle}</h1>
          <h2>{item.artistName}</h2>
        </div>

        <button onClick={() => deleteSongLyricFromDB(item.id)}>Delete</button>
      </div>
    </a>
  );
};

export default LyricsCard;
