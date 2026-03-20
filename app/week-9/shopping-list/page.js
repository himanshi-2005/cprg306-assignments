"use client";

import Link from "next/link";
import { useUserAuth } from "../../../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Handle login
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Week 9 Landing Page</h1>

      {/* If user NOT logged in */}
      {!user && (
        <button onClick={handleLogin}>
          Login with GitHub
        </button>
      )}

      {/* If user IS logged in */}
      {user && (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>

          <button onClick={handleLogout}>
            Logout
          </button>

          <br /><br />

          <Link href="/week-9/shopping-list">
            Go to Shopping List
          </Link>
        </div>
      )}
    </div>
  );
}