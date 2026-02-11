"use client";

import { useState } from "react";

export default function NewItem() {

  // ✅ State Variables
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // ✅ Handle Submit
  function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload

    const item = {
      name: name,
      quantity: quantity,
      category: category
    };

    console.log(item);

    alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`);

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      {/* Name Field */}
      <div>
        <label className="block mb-1 font-semibold text-black">Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Quantity + Category Row */}
      <div className="flex gap-4">

        {/* Quantity */}
        <div className="flex-1">
          <label className="block mb-1 font-semibold text-black">Quantity</label>
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Category */}
        <div className="flex-1">
          <label className="block mb-1 font-semibold text-black">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md text-black"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
      >
        +
      </button>
    </form>
  );
}
