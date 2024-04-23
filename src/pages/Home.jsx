import React, { useContext, useEffect, useState } from "react";
import { lyricsDataContext } from "../context/LyricsDataContext";
import SavedLyrics from "../components/SavedLyrics/SavedLyrics"
import SongLyrics from "../components/SongLyrics/SongLyrics";
import SignOutBtn from "../components/SignOutBtn/SignOutBtn"
import SearchForm from "../components/SearchForm/SearchForm";

const Home = ({isUserLoggedIn}) => {
  const { lyricsData, setLyricsData } = useContext(lyricsDataContext);

   return (
    <>
      <header>
      {isUserLoggedIn ? (
        <SignOutBtn/>
      ) : (
        <div>
          <button>Sign In</button>
          <button>Create account</button>
        </div>
      )}
    </header>
      <section>
        <SearchForm/>
        
        {lyricsData ? <SongLyrics /> : <h1>Search for your favorite songs</h1>}
      </section>

      {isUserLoggedIn && <SavedLyrics isUserLoggedIn={isUserLoggedIn}/>}
    </>
  );
};

export default Home;
