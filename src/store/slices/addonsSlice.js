import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addons: [
    { id: 1, name: "Speakers", price: 35, quantity: 0 },
    { id: 2, name: "Microphones", price: 45, quantity: 0 },
    { id: 3, name: "Whiteboards", price: 80, quantity: 0 },
    { id: 4, name: "Projectors", price: 200, quantity: 0 },
    { id: 5, name: "Signage", price: 80, quantity: 0 },
  ],
  totalCost: 0,
};

const addonsSlice = createSlice({
  name: "addons",
  initialState,
  reducers: {
    incrementAddon: (state, action) => {
      const addon = state.addons.find((addon) => addon.id === action.payload);
      if (addon) {
        addon.quantity += 1;
        state.totalCost = state.addons.reduce(
          (total, addon) => total + addon.price * addon.quantity,
          0
        );
      }
    },
    decrementAddon: (state, action) => {
      const addon = state.addons.find((addon) => addon.id === action.payload);
      if (addon && addon.quantity > 0) {
        addon.quantity -= 1;
        state.totalCost = state.addons.reduce(
          (total, addon) => total + addon.price * addon.quantity,
          0
        );
      }
    },
  },
});

export const { incrementAddon, decrementAddon } = addonsSlice.actions;
export default addonsSlice.reducer;
