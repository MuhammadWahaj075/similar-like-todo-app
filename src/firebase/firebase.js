import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvdHuyJYlAsoY2nw9fMZREC4y_1-I0ueE",
  authDomain: "similar-like-todo.firebaseapp.com",
  dataBaseUrl: "gs://similar-like-todo.appspot.com",
  projectId: "similar-like-todo",
  storageBucket: "similar-like-todo.appspot.com",
  messagingSenderId: "131717065122",
  appId: "1:131717065122:web:366acfb2480f43c962aafb",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth();
const db = getDatabase(app);

export { app, auth, storage, db };
