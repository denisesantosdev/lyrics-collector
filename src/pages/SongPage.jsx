import React from "react";
import { useApiData } from "../context/LyricsDataContext";

const SongPage = () => {
  const lyricsData = useApiData();
  console.log(lyricsData);

  return <>{lyricsData ? <div>{lyricsData}</div> : <div>Loading...</div>}</>;
};

export default SongPage;
