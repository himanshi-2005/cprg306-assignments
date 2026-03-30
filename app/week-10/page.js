




"use client";

import { useUserAuth } from "../week-9/contexts/AuthContext.js";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleSignIn = async () => {
    await gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  const handleShoppingList = () => {
    if (!user) {
      alert("Please sign in first!");
      return;
    }
    router.push("/week-10/shopping-list");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-blue-950 border border-blue-700 rounded-2xl p-8 shadow-2xl">

        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Shopping List
        </h1>

        <button
          onClick={handleShoppingList}
          className="w-full px-4 py-3 bg-blue-700 hover:bg-blue-600 text-white rounded-xl mb-4 transition"
        >
          Go to Shopping List
        </button>

        {!user ? (
          <button
            onClick={handleSignIn}
            className="w-full px-4 py-3 bg-black hover:bg-gray-900 text-white font-bold rounded-xl transition"
          >
            Continue with GitHub
          </button>
        ) : (
          <button
            onClick={handleSignOut}
            className="w-full px-4 py-3 border border-blue-400 text-blue-200 rounded-xl hover:bg-blue-800 transition"
          >
            Logout
          </button>
        )}
      </div>
    </main>
  );
}
