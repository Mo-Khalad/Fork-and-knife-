import axios from "axios"
//const baseServerUrl 
//process.env.REACT_APP_Base_API_URL
export const fetchMeals=(meal)=>{
const response = axios(`search?q=${meal}`)
return response

}
