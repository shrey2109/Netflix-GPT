// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2Pe0NVxxoBjivUeG1DSSPjIGXol1Zonw",
  authDomain: "netflixgpt-cb08c.firebaseapp.com",
  projectId: "netflixgpt-cb08c",
  storageBucket: "netflixgpt-cb08c.appspot.com",
  messagingSenderId: "503578845272",
  appId: "1:503578845272:web:dd8742d5192b3c62d7ea2d",
  measurementId: "G-7312XYX9MS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//* As auth is needed so many times, we are using here for 1 time, and exporting to use it.
export const auth = getAuth();
