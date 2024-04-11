import { useState, useEffect, useContext, createContext } from "react";
import SearchPage from "./pages/SearchPage";
import LyricsData from "./context/LyricsDataContext";
import LyricsPage from "./pages/LyricsPage";
import SavedLyricsPage from "./pages/SavedLyricsPage";

function App() {
  return (
    <LyricsData>
      <SearchPage/>
      <SavedLyricsPage/>
    </LyricsData>
  );
}

export default App;
