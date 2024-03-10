
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwGH13qpy2XuB0ktaOKw3g13yavHMROUk",
  authDomain: "nwitter-reloaded-a97c5.firebaseapp.com",
  projectId: "nwitter-reloaded-a97c5",
  storageBucket: "nwitter-reloaded-a97c5.appspot.com",
  messagingSenderId: "27368124469",
  appId: "1:27368124469:web:0acf1ff335726b4c19c17c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);