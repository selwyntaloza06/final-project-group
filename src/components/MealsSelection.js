import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleMeal, setNumberOfPeople } from "../store/slices/mealsSlice";
import Navigation from "./Navigation";
import "./MealsSelection.css";

const MealsPage = () => {
  const { meals, numberOfPeople, totalCost } = useSelector(
    (state) => state.meals
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mealImages = {
    1: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=300&h=200&fit=crop",
    2: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop",
    3: "https://images.unsplash.com/photo-1570018144714-0dbab6bc4ca9?w=300&h=200&fit=crop",
    4: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300&h=200&fit=crop",
  };

  return (
    <div className="meals-page">
      <Navigation />

      <div className="page-header">
        <h1>Meals Selection</h1>
        <p>Choose meals for your conference attendees</p>
      </div>

      <div className="people-input-section">
        <div className="people-input">
          <label htmlFor="numberOfPeople">Number of People:</label>
          <input
            id="numberOfPeople"
            type="number"
            value={numberOfPeople}
            onChange={(e) =>
              dispatch(setNumberOfPeople(parseInt(e.target.value) || 0))
            }
            min="0"
            placeholder="Enter number of attendees"
          />
        </div>
      </div>

      <div className="meals-grid">
        {meals.map((meal) => (
          <div key={meal.id} className="meal-card">
            <div className="meal-image">
              <img src={mealImages[meal.id]} alt={meal.name} />
            </div>
            <div className="meal-info">
              <label className="meal-checkbox">
                <input
                  type="checkbox"
                  checked={meal.selected}
                  onChange={() => dispatch(toggleMeal(meal.id))}
                />
                <span className="meal-name">{meal.name}</span>
              </label>
              <p className="price">${meal.price} per person</p>
              {meal.selected && numberOfPeople > 0 && (
                <p className="meal-subtotal">
                  Subtotal: ${(meal.price * numberOfPeople).toLocaleString()}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="page-footer">
        <div className="total-cost">
          <h3>Total Meals Cost: ${totalCost.toLocaleString()}</h3>
        </div>
      </div>
    </div>
  );
};

export default MealsPage;
