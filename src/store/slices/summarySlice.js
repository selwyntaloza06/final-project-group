import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { toggleModal } = summarySlice.actions;
export default summarySlice.reducer;
