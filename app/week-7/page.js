



"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import itemsData from "./items.json";

export default function Page() {

  // State to store grocery items
  const [items, setItems] = useState(itemsData);

  // Function to add new item
  function handleAddItem(item) {
    setItems((currentItems) => [...currentItems, item]);
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Shopping List
      </h1>

      {/* Component for adding items */}
      <NewItem onAddItem={handleAddItem} />

      {/* Component for displaying list */}
      <ItemList items={items} />

    </main>
  );
}