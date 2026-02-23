"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import itemsData from "./items.json";

export default function Page() {
  // ✅ Master State
  const [items, setItems] = useState(itemsData);

  // ✅ Add new item to state (safe functional update)
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Shopping List
      </h1>

      {/* Form Component */}
      <NewItem onAddItem={handleAddItem} />

      {/* List Component */}
      <ItemList items={items} />
    </main>
  );
}