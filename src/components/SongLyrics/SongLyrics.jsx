import React, { useContext, useEffect, useState } from "react";
import { lyricsDataContext } from "../../context/LyricsDataContext";
import useDatabase from "../../customHooks/useDatabase";

const SongLyrics = () => {
  const { lyricsData } = useContext(lyricsDataContext);

  const { saveLyricsToDB } = useDatabase();

  //console.log(lyricsData);
  return (
    <div>
      <div>
        {lyricsData ? (
          <div>
            <img
              src={lyricsData.albumImage}
              alt=""
            />
            <div>
              <h1>{lyricsData.songTitle}</h1>
              <button onClick={() => saveLyricsToDB()}>Save</button>
            </div>
            <h2>{lyricsData.artistName}</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{lyricsData.lyrics}</p>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default SongLyrics;
