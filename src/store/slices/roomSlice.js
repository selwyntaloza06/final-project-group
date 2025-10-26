import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [
    { id: 1, name: "Auditorium Hall", capacity: 200, price: 5500, quantity: 0 },
    { id: 2, name: "Conference Room", capacity: 15, price: 3500, quantity: 0 },
    { id: 3, name: "Presentation Room", capacity: 50, price: 700, quantity: 0 },
    {
      id: 4,
      name: "Large Meeting Room",
      capacity: 10,
      price: 900,
      quantity: 0,
    },
    {
      id: 5,
      name: "Small Meeting Room",
      capacity: 5,
      price: 1100,
      quantity: 0,
    },
  ],
  totalCost: 0,
};

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    incrementRoom: (state, action) => {
      const room = state.rooms.find((room) => room.id === action.payload);
      if (room) {
        room.quantity += 1;
        state.totalCost = state.rooms.reduce(
          (total, room) => total + room.price * room.quantity,
          0
        );
      }
    },
    decrementRoom: (state, action) => {
      const room = state.rooms.find((room) => room.id === action.payload);
      if (room && room.quantity > 0) {
        room.quantity -= 1;
        state.totalCost = state.rooms.reduce(
          (total, room) => total + room.price * room.quantity,
          0
        );
      }
    },
  },
});

export const { incrementRoom, decrementRoom } = roomSlice.actions;
export default roomSlice.reducer;
