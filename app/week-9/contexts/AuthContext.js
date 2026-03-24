// "use client";

// import { useContext, createContext, useState, useEffect } from "react";
// import {
//   signInWithRedirect,
//   getRedirectResult,
//   signOut,
//   onAuthStateChanged,
//   GithubAuthProvider,
// } from "firebase/auth";
// import { auth } from "../../utils/firebase.js";

// const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // ✅ Use redirect instead of popup
//   const gitHubSignIn = async () => {
//     const provider = new GithubAuthProvider();
//     await signInWithRedirect(auth, provider);
//   };

//   const firebaseSignOut = () => {
//     return signOut(auth);
//   };

//   useEffect(() => {
//     // ✅ Handle redirect result
//     getRedirectResult(auth)
//       .then((result) => {
//         if (result) {
//           setUser(result.user);
//         }
//       })
//       .catch((error) => {
//         console.error("Redirect error:", error);
//       });

//     // ✅ Listen to auth state
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => unsubscribe();
//   }, []); // ✅ FIXED

//   return (
//     <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useUserAuth = () => {
//   return useContext(AuthContext);
// };



"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../../utils/firebase.js";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ GitHub login using POPUP (fixes your issue)
  const gitHubSignIn = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("GitHub Sign-in Error:", error);
    }
  };

  const firebaseSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign-out Error:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(AuthContext);
};