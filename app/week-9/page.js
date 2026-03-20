"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>
      {!user ? (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      ) : (
        <div>
          <p>
            Welcome, {user.displayName} 
          </p>

          <button onClick={firebaseSignOut}>Logout</button>

          <br /><br />

          <Link href="/week-9/shopping-list">Go to Shopping List</Link>
        </div>
      )}
    </div>
  );
}