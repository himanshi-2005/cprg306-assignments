// "use client";

// import { useState } from "react";
// import ItemList from "./item-list";
// import NewItem from "./NewItem";
// import MealIdeas from "./MealIdeas";


// export default function Page() {

//   // Main state storing all items
//   const [items, setItems] = useState(itemsData);

//   // NEW: selected ingredient
//   const [selectedItemName, setSelectedItemName] = useState("");

//   // Function to add new item
//   function handleAddItem(newItem) {
//     setItems((currentItems) => [...currentItems, newItem]);
//   }

//   // NEW: when an item is clicked
//   function handleItemSelect(item) {

//     // Clean the item name
//     let cleanedName = item.name
//       .split(",")[0]     // remove size (ex: "1 kg")
//       .trim()
//       .replace(/[^\w\s]/g, "");   // remove emojis

//     setSelectedItemName(cleanedName);
//   }

//   return (
//     <main className="p-6 max-w-4xl mx-auto">

//       <h1 className="text-3xl font-bold mb-6 text-center">
//         Shopping List
//       </h1>

//       {/* Layout with flex */}
//       <div className="flex gap-10">

//         {/* LEFT SIDE */}
//         <div>

//           {/* Form */}
//           <NewItem onAddItem={handleAddItem} />

//           {/* Item List */}
//           <ItemList
//             items={items}
//             onItemSelect={handleItemSelect}
//           />

//         </div>

//         {/* RIGHT SIDE */}
//         <MealIdeas ingredient={selectedItemName} />

//       </div>

//     </main>
//   );
// }





"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";

// 🔹 IMPORT FIRESTORE FUNCTIONS
import { getItems, addItem } from "../_services/shopping-list-service";

// 🔹 IMPORT USER AUTH
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {

  const { user } = useUserAuth();

  // ✅ FIXED: start with empty array
  const [items, setItems] = useState([]);

  const [selectedItemName, setSelectedItemName] = useState("");

  // 🔹 LOAD ITEMS FROM FIRESTORE
  const loadItems = async () => {
    if (!user) return;

    const itemsList = await getItems(user.uid);
    setItems(itemsList);
  };

  // 🔹 RUN WHEN PAGE LOADS / USER CHANGES
  useEffect(() => {
    loadItems();
  }, [user]);

  // 🔹 ADD ITEM TO FIRESTORE
  async function handleAddItem(newItem) {
    if (!user) return;

    const id = await addItem(user.uid, newItem);

    const itemWithId = { id, ...newItem };

    setItems((currentItems) => [...currentItems, itemWithId]);
  }

  // 🔹 ITEM SELECT (unchanged)
  function handleItemSelect(item) {
    let cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^\w\s]/g, "");

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Shopping List
      </h1>

      <div className="flex gap-10">

        <div>

          <NewItem onAddItem={handleAddItem} />

          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
          />

        </div>

        <MealIdeas ingredient={selectedItemName} />

      </div>

    </main>
  );
}