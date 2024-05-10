import React, { useContext, useEffect, useState } from "react";

import { lyricsDataContext } from "../../context/LyricsDataContext";
import SongLyrics from "../SongLyrics/SongLyrics";
import useDatabase from "../../customHooks/useDatabase";
import LyricsCard from "../LyricsCard/LyricsCard";
import Select from "../Select/Select";
import styled from "styled-components";
import useAuth from "../../customHooks/useAuth";

const StyledSavedLyrics = styled.main`
  display: grid;
  gap: 1rem;

  select {
    justify-self: end;
  }
`;

const SavedLyrics = () => {
  const { setLyricsData } = useContext(lyricsDataContext);

  const {
    getAllLyricsFromDB,
    filterByArtist,
    deleteSongLyricFromDB,
    savedLyrics,
    isDbAltered,
    filteredArtists,
  } = useDatabase();

  const { authCheckAuthState, isUserLoggedIn } = useAuth();

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
    authCheckAuthState();

    if (isUserLoggedIn) {
      getAllLyricsFromDB();
    }
  }, [isDbAltered, isUserLoggedIn]);

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
    console.log(selectedArtist);

    filterByArtist(selectedArtist);
  }

  return (
    <StyledSavedLyrics>
      {/* <button onClick={() => getAllLyricsFromDB()}>
        Show all saved lyrics
      </button> */}

      <Select
        name="artists"
        id="artists"
        option={{
          value: "all",
          optionText: "All artists",
        }}
        handleOnChange={handleOnChange}
        renderFilterOptions={renderFilterOptions}
      />

      {renderSavedLyrics()}
    </StyledSavedLyrics>
  );
};

export default SavedLyrics;
