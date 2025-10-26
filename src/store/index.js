import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./slices/roomSlice";
import addonsReducer from "./slices/addonsSlice";
import mealsReducer from "./slices/mealsSlice";
import summaryReducer from "./slices/summarySlice";

export const store = configureStore({
  reducer: {
    rooms: roomReducer,
    addons: addonsReducer,
    meals: mealsReducer,
    summary: summaryReducer,
  },
});
