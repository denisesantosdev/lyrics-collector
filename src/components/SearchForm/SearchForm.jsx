import React, { useState, useEffect, useContext } from "react";
import { fetchLyrics } from "../../services/lyrics-api";
import { lyricsDataContext } from "../../context/LyricsDataContext";
import { ToastContext } from "../../context/ToastContext";
import Btn from "../Btn/Btn";
import Input from "../Input/Input";
import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
`

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState({});
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const { lyricsData, setLyricsData } = useContext(lyricsDataContext);

  const { setToastState } = useContext(ToastContext);

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
            setToastState({
              visible: true,
              message: "oh-oh! Song or artist not found.",
              type: "error",
            });
          } else {
            setToastState({
              visible: true,
              message: "oh-oh! An error has ocurred.",
              type: "error",
            });
          }
        }
      }
    }

    searchLyrics();
  }, [formIsSubmitted]);

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <Input
        placeholder="Song Title"
        name="songTitle"
        required={true}
        id="songTitle"
        handleOnChange={handleOnChange}
      />
      <Input
        placeholder="Artist Name"
        name="artistName"
        required={true}
        id="artistName"
        handleOnChange={handleOnChange}
      />
      <Btn
        btnText="Search"
        isPrimary={true}
      />
    </StyledForm>
  );
};

export default SearchForm;
