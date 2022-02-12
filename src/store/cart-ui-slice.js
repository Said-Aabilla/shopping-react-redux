import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false };

const cartUiSlice = createSlice({
  name: "showCart",
  initialState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartUiActions = cartUiSlice.actions;
export default cartUiSlice;