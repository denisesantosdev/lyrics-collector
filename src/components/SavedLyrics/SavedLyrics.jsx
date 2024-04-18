import React, { useContext, useState } from "react";

import { lyricsDataContext } from "../../context/LyricsDataContext";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../../../firebase/firebaseConfig";

import SongLyrics from "../SongLyrics/SongLyrics";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  onSnapshot,
  query,
  where,
  orderBy,
  limit,
  deleteDoc,
  doc,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const SavedLyrics = ({ isUserLoggedIn }) => {
  const [savedLyrics, setSavedLyrics] = useState([]);

  const { setLyricsData } = useContext(lyricsDataContext);

  const [songId, setSongId] = useState([]);

  async function getAllLyricsFromDB() {
    const lyricsRef = collection(db, "lyrics");

    const q = query(
      lyricsRef,
      where("uid", "==", auth.currentUser.uid),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);

    // console.log(querySnapshot);
    const fetchedData = querySnapshot.docs.map((doc) => {
      return doc.data();
    });

    setSavedLyrics(fetchedData);
    console.log(savedLyrics);
  }

  async function getLyricsInRealTimeFromDB(user) {
    const lyricsRef = collection(db, "lyrics");

    const q = query(
      lyricsRef,
      where("uid", "==", user),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.id);
    });
  }

  async function filterByArtist(artist) {
    const lyricsRef = collection(db, "lyrics");

    const q = query(
      lyricsRef,
      where("uid", "==", auth.currentUser.uid),
      orderBy("createdAt", "desc"),
      where("artistName", "==", artist)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  }

  async function deleteSongLyricFromDB(docId) {
    await deleteDoc(doc(db, "lyrics", docId));
  }

  function renderSavedLyrics() {
    return savedLyrics.map((item, index) => {
      return (
        <a>
          <div
            key={index}>
            <img
              src={item.albumImageUrl}
              alt="album image"
            />
            <div>
              <h1>{item.songTitle}</h1>
              <h2>{item.artistName}</h2>
            </div>

            <button onClick={()=>deleteSongLyricFromDB(item.id)}>Delete</button>
          </div>
        </a>
      );
    });
  }

  if (isUserLoggedIn) {
    // getLyricsInRealTimeFromDB(auth.currentUser.uid);
  }

  return (
    <div>
      <button onClick={() => getAllLyricsFromDB()}>
        Show all saved lyrics
      </button>

      <button onClick={() => filterByArtist("Green Day")}>
        Filter by artist
      </button>

      {renderSavedLyrics()}
    </div>
  );
};

export default SavedLyrics;
