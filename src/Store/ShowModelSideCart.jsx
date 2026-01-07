import { create } from "zustand"

export const ShowModelSideCart = create( 
(set)=>({
    showSideCart: true ,
    handleSideCartDisplay:()=>set(()=>({ showSideCart : true})),
    handleSideCartHide:()=>set(()=>({ showSideCart : false}))
   
}))