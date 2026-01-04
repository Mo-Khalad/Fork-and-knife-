
import axios from "axios";

const baseServerUrl = import.meta.env.VITE_Base_API_URL 
export const fetchMeals = async ({ method , mealName }) => { 
  try {
  const extension =  method === "get_meals" ? 'search?q' : "get?rId"
    const responsive = await axios(
      `${baseServerUrl}${extension}=${mealName}`
    ); 
  return responsive;
} catch(error) {  
    return error 
  }
};

export const fetchDetailsMeal  = async (id) => {
  try {
    const responsive = await axios(
      `${baseServerUrl}get?rId=${id}`
    );    
    return responsive;
  } catch (error) {
    return error;
  }
}
