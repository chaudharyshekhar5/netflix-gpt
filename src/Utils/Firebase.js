// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4MUItVndvscRMy_X8hXROYnvozFOdrs0",
  authDomain: "netflix-gpt-322dd.firebaseapp.com",
  projectId: "netflix-gpt-322dd",
  storageBucket: "netflix-gpt-322dd.appspot.com",
  messagingSenderId: "657282107328",
  appId: "1:657282107328:web:a79ae1e8f66811d37d6a25",
  measurementId: "G-K3GYV9Y5TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();