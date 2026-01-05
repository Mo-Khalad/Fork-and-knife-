import { useState , useEffect } from 'react'
export const useNetwork = ()=> {   
    const [ isOnline , setIsOnline ] = useState(navigator.onLine)
    const handleOnline =()=> setIsOnline(true)
    const handleOffline =()=> setIsOnline(false)

    useEffect(()=>{
        addEventListener('online' , ()=> handleOnline())
        addEventListener('offline' , ()=> handleOffline())
    } 
    , [] )
  return isOnline ;
}