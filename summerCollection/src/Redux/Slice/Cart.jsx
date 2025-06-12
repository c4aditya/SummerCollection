import {createSlice} from '@reduxjs/toolkit'
// create a slice 

export const CartSlice = createSlice({
    name:"Cart",
    initialState:[],

    reducers:{
        addToCart:(state , action)=>{

            console.log("Add to cart button  is clicked")
            state.push(action.payload)
            

        },
 // yhss state ka mtlb Cart : CartSlice hai jo humne confugure storeage me store kiya hua hau 
        removeToCart:(state,action)=>{
            
           console.log("The Delete button is clicked ")
           return  state.filter( (item) => item.id !== action.payload)

            

        }
    }
})

export const {addToCart , removeToCart} = CartSlice.actions;

export default CartSlice.reducer;


