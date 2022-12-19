
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcURhZzNA1mZEAC9tisqrQBxMehlIx2tI",
  authDomain: "control-panel-5bb3e.firebaseapp.com",
  projectId: "control-panel-5bb3e",
  storageBucket: "control-panel-5bb3e.appspot.com",
  messagingSenderId: "1083270693196",
  appId: "1:1083270693196:web:d3fcfdf3a7483558590fe9",
  measurementId: "G-S3NHVZ34FF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


