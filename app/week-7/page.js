"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import itemsData from "./items.json";

export default function Page() {

  // Main state storing all items
  const [items, setItems] = useState(itemsData);

  // Function to add new item
  function handleAddItem(newItem) {
    setItems((currentItems) => [...currentItems, newItem]);
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Shopping List
      </h1>

      {/* Form */}
      <NewItem onAddItem={handleAddItem} />

      {/* Item List */}
      <ItemList items={items} />

    </main>
  );
}