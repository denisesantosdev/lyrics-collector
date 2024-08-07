import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { auth, provider } from "../firebase/firebaseConfig";

import { UserInterface } from "models/interfaces";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

import { ToastContext } from "@context/ToastContext";
import { ToastType } from "@models/types";

function useAuth() {
  const [user, setUser] = useState<UserInterface>({ email: "", password: "" });
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  const { setToastState } = useContext(ToastContext) as ToastType;

  const navigate = useNavigate();
  const location = useLocation();

  function redirectAfterLogin() {
    if (location.key) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  const authCreateAccountWithEmail = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setToastState({
          visible: true,
          message: "Account created successfully!",
          type: "success",
        });

        redirectAfterLogin();
      })
      .catch((error) => {
        const errorCode = error.code;
        setToastState({
          visible: true,
          message: `${handleErrorCode(errorCode)}`,
          type: "error",
        });

        handleErrorCode(errorCode);
      });
  };

  const authSignInWithEmail = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        redirectAfterLogin();
      })
      .catch((error) => {
        const errorCode = error.code;
        setToastState({
          visible: true,
          message: `${handleErrorCode(errorCode)}`,
          type: "error",
        });
      });
  };

  const authSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        redirectAfterLogin();
      })
      .catch((error) => {
        const errorCode = error.code;
        const credential = GoogleAuthProvider.credentialFromError(error);
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
        setIsUserLoggedIn(false);

        setToastState({
          visible: true,
          message: `You are now logged out`,
          type: "success",
        });
      })
      .catch((error) => {
        const errorCode = error.code;

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
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
  };

  function handleErrorCode(errorCode: string): string {
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
