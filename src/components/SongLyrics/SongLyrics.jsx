import React, { useContext, useEffect, useState } from "react";
import { lyricsDataContext } from "../../context/LyricsDataContext";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../../../firebase/firebaseConfig";
import { getFirestore } from "firebase/firestore";

import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const SongLyrics = () => {
  const { lyricsData } = useContext(lyricsDataContext);

  async function saveLyricsToDB() {
    try {
      const docRef = await addDoc(collection(db, "lyrics"), {
        songTitle: lyricsData.songTitle,
        artistName: lyricsData.artistName,
        uid: auth.currentUser.uid,
        createdAt: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function getAllLyricsFromDB() {
    const querySnapshot = await getDocs(collection(db, "lyrics"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  }

  //console.log(lyricsData);
  return (
    <div>
      <div>
        {lyricsData ? (
          <div>
            <img
              src={lyricsData.albumImage}
              alt=""
            />
            <div>
              <h1>{lyricsData.songTitle}</h1>
              <button onClick={() => saveLyricsToDB()}>Save</button>
            </div>
            <h2>{lyricsData.artistName}</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{lyricsData.lyrics}</p>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>

      <div>
        <button onClick={() => getAllLyricsFromDB()}>
          Show all saved lyrics
        </button>

        <div>
        </div>
      </div>
    </div>
  );
};

export default SongLyrics;
