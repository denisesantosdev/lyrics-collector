import React, { useContext, useEffect, useState } from "react";

import { lyricsDataContext } from "../../context/LyricsDataContext";
import SongLyrics from "../SongLyrics/SongLyrics";
import useDatabase from "../../customHooks/useDatabase";
import LyricsCard from "../LyricsCard/LyricsCard";

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
          <LyricsCard
            key={index}
            item={item}
            deleteSongLyricFromDB={deleteSongLyricFromDB}
          />
        );
      });
    } else {
      return filteredArtists.map((item, index) => {
        return (
          <LyricsCard
            key={index}
            item={item}
            deleteSongLyricFromDB={deleteSongLyricFromDB}
          />
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
