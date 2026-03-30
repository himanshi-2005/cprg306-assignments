"use client";

import { useEffect, useState } from "react";

// Function to fetch meals from API
async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();

  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {

  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    if (!ingredient) return;

    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="ml-10">

      <h2 className="text-xl font-bold mb-3">
        Meal Ideas
      </h2>

      {ingredient && (
        <p className="mb-2">
          Showing meals for: <b>{ingredient}</b>
        </p>
      )}

      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} className="mb-1">
            {meal.strMeal}
          </li>
        ))}
      </ul>

    </div>
  );
}