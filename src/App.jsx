import { useState } from "react";

import Home from "./pages/Home";
import LyricsData from "./context/LyricsDataContext";
import ToastContextProvider from "./context/ToastContext";
import Toast from "./components/Toast/Toast";
import SignInPage from "./pages/SignInPage";
import GlobalStyle from "./theme/GlobalStyle";
import { lightTheme } from "./theme/themes";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../firebase/firebaseConfig";
import { ThemeProvider } from "styled-components";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
      console.log("user is logged in");
      setIsUserLoggedIn(true);
    } else {
      // User is signed out
      // ...
      setIsUserLoggedIn(false);
      console.log("user is logged out");
    }
  });

  return (
    <>
      <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
        <ToastContextProvider>
          <LyricsData>
           {/*  {!isUserLoggedIn && <SignInPage />} */}
            <Home isUserLoggedIn={isUserLoggedIn} />
          </LyricsData>
          <Toast />
        </ToastContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
