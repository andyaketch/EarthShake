
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { auth } from "./firebase";

// Register a new user
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Log in an existing user
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Log out
export const logoutUser = () => {
  return signOut(auth);
};

// Monitor authentication state
export const monitorAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};
