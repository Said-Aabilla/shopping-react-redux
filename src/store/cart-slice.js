import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalAmount: 0, totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;
      state.totalAmount = state.totalAmount + newItem.price;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          title: newItem.title,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },

    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const itemToremove = state.items.find((item) => item.id === itemId);

      state.totalQuantity--;
      state.totalAmount = state.totalAmount - itemToremove.price;

      if (itemToremove.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        itemToremove.quantity--;
        itemToremove.totalPrice = itemToremove.totalPrice - itemToremove.price;
      }
    },
    clearCart(state) {
      state = initialState;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
