import { useContext, useState, useEffect } from "react";

import { lyricsDataContext } from "@context/LyricsDataContext";
import { ToastContext } from "@context/ToastContext";
import { LyricsDataInterface } from "models/interfaces";
import { LyricsDataType, ToastType } from "@models/types";

const useLyricsApi = (
  songTitle: string | undefined,
  artistName: string | undefined
) => {
  const { setToastState } = useContext(ToastContext) as ToastType;
  const { setLyricsData } = useContext(lyricsDataContext) as LyricsDataType;

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function searchLyrics() {
      try {
        const res = await fetch(
          `https://lyrist.vercel.app/api/${songTitle}/${artistName}`
        );

        const data = await res.json();

        if (Object.keys(data).length === 0) {
          throw new Error("404");
        }

        setLyricsData({
          artistName: data.artist,
          songTitle: data.title,
          albumImage: data.image,
          lyrics: data.lyrics,
        });

        setLoading(false);
      } catch (err: any) {
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

  return { loading };
};

export default useLyricsApi;
