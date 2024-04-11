import React, { createContext, useState } from "react";

export const lyricsDataContext = createContext({});

const LyricsDataContext = ({ children }) => {
  const [lyricsData, setLyricsData] = useState(null);

  return (
    <lyricsDataContext.Provider value={{ lyricsData, setLyricsData }}>
      {children}
    </lyricsDataContext.Provider>
  );
};

export default LyricsDataContext;
