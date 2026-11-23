import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { auth } from "./firebase";

// make new account
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// login with email
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// logout
export const logoutUser = () => {
  return signOut(auth);
};

// firebase tell us when user comes or goes, this gives back a function to stop listening
export const monitorAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};