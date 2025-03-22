import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cart:[]
}

let cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addCart:(state,action)=>{
      state.cart = [...state.cart,action.payload]
    },
    removeCart:(state,action)=>{
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
    plus:(state,action)=>{
      let index = state.cart.findIndex(item => item.id == action.payload)    
      if (index !== -1) {
        state.cart[index].quantity += 1
      }
    },
    minus:(state,action)=>{
      let index = state.cart.findIndex(item => item.id == action.payload)    
      if (index !== -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity -= 1
        }else{
          state.cart.splice(index,1)
        }
      }
    },
  }
})

export let {addCart,removeCart,plus,minus} = cartSlice.actions

export default cartSlice.reducer