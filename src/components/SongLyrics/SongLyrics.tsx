import { useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import useDatabase from "@hooks/useDatabase";
import useAuth from "@hooks/useAuth";
import useLyricsApi from "@hooks/useLyricsApi";

import { CiTrash } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";

import { lyricsDataContext } from "@context/LyricsDataContext";
import { ToastContext } from "@context/ToastContext";

import PageBg from "@components/Pagebg/PageBg";
import { LyricsDataType, ToastType } from "@models/types";

const StyledLyrics = styled.div`
  color: rgba(var(--text-clr));
  text-align: center;
  padding: 1rem;

  > div {
    max-width: var(--screen-lg);
    margin-inline: auto;
    padding: 1rem;
    background-color: rgba(var(--primary-clr));
  }

  @media (min-width: ${({ theme }) => theme.screenSizes.lg}) {
      max-width: var(--screen-lg);
      margin-inline: auto;
    }
`;

const StyledLyricsHeader = styled.header`
  display: grid;
  gap: 2rem;
  margin-bottom: 2.5rem;

  > img {
    
    margin-bottom: 1rem;
    border-radius: .3rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    @media (min-width: ${({ theme }) => theme.screenSizes.sm}) {
      max-width: 300px;
      margin: auto;
    }
  }

  div{
    display: flex;
    gap: 1rem;
    justify-self: center;
  }

  h1 {
    font-size: var(--fs-xl);
  }
  
  h2 {
    font-size: var(--fs-lg);

  }
`;

const SongLyrics = () => {
  const { songTitle, artistName } = useParams();

  const { setToastState } = useContext(ToastContext) as ToastType;
  const { lyricsData } = useContext(lyricsDataContext) as LyricsDataType;

  const { loading } = useLyricsApi(songTitle, artistName);
  const { authCheckAuthState, isUserLoggedIn } = useAuth();

  const {
    saveLyricsToDB,
    deleteSongLyricFromDB,
    isDbAltered,
    searchDB,
    searchResults,
  } = useDatabase();

  useEffect(() => {
    authCheckAuthState();

    if (lyricsData && isUserLoggedIn) {
      searchDB(lyricsData.songTitle);
    }
  }, [isDbAltered, lyricsData, isUserLoggedIn]);

  function renderBtn() {
    if (isUserLoggedIn) {
      if (searchResults.length !== 0) {
        return (
          <button onClick={() => deleteSongLyricFromDB(searchResults[0].id)}>
            <CiTrash></CiTrash>
          </button>
        );
      } else {
        return (
          <button onClick={() => saveLyricsToDB()}>
            <CiBookmarkPlus></CiBookmarkPlus>
          </button>
        );
      }
    }

    return (
      <button
        onClick={() => {
          setToastState({
            visible: true,
            message: "Login or create an account to save!",
            type: "alert",
          });
        }}>
        <CiBookmarkPlus></CiBookmarkPlus>

      </button>
    );
  }

  return (
    <>
      <StyledLyrics>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <StyledLyricsHeader>
              <img
                src={lyricsData.albumImage}
                alt=""
              />
              <div>
                <h1>{lyricsData.songTitle}</h1>
                {renderBtn()}
              </div>
              <h2>{lyricsData.artistName}</h2>
            </StyledLyricsHeader>
            <p style={{ whiteSpace: "pre-wrap" }}>{lyricsData.lyrics}</p>
          </div>
        )}
      </StyledLyrics>

      <PageBg />
    </>
  );
};

export default SongLyrics;
