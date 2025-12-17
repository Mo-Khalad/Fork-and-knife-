import React from 'react'
import { create } from 'zustand'

export const DataShareContext = create(
(set)=>({
    dataShare: 'pizza' ,
    handleDataShare:(meal)=>set(()=>({ dataShare : meal}))
   

}))
