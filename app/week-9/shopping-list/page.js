"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";

export default function Page() {

  // Main state storing all items
  const [items, setItems] = useState(itemsData);

  // NEW: selected ingredient
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to add new item
  function handleAddItem(newItem) {
    setItems((currentItems) => [...currentItems, newItem]);
  }

  // NEW: when an item is clicked
  function handleItemSelect(item) {

    // Clean the item name
    let cleanedName = item.name
      .split(",")[0]     // remove size (ex: "1 kg")
      .trim()
      .replace(/[^\w\s]/g, "");   // remove emojis

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Shopping List
      </h1>

      {/* Layout with flex */}
      <div className="flex gap-10">

        {/* LEFT SIDE */}
        <div>

          {/* Form */}
          <NewItem onAddItem={handleAddItem} />

          {/* Item List */}
          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
          />

        </div>

        {/* RIGHT SIDE */}
        <MealIdeas ingredient={selectedItemName} />

      </div>

    </main>
  );
}