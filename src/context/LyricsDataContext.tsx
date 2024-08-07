import React, { createContext, useState } from "react";
import { LyricsDataInterface } from "models/interfaces";
import { LyricsDataType } from "@models/types";

export const lyricsDataContext = createContext<LyricsDataType | null>(null);

const LyricsDataContextWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lyricsData, setLyricsData] = useState<LyricsDataInterface>({
    artistName: "",
    songTitle: "",
    albumImage: "",
    lyrics: "",
  });

  return (
    <lyricsDataContext.Provider value={{ lyricsData, setLyricsData }}>
      {children}
    </lyricsDataContext.Provider>
  );
};

export default LyricsDataContextWrapper;
