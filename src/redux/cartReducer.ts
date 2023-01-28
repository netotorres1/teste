import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  products: any
}

const initialState: CounterState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const item:any = state.products.find((item:any) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeToCart: (state, action: PayloadAction<any>) => {
      const item:any = state.products.find((item:any) => item.id === action.payload.id);
      if (item) {
        item.quantity -= action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state,action) => {
      state.products=state.products.filter((item:any)=>item.id !== action.payload)
    },
    resetCart: (state) => {
      state.products = []
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;