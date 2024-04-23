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
    savedLyrics,
    isDbAltered,
    filteredArtists,
  } = useDatabase();

  function renderSavedLyrics() {
    if (filteredArtists.length === 0) {
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
    } else {
      return filteredArtists.map((item, index) => {
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
  }

  useEffect(() => {
    if (isUserLoggedIn) {
      // getAllLyricsFromDB()
    }
  }, [isDbAltered]);

  function renderFilterOptions() {
    const artistsNamesSet = new Set(savedLyrics.map((item) => item.artistName));

    const artistsNames = Array.from(artistsNamesSet);

    return artistsNames.map((item, index) => (
      <option
        value={item}
        key={index}>
        {item}
      </option>
    ));
  }

  function handleOnChange(event) {
    //console.log(event.target.value);
    const selectedArtist = event.target.value;

    filterByArtist(selectedArtist);
  }

  return (
    <div>
      <button onClick={() => getAllLyricsFromDB()}>
        Show all saved lyrics
      </button>

      <select
        onChange={handleOnChange}
        name="artists"
        id="artists">
        <option value="all">All artists</option>
        {renderFilterOptions()}
      </select>

      {renderSavedLyrics()}
    </div>
  );
};

export default SavedLyrics;
