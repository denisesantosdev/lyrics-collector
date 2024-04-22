import React, { useState, useEffect, useContext } from "react";
import { fetchLyrics } from "../../services/lyrics-api";
import {lyricsDataContext} from "../../context/LyricsDataContext";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState({});
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const {lyricsData,setLyricsData} = useContext(lyricsDataContext)

  function handleOnSubmit(event) {
    event.preventDefault();
    setFormIsSubmitted(true);
  }

  const handleOnChange = (event) => {
    setSearchQuery({
      ...searchQuery,
      [event.target.name]: event.target.value,
    });
  };

  //console.log(searchQuery);

  useEffect(() => {
    async function searchLyrics() {
      if (formIsSubmitted) {
        try {
          const lyricsApiData = await fetchLyrics(
            searchQuery.songTitle,
            searchQuery.artistName
          );

          if (Object.keys(lyricsApiData).length === 0) {
            throw new Error(404);
          }

          //console.log(lyricsApiData);
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
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Song Name"
        name="songTitle"
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
  );
};

export default SearchForm;
