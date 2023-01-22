import React from "react";

const MealDetails = (props) => {
    const { meal } = props;
    return(
        <div>
            <h2>Name: {meal.name}</h2>
            <p>Description: {meal.description}</p>
            <p>Country of origin: {meal.country}</p>
            <p>Category: {meal.category}</p>
            <p>Instructions: {meal.instructions}</p>
            <p>Rating: {meal.rating}</p>
        </div>
    );
}

export default MealDetails;