import axios from "axios";
//const baseServerUrl
//process.env.REACT_APP_Base_API_URl
//
export const fetchMeals = async ({ method , mealName }) => {
  
  const extension =  method === "get_meals" ? 'search?q' : "get?rId"
  try {
    const responsive =await axios(
      `https://forkify-api.herokuapp.com/api/${extension}=${mealName}`
    );    
    
    return responsive;
  } catch (error) {
    return error;
  }
};

export const searchMealHandler = async () => {

}
