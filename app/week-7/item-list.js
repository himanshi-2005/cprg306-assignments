"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {

  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {

    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }

    return 0;
  });

  return (
    <div>

      <div className="mb-4 space-x-2">

        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded ${
            sortBy === "name"
              ? "bg-blue-600 text-white"
              : "bg-gray-300"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded ${
            sortBy === "category"
              ? "bg-blue-600 text-white"
              : "bg-gray-300"
          }`}
        >
          Sort by Category
        </button>

      </div>

      <ul className="space-y-2">

        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}

      </ul>

    </div>
  );
}