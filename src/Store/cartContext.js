import { create } from "zustand";
import { persist } from "zustand/middleware"

export const cartContext = create(
  persist(
      (set) => ({
        cartMeals: [],
        addItemToCartHandler:(meal) =>
          set((state)=>{
             const existingCartItemIndex = state.cartMeals.findIndex((cartMeal)=> cartMeal.id === meal.id)
             const updatedItems = [...state.cartMeals] 
      
             if( existingCartItemIndex > -1 ){
              let existingItem = updatedItems[existingCartItemIndex]
              const updatedItem = { ...meal , quantity: existingItem.quantity + 1 }
              existingItem = updatedItem 
              updatedItems[existingCartItemIndex] = existingItem  
              return { cartMeals : [ ...updatedItems ] }
            }
            
       else {
           state.cartMeals.push({...meal , quantity:1})
           return {cartMeals:[state.cartMeals]}
       }
        }) ,
      
      removeItemToCartHandler:(meal) => 
          set((state)=>{
             const existingCartItemIndex = state.cartMeals.findIndex((cartMeal)=> cartMeal.id === meal.id)
             let updatedItems = [...state.cartMeals] 
             if( updatedItems[existingCartItemIndex].quantity > 1 ){
             let existingItem = updatedItems[existingCartItemIndex]
             const updatedItem = { ...meal , quantity: existingItem.quantity - 1 }
             existingItem = updatedItem 
             updatedItems[existingCartItemIndex] = existingItem  
             return { cartMeals : [ ...updatedItems ] }
           }
            
       else {        
            return { cartMeals:state.cartMeals.filter((cartMeal)=> cartMeal.id !== meal.id)}
         }
           }), 
      
      removeAllItemsToCartHandler:()=> 
        set(()=>{
        return{ cartMeals :[]}
      })
      }),
      {
        name:"cart_context"
      }
    )
  )
