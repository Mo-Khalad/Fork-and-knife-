import { toast } from "react-toastify";

export const totalPriceProduct=(price , count)=>{
    return (price * count).toFixed(2)
}
export const totalPriceProducts=(meals)=>{
    return meals.reduce((total , meal)=>{
       return ( total + (meal.social_rank * meal.quantity))
   },0).toFixed(2) 
}
export const totalCartItems = (meals)=> meals.reduce((totalNumberOfItems, CartItem) => {
    return ( totalNumberOfItems + CartItem.quantity );
}, 0);

export const successfullyDone = (message)=> toast.success( message , {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

