"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";

export default function Page() {

  const [items, setItems] = useState(itemsData);

  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((currentItems) => [...currentItems, newItem]);
  }

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