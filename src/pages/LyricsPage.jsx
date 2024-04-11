import React, { useContext } from "react";
import { lyricsDataContext } from "../context/LyricsDataContext";

const LyricsPage = () => {
  const { lyricsData } = useContext(lyricsDataContext);

  //console.log(lyricsData);
  return (
    <div>
      {lyricsData ? (
        <div>
          <img
            src={lyricsData.albumImage}
            alt=""
          />
          <div>
            <h1>{lyricsData.songTitle}</h1>
            <button>Save</button>
          </div>
          <h2>{lyricsData.artistName}</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{lyricsData.lyrics}</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default LyricsPage;
