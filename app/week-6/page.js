"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {

  // ✅ Master State
  const [items, setItems] = useState(itemsData);

  // ✅ Event Handler (adds new item)
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="p-6">
      
      <h1 className="text-3xl font-bold mb-6">
        Shopping List
      </h1>

      {/* Send function DOWN to NewItem */}
      <NewItem onAddItem={handleAddItem} />

      {/* Send state DOWN to ItemList */}
      <ItemList items={items} />

    </main>
  );
}