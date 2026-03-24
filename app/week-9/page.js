// "use client";

// import { useUserAuth } from "./contexts/AuthContext.js";
// import Link from "next/link";

// export default function Home() {
//   const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

//   const handleSignIn = async () => {
//     try {
//       await gitHubSignIn();
//     } catch (error) {
//       console.error("Error signing in:", error);
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       await firebaseSignOut();
//     } catch (error) {
//       console.error("Error signing out:", error);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-amber-100 flex items-center justify-center p-6">
//       <div className="w-full max-w-sm bg-amber-200 border border-neutral-800 rounded-2xl p-8 shadow-2xl">

//         <h1 className="text-3xl font-bold text-black tracking-tight mb-1">
//           Shopping List
//         </h1>

//         {user ? (
//           <>
           


//             <p className="text-neutral-400 text-xs mb-1">Signed in as</p>
//             <p className="text-white font-semibold text-lg">{user.displayName}</p>
//             <p className="text-neutral-600 text-xs mb-6">{user.email}</p>

//             <Link
//               href="/week-9/shopping-list"
//               className="flex items-center justify-between w-full px-4 py-3 bg-neutral-800 border border-white rounded-xl text-white text-sm font-medium mb-3"
//             >
//               My Shopping List
//             </Link>

//             <button
//               onClick={handleSignOut}
//               className="w-full px-4 py-3 border border-neutral-800 rounded-xl text-black text-sm"
//             >
//               Sign Out
//             </button>
//           </>
//         ) : (
//           <>
//             <p className="text-neutral-500 text-sm mb-6">
//               Sign in with GitHub to manage your personal shopping list.
//             </p>

//             <button
//               onClick={handleSignIn}
//               className="w-full px-4 py-3 bg-black text-white font-bold rounded-xl text-sm"
//             >
//               Continue with GitHub
//             </button>
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

"use client";

import { useUserAuth } from "./contexts/AuthContext.js";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // 🔥 NEW: control shopping list access
  const handleShoppingList = () => {
    if (!user) {
      alert("Please sign in first!");
      return;
    }
    router.push("/week-9/shopping-list");
  };

  return (
    <main className="min-h-screen bg-amber-100 flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-amber-200 border border-neutral-800 rounded-2xl p-8 shadow-2xl">

        <h1 className="text-3xl font-bold text-black mb-4">
          Shopping List
        </h1>

        {/* 🔥 ALWAYS SHOW THIS */}
        <button
          onClick={handleShoppingList}
          className="w-full px-4 py-3 bg-neutral-800 text-white rounded-xl mb-4"
        >
          Go to Shopping List
        </button>

        {/* 🔥 AUTH SECTION */}
        {!user ? (
          <button
            onClick={handleSignIn}
            className="w-full px-4 py-3 bg-black text-white font-bold rounded-xl"
          >
            Continue with GitHub
          </button>
        ) : (
          <button
            onClick={handleSignOut}
            className="w-full px-4 py-3 border border-black rounded-xl text-black"
          >
            Logout
          </button>
        )}
      </div>
    </main>
  );
}
