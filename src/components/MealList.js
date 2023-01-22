import React from "react";
import MealItem from "./MealItem";

const MealList = (props) => {
    const { meals, onMealClick } = props;

    return(
        <div>

            {meals.map((meal) => (
                <MealItem key={meal.id} meal={meal} onMealClick={onMealClick} />
            ))}
        </div>
    );
};

export default MealList;