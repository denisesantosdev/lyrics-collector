import { useState } from "react";

import Home from "./pages/Home";
import LyricsData from "./context/LyricsDataContext";
import SignInPage from "./pages/SignInPage";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../firebase/firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [savedLyrics, setSavedLyrics] = useState([]);

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

  function authSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("You're now logged out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  } 

  return (
    <LyricsData>
      {!isUserLoggedIn && (
        <SignInPage/>
      )}

      <Home isUserLoggedIn={isUserLoggedIn} authSignOut={authSignOut}/>
    </LyricsData>
  );
}

export default App;
