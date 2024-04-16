import React, { useContext, useEffect, useState } from "react";
import { fetchLyrics } from "../services/lyrics-api";
import { lyricsDataContext } from "../context/LyricsDataContext";
import SavedLyrics from "../components/SavedLyrics/SavedLyrics"
import SongLyrics from "../components/SongLyrics/SongLyrics";


const Home = ({isUserLoggedIn,authSignOut}) => {
  const { lyricsData, setLyricsData } = useContext(lyricsDataContext);

  const [searchQuery, setSearchQuery] = useState({
    songName: "",
    artistName: "",
  });

  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const handleOnChange = (event) => {
    setSearchQuery({
      ...searchQuery,
      [event.target.name]: event.target.value,
    });
  };

  function handleOnSubmit(event) {
    event.preventDefault();
    setFormIsSubmitted(true);
  }

  //console.log(searchQuery,formIsSubmitted);

  useEffect(() => {
    async function searchLyrics() {
      if (formIsSubmitted) {
        try {
          const lyricsApiData = await fetchLyrics(
            searchQuery.songName,
            searchQuery.artistName
          );

          if (Object.keys(lyricsApiData).length === 0) {
            throw new Error(404);
          }

          setLyricsData({
            artistName: lyricsApiData.artist,
            songTitle: lyricsApiData.title,
            albumImage: lyricsApiData.image,
            lyrics: lyricsApiData.lyrics,
          });

          setFormIsSubmitted(false);
          setSearchQuery({});
        } catch (err) {
          if (err.message === "404") {
            console.log("not found");
          } else {
            console.log(err.message);
          }
        }
      }
    }

    searchLyrics();
  }, [formIsSubmitted]);

  return (
    <>
      <header>
      {isUserLoggedIn ? (
        <div>
          <button onClick={authSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button>Sign In</button>
          <button>Create account</button>
        </div>
      )}
    </header>
      <section>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Song Name"
            name="songName"
            onChange={handleOnChange}
            required={true}
          />
          <input
            type="text"
            placeholder="Artist Name"
            name="artistName"
            onChange={handleOnChange}
            required={true}
          />
          <button>Search</button>
        </form>
        {lyricsData ? <SongLyrics /> : <h1>Search for your favorite songs</h1>}
      </section>

      {isUserLoggedIn && <SavedLyrics />}
    </>
  );
};

export default Home;
