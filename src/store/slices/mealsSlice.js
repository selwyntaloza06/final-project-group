import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [
    { id: 1, name: "Breakfast", price: 50, selected: false },
    { id: 2, name: "Lunch", price: 60, selected: false },
    { id: 3, name: "High Tea", price: 25, selected: false },
    { id: 4, name: "Dinner", price: 70, selected: false },
  ],
  numberOfPeople: 0,
  totalCost: 0,
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    toggleMeal: (state, action) => {
      const meal = state.meals.find((meal) => meal.id === action.payload);
      if (meal) {
        meal.selected = !meal.selected;
        state.totalCost = state.meals.reduce(
          (total, meal) =>
            total + (meal.selected ? meal.price * state.numberOfPeople : 0),
          0
        );
      }
    },
    setNumberOfPeople: (state, action) => {
      state.numberOfPeople = action.payload;
      state.totalCost = state.meals.reduce(
        (total, meal) =>
          total + (meal.selected ? meal.price * state.numberOfPeople : 0),
        0
      );
    },
  },
});

export const { toggleMeal, setNumberOfPeople } = mealsSlice.actions;
export default mealsSlice.reducer;
