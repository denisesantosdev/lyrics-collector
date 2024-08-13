import  { useContext, useEffect } from "react";
import styled from "styled-components";

import LyricsCard from "@components/LyricsCard";
import Select from "@components/Select";
import PageBg from "@components/PageBg";

import useDatabase from "@hooks/useDatabase";
import useAuth from "@hooks/useAuth";

const StyledSavedLyrics = styled.main`
  display: grid;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.screenSizes.lg}) {
      max-width: var(--screen-lg);
      margin-inline: auto;
    }

  select {
    justify-self: end;
  }

  > h1 {
    text-align: center;
  }
`;

const SavedLyrics = () => {

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

  function handleOnChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedArtist = event.target.value;

    filterByArtist(selectedArtist);
  }

  return (
    <>
      <StyledSavedLyrics>
        {/* <button onClick={() => getAllLyricsFromDB()}>
          Show all saved lyrics
        </button> */}
        {savedLyrics.length === 0 ? (
          <h1>Your saved lyrics will be shown here</h1>
        ) : (
          <>
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
          </>
        )}

        {}
      </StyledSavedLyrics>

      <PageBg />
    </>
  );
};

export default SavedLyrics;
