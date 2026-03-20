"use client";

import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    await gitHubSignIn();
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with GitHub</button>
      <button onClick={handleLogout}>Logout</button>

      {user && (
        <p>
          Welcome, {user.displayName} ({user.email})
        </p>
      )}
    </div>
  );
}