import React, { useContext, useEffect, useState } from "react";
import { lyricsDataContext } from "../../context/LyricsDataContext";
import useDatabase from "../../customHooks/useDatabase";
import styled from "styled-components";
import useAuth from "../../customHooks/useAuth";
import { saveIcon, deleteIcon } from "../../theme/icons";

const StyledLyrics = styled.div`
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  padding: 1rem;
`;

const StyledLyricsHeader = styled.header`
  display: grid;
  gap: 1rem;
  margin-bottom: 2.5rem;

  > img {
    margin-bottom: 1rem;
    border-radius: .3rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  div{
    display: flex;
    gap: 1rem;
    justify-self: center;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.xLarge};
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.large};

  }
`;

const SongLyrics = () => {
  const { lyricsData } = useContext(lyricsDataContext);
  const { authCheckAuthState, isUserLoggedIn } = useAuth();
  //console.log(lyricsData);

  const {
    saveLyricsToDB,
    checkIfItemExistsInDB,
    itemExists,
    deleteSongLyricFromDB,
    isDbAltered,
  } = useDatabase();

  useEffect(() => {
    authCheckAuthState();

    if (lyricsData && isUserLoggedIn) {
      checkIfItemExistsInDB("albumImageUrl", lyricsData.albumImage);
    }
  }, [isDbAltered, lyricsData]);

  return (
    <StyledLyrics>
      {lyricsData ? (
        <div>
          <StyledLyricsHeader>
            <img
              src={lyricsData.albumImage}
              alt=""
            />
            <div>
              <h1>{lyricsData.songTitle}</h1>
              {itemExists.itemStatus ? (
                <button
                  onClick={() => deleteSongLyricFromDB(itemExists.itemInDB.id)}>
                  <img
                    src={deleteIcon}
                    alt=""
                  />
                </button>
              ) : (
                <button onClick={() => saveLyricsToDB()}>
                  <img
                    src={saveIcon}
                    alt=""
                  />
                </button>
              )}
            </div>
            <h2>{lyricsData.artistName}</h2>
          </StyledLyricsHeader>
          <p style={{ whiteSpace: "pre-wrap" }}>{lyricsData.lyrics}</p>
        </div>
      ) : (
        <h1>Search for your favorite songs</h1>
      )}
    </StyledLyrics>
  );
};

export default SongLyrics;
