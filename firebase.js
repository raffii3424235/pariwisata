import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2DO4O-ceDGNre30SRFjRssyavjVGWRgY",
  authDomain: "pariwisatas.firebaseapp.com",
  projectId: "pariwisatas",
  storageBucket: "pariwisatas.appspot.com",
  messagingSenderId: "824218731572",
  appId: "1:824218731572:web:84e53491bdb7a41c76f661",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore();
