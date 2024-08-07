import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "@pages/Home";
import SignInPage from "@pages/SignInPage";

import Toast from "@components/Toast/Toast";
import Header from "@components/Header/Header";
import SongLyrics from "@components/SongLyrics/SongLyrics";
import SavedLyrics from "@components/SavedLyrics/SavedLyrics";

import LyricsDataContextWrapper from "@context/LyricsDataContext";
import ToastContextWrapper from "@context/ToastContext";

import GlobalStyle from "@styles/GlobalStyle";
import { lightTheme } from "@styles/themes";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />

        <ToastContextWrapper>
          <LyricsDataContextWrapper>
            <Router>
              <Header />
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path=":songTitle/:artistName"
                  element={<SongLyrics />}
                />
                <Route
                  path="saved"
                  element={<SavedLyrics />}
                />
                <Route
                  path="login"
                  element={<SignInPage />}
                />
              </Routes>
            </Router>
          </LyricsDataContextWrapper>
          
          <Toast />
        </ToastContextWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
