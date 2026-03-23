"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../../utils/firebase.js";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Use redirect instead of popup
  const gitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    await signInWithRedirect(auth, provider);
  };

  const firebaseSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    // ✅ Handle redirect result
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          setUser(result.user);
        }
      })
      .catch((error) => {
        console.error("Redirect error:", error);
      });

    // ✅ Listen to auth state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []); // ✅ FIXED

  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(AuthContext);
};