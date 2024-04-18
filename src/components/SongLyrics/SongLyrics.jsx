import React, { useContext, useEffect, useState } from "react";
import { lyricsDataContext } from "../../context/LyricsDataContext";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../../../firebase/firebaseConfig";
import { getFirestore, setDoc } from "firebase/firestore";

import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  doc
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const SongLyrics = () => {
  const { lyricsData } = useContext(lyricsDataContext);

  async function saveLyricsToDB() {
    try {
      const docRef = doc(collection(db, "lyrics"));

      await setDoc(docRef, {
        songTitle: lyricsData.songTitle,
        artistName: lyricsData.artistName,
        lyrics: lyricsData.lyrics,
        uid: auth.currentUser.uid,
        createdAt: serverTimestamp(),
        id: docRef.id,
        albumImageUrl: lyricsData.albumImage,
      })
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
    </div>
  );
};

export default SongLyrics;
