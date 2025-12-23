import { create } from "zustand";
import { persist } from "zustand/middleware"

export const cartContext = create(
  persist(
      (set) => ({
     cartMeals: [],
     addItemToCartHandler:( meal ) =>
            set((state)=>{
            const existingCartItemIndex = state.cartMeals.findIndex((cartMeal)=> 
            cartMeal.recipe_id === meal.recipe_id )            
            const updatedItems = [...state.cartMeals] 
            if( existingCartItemIndex > -1 ){
             let existingItem = updatedItems[existingCartItemIndex]
             const updatedItem = { ...meal , quantity: existingItem.quantity + 1 }             
             existingItem = updatedItem 
             updatedItems[existingCartItemIndex] = existingItem               
             return { cartMeals : [ ...updatedItems ] }
           }
           else {
       return {
        cartMeals: [...state.cartMeals, { ...meal, quantity: 1 }],
      };
      }
      })
      ,
      decrementItemToCartHandler:(meal) => 
          set((state)=>{
             const existingCartItemIndex = state.cartMeals.findIndex((cartMeal)=> cartMeal.recipe_id === meal.recipe_id)
             let updatedItems = [...state.cartMeals] 
             if( updatedItems[existingCartItemIndex].quantity > 1 ){
             let existingItem = updatedItems[existingCartItemIndex]
             const updatedItem = { ...meal , quantity: existingItem.quantity - 1 }
             existingItem = updatedItem 
             updatedItems[existingCartItemIndex] = existingItem  
             return { cartMeals : [ ...updatedItems ] }
           }
            
         else {        
             return { cartMeals:state.cartMeals.filter((cartMeal)=> cartMeal.recipe_id !== meal.recipe_id)}
          }
      }), 
      
     removeItemToCartHandler:(meal)=>set(
      (state)=>{
        return { cartMeals:state.cartMeals.filter((cartMeal)=> cartMeal.recipe_id !== meal.recipe_id)}
      }
     ),
        
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

 