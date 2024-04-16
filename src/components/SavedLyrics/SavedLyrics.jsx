import React, { useState } from "react";

import { lyricsDataContext } from "../../context/LyricsDataContext";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../../../firebase/firebaseConfig";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const SavedLyrics = ({ isUserLoggedIn }) => {
  const [savedLyrics, setSavedLyrics] = useState({});

  async function getAllLyricsFromDB() {
    const querySnapshot = await getDocs(collection(db, "lyrics"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  }

  function getLyricsInRealTimeFromDB() {
    onSnapshot(collection(db, "lyrics"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });
  }

  if (isUserLoggedIn) {
    //getLyricsInRealTimeFromDB()
  }

  return (
    <div>
      <button onClick={() => getAllLyricsFromDB()}>
        Show all saved lyrics
      </button>
    </div>
  );
};

export default SavedLyrics;
