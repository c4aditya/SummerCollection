import CartSlice  from "./Slice/Cart";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
      Cart : CartSlice
    }
})