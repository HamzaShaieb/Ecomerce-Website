import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
      state.quantity -= 1;
      const productslist = state.products
      const productTodelete = productslist.findIndex((productitem) => productitem.id === action.payload);
      state.products.splice(productTodelete,1);
      state.total -= productTodelete.price * productTodelete.quantity;
    },
    resetCart:(state)=>{
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    }
    
  },
});

export const { addProduct,resetCart,deleteProduct} = cartSlice.actions;
export default cartSlice.reducer;
