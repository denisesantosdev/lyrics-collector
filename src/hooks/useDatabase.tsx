import { useState, useContext, useEffect } from "react";

import { auth, database as db } from "../firebase/firebaseConfig";

import { lyricsDataContext } from "@context/LyricsDataContext";
import { ToastContext } from "@context/ToastContext";

import { DatabaseItemInterface } from "models/interfaces";

import {
  collection,
  serverTimestamp,
  getDocs,
  doc,
  setDoc,
  query,
  where,
  orderBy,
  deleteDoc,
  DocumentData,
} from "firebase/firestore";
import { LyricsDataType, ToastType } from "@models/types";

const useDatabase = () => {
  const { lyricsData } = useContext(lyricsDataContext) as LyricsDataType;
  const { setToastState } = useContext(ToastContext) as ToastType;

  const [savedLyrics, setSavedLyrics] = useState<DocumentData[]>([]);
  const [isDbAltered, setIsDbAltered] = useState<boolean>(false);
  const [filteredArtists, setFilteredArtists] = useState<DocumentData[]>([]);
  const [searchResults, setSearchResults] = useState<DocumentData[]>([]);

  const collectionName = "lyrics";
  const lyricsRef = collection(db, collectionName);

  async function saveLyricsToDB() {
    try {
      const docRef = doc(lyricsRef);

      const NewItem: DatabaseItemInterface = {
        songTitle: lyricsData.songTitle,
        artistName: lyricsData.artistName,
        lyrics: lyricsData.lyrics,
        uid: auth.currentUser?.uid,
        createdAt: serverTimestamp(),
        id: docRef.id,
        albumImageUrl: lyricsData.albumImage,
      };

      await setDoc(docRef, NewItem);

      setToastState({
        visible: true,
        message: "Song added to collection",
        type: "success",
      });
      setIsDbAltered((prev) => !prev);

      //console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      setToastState({
        visible: true,
        message: "Oh-oh! An error has ocurred!",
        type: "error",
      });
    }
  }

  async function searchDB(searchQuery: string) {
    const q = query(
      lyricsRef,
      where("uid", "==", auth.currentUser?.uid),
      where("songTitle", "==", searchQuery)
    );

    const querySnapshot = await getDocs(q);
    const fetchedData = querySnapshot.docs.map((doc) => {
      return doc.data();
    });

    if (!querySnapshot.empty) {
      setSearchResults([])
    }

    setSearchResults(fetchedData);
  }

  async function getAllLyricsFromDB() {
    const q = query(
      lyricsRef,
      where("uid", "==", auth.currentUser?.uid),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);

    const fetchedData = querySnapshot.docs.map((doc) => {
      return doc.data();
    });

    setSavedLyrics(fetchedData);
  }

  async function filterByArtist(artist: string) {
    const q = query(
      lyricsRef,
      where("uid", "==", auth.currentUser?.uid),
      orderBy("createdAt", "desc"),
      where("artistName", "==", artist)
    );

    const querySnapshot = await getDocs(q);

    const fetchedData = querySnapshot.docs.map((doc) => {
      return doc.data();
    });

    setFilteredArtists(fetchedData);
  }

  async function deleteSongLyricFromDB(docId: string) {
    await deleteDoc(doc(db, collectionName, docId));

    setIsDbAltered((prev) => !prev);

    setToastState({
      visible: true,
      message: "Song deleted from collection",
      type: "success",
    });
    console.log(isDbAltered);
  }

  return {
    saveLyricsToDB,
    getAllLyricsFromDB,
    filterByArtist,
    deleteSongLyricFromDB,
    savedLyrics,
    isDbAltered,
    filteredArtists,
    searchResults,
    searchDB,
  };
};

export default useDatabase;
