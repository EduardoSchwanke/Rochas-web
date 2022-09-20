// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDwtfmznsmT2SJPF9RsUC8-3o6gKZOgzw0",
  authDomain: "rochas-87e0b.firebaseapp.com",
  projectId: "rochas-87e0b",
  storageBucket: "rochas-87e0b.appspot.com",
  messagingSenderId: "506947087324",
  appId: "1:506947087324:web:7c6408b3c801f826a3fd19"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)