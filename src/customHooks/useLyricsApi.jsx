import React, { useContext, useState, useEffect } from "react";
import { lyricsDataContext } from "../context/LyricsDataContext";
import { ToastContext } from "../context/ToastContext";
import { Timestamp } from "firebase/firestore";

const useLyricsApi = (songTitle, artistName) => {
  const { toastState, setToastState } = useContext(ToastContext);
  const { lyricsData, setLyricsData } = useContext(lyricsDataContext);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function searchLyrics() {
      try {
        const res = await fetch(
          `https://lyrist.vercel.app/api/${songTitle}/${artistName}`
        );

        const data = await res.json();

        if (Object.keys(data).length === 0) {
          throw new Error(404);
        }

        setLyricsData({
          artistName: data.artist,
          songTitle: data.title,
          albumImage: data.image,
          lyrics: data.lyrics,
        });

        setLoading(false)
      } catch (err) {
        if (err.message === "404") {
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

    searchLyrics();
  }, []);

  return { loading, error };
};

export default useLyricsApi;
