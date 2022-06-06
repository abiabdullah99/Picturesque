import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAtLQTpijHdm-_DY46FXSCaSc4iUaz38sw",
  authDomain: "picturesque-photographer.firebaseapp.com",
  projectId: "picturesque-photographer",
  storageBucket: "picturesque-photographer.appspot.com",
  messagingSenderId: "574533212638",
  appId: "1:574533212638:web:c0e41b74fa490022b0e54f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
