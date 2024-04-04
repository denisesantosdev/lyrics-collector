import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchLyrics } from "../services/lyrics-api";

const LyricsDataContext = createContext("");

const useApiData = () => useContext(LyricsDataContext);

const LyricsDataProvider = ({ children }) => {
  const [lyricsData, setLyricsData] = useState('initial state');

  useEffect(() => {
    async function getLyrics() {
      try {
        const apiData = await fetchLyrics(
          "the ship in port",
          "radical face"
        );

        setLyricsData(apiData)
      } catch (error) {
        console.error("Error fetching Data", error);
      }
    }

    //getLyrics();
  }, []);

  return (
    <LyricsDataContext.Provider value={lyricsData}>
      {children}
    </LyricsDataContext.Provider>
  );
};

export {LyricsDataProvider, useApiData};
