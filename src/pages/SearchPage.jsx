import React, { useContext, useEffect, useState } from "react";
import { fetchLyrics } from "../services/lyrics-api";
import { lyricsDataContext } from "../context/LyricsDataContext";
import LyricsPage from "./LyricsPage";

const SearchPage = () => {
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
            //console.log("not found");
          } else {
            //console.log(err.message);
          }
        }
      }
    }

    searchLyrics();
  }, [formIsSubmitted]);

  return (
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

      {lyricsData ? <LyricsPage /> : <h1>Search for your favorite songs</h1>}
    </section>
  );
};

export default SearchPage;
