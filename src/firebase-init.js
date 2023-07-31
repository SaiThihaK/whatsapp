// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA_q4DcBGgFON6EPmdv_ZhzlEMasaYDCw",
  authDomain: "whatapp-393404.firebaseapp.com",
  projectId: "whatapp-393404",
  storageBucket: "whatapp-393404.appspot.com",
  messagingSenderId: "1011467732405",
  appId: "1:1011467732405:web:99d2edfdff9841946145fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
