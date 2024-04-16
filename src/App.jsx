import { useState } from "react";

import Home from "./pages/Home";
import LyricsData from "./context/LyricsDataContext";
import SignInPage from "./pages/SignInPage";

import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../firebase/firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [savedLyrics, setSavedLyrics] = useState([]);

  function authCreateAccountWithEmail(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Account created!!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
      });
  }

  function authSignInWithEmail(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("You're now signed in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(error.message);
      });
  }

  function authSignInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log("Signed in with Google");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error.message);
      });
  }

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
        <SignInPage
          authCreateAccountWithEmail={authCreateAccountWithEmail}
          authSignInWithEmail={authSignInWithEmail}
          authSignInWithGoogle={authSignInWithGoogle}
        />
      )}

      <Home isUserLoggedIn={isUserLoggedIn} authSignOut={authSignOut}/>
    </LyricsData>
  );
}

export default App;
