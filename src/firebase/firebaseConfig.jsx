import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDEpSNpLDfk1rZb8hAKibzqQboLpMxt_TA",
  authDomain: "lyrics-collector.firebaseapp.com",
  projectId: "lyrics-collector",
  storageBucket: "lyrics-collector.appspot.com",
  messagingSenderId: "263663250334",
  appId: "1:263663250334:web:e9a3ba0961fe0dc897448f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getFirestore(app);

export { auth, provider, database };
