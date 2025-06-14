import CartSlice  from "./Slice/Cart";
import  WishlistSlice  from "./Slice/WishList";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
      Cart : CartSlice,
      Wishlist : WishlistSlice,
    }
})