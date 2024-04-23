import React, { useState } from "react";
import { useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../../firebase/firebaseConfig";
import { lyricsDataContext } from "../context/LyricsDataContext";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  setDoc,
  query,
  where,
  orderBy,
  deleteDoc,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const useDatabase = () => {
  const { lyricsData, setLyricsData } = useContext(lyricsDataContext);
  const [savedLyrics, setSavedLyrics] = useState([]);
  const [isDbAltered, setIsDbAltered] = useState(false);
  
  const collectionName = 'lyrics'
  const lyricsRef = collection(db, collectionName)

  async function saveLyricsToDB() {
    try {
      const docRef = doc(lyricsRef);

      await setDoc(docRef, {
        songTitle: lyricsData.songTitle,
        artistName: lyricsData.artistName,
        lyrics: lyricsData.lyrics,
        uid: auth.currentUser.uid,
        createdAt: serverTimestamp(),
        id: docRef.id,
        albumImageUrl: lyricsData.albumImage,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function getAllLyricsFromDB() {
    const q = query(
      lyricsRef,
      where("uid", "==", auth.currentUser.uid),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);

    const fetchedData = querySnapshot.docs.map((doc) => {
      return doc.data();
    });

    setSavedLyrics(fetchedData);
  }

  async function filterByArtist(artist) {
    const q = query(
      lyricsRef,
      where("uid", "==", auth.currentUser.uid),
      orderBy("createdAt", "desc"),
      where("artistName", "==", artist)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data(), doc.id);
    });
  }

  async function deleteSongLyricFromDB(docId) {
    await deleteDoc(doc(db, collectionName, docId));
    setIsDbAltered((prev) => !prev);
    console.log(isDbAltered);
  }

  return {
    saveLyricsToDB,
    getAllLyricsFromDB,
    filterByArtist,
    deleteSongLyricFromDB,
    savedLyrics,
    isDbAltered,
  };
};

export default useDatabase;
