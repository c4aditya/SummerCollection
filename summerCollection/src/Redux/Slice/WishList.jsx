import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const getInitialWishlist = () => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

export const WishlistSlice = createSlice({
  name: "Wishlist",
  initialState: getInitialWishlist(), 
  reducers: {
    addToWishList: (state, action) => {
      const item = action.payload;
      const exists = state.find((items) => items.id === item.id);
      if (!exists) {
        state.push(item);
        toast.success("Item added to wishlist");
      } else {
        toast.info("Item already in wishlist");
      }
      localStorage.setItem("wishlist", JSON.stringify(state));
    },

     removeFromWishList:(state,action)=>{            
           console.log("The delete from wishlist id clicked ")
           const updatedCart = state.filter( (item) => item.id !== action.payload)
           localStorage.setItem("wishlist", JSON.stringify(updatedCart)); 
           return updatedCart;

            

        }
  },
});

export const { addToWishList, removeFromWishList } = WishlistSlice.actions;
export default WishlistSlice.reducer;
