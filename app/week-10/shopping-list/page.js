





"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";


import { getItems, addItem } from "../_services/shopping-list-service";

import { useUserAuth } from "../../week-9/contexts/AuthContext";

export default function Page() {

  const { user } = useUserAuth();

  
  const [items, setItems] = useState([]);

  const [selectedItemName, setSelectedItemName] = useState("");

  
  const loadItems = async () => {
    if (!user) return;

    const itemsList = await getItems(user.uid);
    setItems(itemsList);
  };

  
  useEffect(() => {
    loadItems();
  }, [user]);

  
  async function handleAddItem(newItem) {
    if (!user) return;

    const id = await addItem(user.uid, newItem);

    const itemWithId = { id, ...newItem };

    setItems((currentItems) => [...currentItems, itemWithId]);
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