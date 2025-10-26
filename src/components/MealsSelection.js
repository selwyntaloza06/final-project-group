import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMeal, setNumberOfPeople } from "../store/slices/mealsSlice";
import "./MealsSelection.css";

const MealsSelection = () => {
  const { meals, numberOfPeople, totalCost } = useSelector(
    (state) => state.meals
  );
  const dispatch = useDispatch();

  return (
    <section className="meals-selection">
      <h2>Meals Selection</h2>

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
        />
      </div>

      <div className="meals-grid">
        {meals.map((meal) => (
          <div key={meal.id} className="meal-card">
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
                Subtotal: ${meal.price * numberOfPeople}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="total-cost">
        <h3>Total Meals Cost: ${totalCost}</h3>
      </div>
    </section>
  );
};

export default MealsSelection;
