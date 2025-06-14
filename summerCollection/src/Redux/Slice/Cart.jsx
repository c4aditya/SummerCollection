import {createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

// create a slice 
const getInitialCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const CartSlice = createSlice({
    name:"Cart",
    initialState:getInitialCart(),

    reducers:{
        addToCart:(state , action)=>{
              const isExist = state.find(item => item.id === action.payload.id);
        
      if (isExist) {
        toast.warning("Item is already added to the cart!");  
        return;

      }
      else{
         toast.success("Product is added to your Cart ");
            
      }
            console.log("Add to cart button  is clicked")
            state.push(action.payload)
            
            localStorage.setItem("cart", JSON.stringify(state));

        },
 // yhss state ka mtlb Cart : CartSlice hai jo humne confugure storeage me store kiya hua hau 
        removeToCart:(state,action)=>{
            
           console.log("The Delete button is clicked ")
           const updatedCart = state.filter( (item) => item.id !== action.payload)
           localStorage.setItem("cart", JSON.stringify(updatedCart)); 
           toast.success("The product is deleted from the cart ")
           return updatedCart;
           

            

        }
    }
})

export const {addToCart , removeToCart} = CartSlice.actions;

export default CartSlice.reducer;


