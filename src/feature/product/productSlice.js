import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../../product.js";

const initialState = {
  items: products,
  filterItem: products,
  searchItem: "",
  selecCategory: "All",
};

const filterProduct = (state) => {
  return state.items.filter((prod) => {
    const sameSearch = prod.title
      .toLowerCase()
      .includes(state.searchItem.toLowerCase());
    const matchCategory =
      state.selecCategory === "All" || prod.category === state.selecCategory;
    return sameSearch && matchCategory;
  });
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchItem: (state, action) => {
      state.searchItem = action.payload;
      state.filterItem = filterProduct(state);
    },
    setSelectCategory: (state, action) => {
      state.selecCategory = action.payload;
      state.filterItem = filterProduct(state);
    },
  },
});

export const { setSearchItem, setSelectCategory } = productSlice.actions;
export default productSlice.reducer;
