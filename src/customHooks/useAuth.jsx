import { useContext, useState } from "react";
import { auth, provider } from "../../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContext } from "../context/ToastContext";

function useAuth() {
  const [user, setUser] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { setToastState } = useContext(ToastContext);

  const authCreateAccountWithEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setToastState({
          visible: true,
          message: "Account created successfully!",
          type: "success",
        });

        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setToastState({
          visible: true,
          message: `${handleErrorCode(errorCode)}`,
          type: "error",
        });

        handleErrorCode(errorCode);
      });
  };

  const authSignInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        //console.log("You're now signed in");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setToastState({
          visible: true,
          message: `${handleErrorCode(errorCode)}`,
          type: "error",
        });
        //console.log(error.message);
      });
  };

  const authSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        //console.log("Signed in with Google");
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
      //  const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        //console.log(error.message);
        setToastState({
          visible: true,
          message: `${handleErrorCode(errorCode)}`,
          type: "error",
        });
      });
  };

  const authSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        //console.log("You're now logged out");
        setIsUserLoggedIn(false);
      })
      .catch((error) => {
        // An error happened.
        setToastState({
          visible: true,
          message: `${handleErrorCode(errorCode)}`,
          type: "error",
        });
      });
  };

  const authCheckAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        //console.log("user is logged in");
        setIsUserLoggedIn(true);
      } else {
        // User is signed out
        // ...
        setIsUserLoggedIn(false);
        //console.log("user is logged out");
      }
    });
  };

  function handleErrorCode(errorCode) {
    let message;

    if (errorCode.startsWith("auth")) {
      message = errorCode.slice(5, errorCode.length);
    } else {
      return "An error ocurred";
    }

    return message.replaceAll(/-/g, " ").toUpperCase();
  }

  return {
    user,
    setUser,
    authCreateAccountWithEmail,
    authSignInWithEmail,
    authSignInWithGoogle,
    authSignOut,
    authCheckAuthState,
    isUserLoggedIn,
  };
}

export default useAuth;
