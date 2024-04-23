import React, { useContext, useEffect, useState } from "react";

import { lyricsDataContext } from "../../context/LyricsDataContext";
import SongLyrics from "../SongLyrics/SongLyrics";
import useDatabase from "../../customHooks/useDatabase";

const SavedLyrics = ({ isUserLoggedIn }) => {
  const { setLyricsData } = useContext(lyricsDataContext);

  const {
    getAllLyricsFromDB,
    filterByArtist,
    deleteSongLyricFromDB,
    savedLyrics,isDbAltered
  } = useDatabase();

  function renderSavedLyrics() {
    return savedLyrics.map((item, index) => {
      return (
        <a key={index}>
          <div>
            <img
              src={item.albumImageUrl}
              alt="album image"
            />
            <div>
              <h1>{item.songTitle}</h1>
              <h2>{item.artistName}</h2>
            </div>

            <button onClick={() => deleteSongLyricFromDB(item.id)}>
              Delete
            </button>
          </div>
        </a>
      );
    });
  }

  useEffect(() => {
    if (isUserLoggedIn) {
     // getAllLyricsFromDB()
    }
  },[isDbAltered]);

  return (
    <div>
       <button onClick={() => getAllLyricsFromDB()}>
        Show all saved lyrics
      </button>  

      <button onClick={() => filterByArtist("Green Day")}>
        Filter by artist
      </button>

      {renderSavedLyrics()}
    </div>
  );
};

export default SavedLyrics;
