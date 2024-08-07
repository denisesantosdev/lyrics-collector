import { FieldValue } from "firebase/firestore";

interface LyricsDataInterface {
  artistName: string;
  songTitle: string;
  albumImage: string;
  lyrics: string;
}

interface UserInterface {
  email: string;
  password: string;
}

interface ToastInterface {
  visible: boolean;
  message: string;
  type: "alert" | "success" | "error" | "";
}

interface searchQueryInterface {
  artistName: string;
  songTitle: string;
}

interface DatabaseItemInterface {
  songTitle: string;
  artistName: string;
  lyrics: string;
  uid?: string;
  createdAt: FieldValue;
  id: string;
  albumImageUrl: string;
}

export type {LyricsDataInterface, UserInterface, ToastInterface, searchQueryInterface, DatabaseItemInterface}