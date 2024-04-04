import { useState, useEffect, useContext } from "react";
import {LyricsDataProvider} from "./context/LyricsDataContext";
import SongPage from "./pages/SongPage";

function App() {
  return (
    <LyricsDataProvider>
      <SongPage />
    </LyricsDataProvider>
  );
}

export default App;
