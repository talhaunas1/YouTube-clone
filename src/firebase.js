import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDmHEt5D0F7BoAeBhnvMy2QUITGcfRefv4",
  authDomain: "video-94fad.firebaseapp.com",
  projectId: "video-94fad",
  storageBucket: "video-94fad.appspot.com",
  messagingSenderId: "760466669634",
  appId: "1:760466669634:web:7004ba145bf846da5beddb",
  measurementId: "G-796L071S0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth()
export const provider =new GoogleAuthProvider()
export default app;




