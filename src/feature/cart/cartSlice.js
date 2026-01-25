import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exisitingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (exisitingItem) {
        exisitingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
