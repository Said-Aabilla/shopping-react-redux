import { configureStore } from "@reduxjs/toolkit";
import cartUiSlice from "./cart-ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  //   reducer: counterSlice.reducer,
  reducer: { cartUi: cartUiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
