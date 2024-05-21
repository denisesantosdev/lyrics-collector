import React, { useContext, useEffect, useState } from "react";
import { lyricsDataContext } from "../context/LyricsDataContext";
import SavedLyrics from "../components/SavedLyrics/SavedLyrics";
import SongLyrics from "../components/SongLyrics/SongLyrics";
import SignOutBtn from "../components/SignOutBtn/SignOutBtn";
import SearchForm from "../components/SearchForm/SearchForm";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import styled from "styled-components";
import PageBg from "../components/Pagebg/PageBg";

const StyledHome = styled.div`
  display: grid;
  gap: 2rem;
`;

const Home = ({ isUserLoggedIn }) => {
  return (
    <StyledHome>
      {/* <header>
        <p>Lyrics Collector</p>
        {isUserLoggedIn ? <SignOutBtn /> : <Nav />}
      </header> */}

      {/* <Header /> */}
      <SearchForm />
      <PageBg/>
      {/* <SongLyrics /> */}

      {isUserLoggedIn && <SavedLyrics isUserLoggedIn={isUserLoggedIn} />}
    </StyledHome>
  );
};

export default Home;
