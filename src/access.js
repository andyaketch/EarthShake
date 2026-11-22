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

// the social route, google popup. need to turn google on in firebase console first
export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// logout
export const logoutUser = () => {
  return signOut(auth);
};

// firebase tell us when user come or go, this gives back a function to stop listening
export const monitorAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};