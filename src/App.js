import React, { useState, useEffect } from "react";
import axios from "axios";
import MealList from "./components/MealList";
import MealDetails from "./components/MealDetails";

const App = () => {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            const result = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
            setMeals(result.data.meals);
        }
        fetchMeals().then(r => console.log(r));
    }, []);

    const handleMealClick = (mealId) => {
        const selectedMeal = meals.find((meal) => meal.id === mealId);
        setSelectedMeal(selectedMeal);
    }

    return(
        <div>
            {selectedMeal ? (
                <MealDetails meal={selectedMeal} />
            ) : (
                <MealList meals={meals} onMealClick={handleMealClick} />
            )}
        </div>
    );
}

export default App;