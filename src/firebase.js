import firebase from "firebase/app";
import database from "firebase/database";

const config = {
  apiKey: "AIzaSyDU0tVnQh8Cono8S5--teTFlBSD0NAYB1Q",
  authDomain: "andrick-xyz.firebaseapp.com",
  projectId: "andrick-xyz",
  databaseURL: "https://andrick-xyz-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "andrick-xyz.appspot.com",
  messagingSenderId: "641637386322",
  appId: "1:641637386322:web:ce3a3ce9f0ace614e2378b",
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};