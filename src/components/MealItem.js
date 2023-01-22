import React from "react";

const MealItem = (props) => {
    const { meal, onMealClick } = props;
    return(
        <div>
            <h2>Name: {meal.name}</h2>
            <p>Description: {meal.description}</p>
            <button onClick={() => onMealClick(meal.id)}>Show details</button>
        </div>
    );
}

export default MealItem;