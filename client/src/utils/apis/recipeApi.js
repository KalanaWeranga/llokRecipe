import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://51.21.92.181:3001', 
});

export const getlistByCategory = async (category) => {
    try {
      const response = await axiosInstance.get(`/recipes/list?category=${category}`);
      // console.log(response.data.meals);
      return response.data.meals
    } catch (error) {
      console.error('Error posting data:', error);
      throw error; 
    }
  };

  export const addItemToFav = async (payload) => {
    try {
      const response = await axiosInstance.post(`/recipes/addToFavourite`,payload);
      // console.log(response.data.meals);
      return response
    } catch (error) {
      console.error('Error posting data:', error);
      throw error; 
    }
  };

  export const removeItemToFav = async (payload) => {
    console.log("back",payload);
    try {
      const response = await axiosInstance.delete(`/recipes/removeItem?user_id=${payload.user_id}&recipe_id=${payload.recipe_id}`,payload);
      // console.log(response.data.meals);
      return response
    } catch (error) {
      console.error('Error posting data:', error);
      throw error; 
    }
  };

  export const getItemInFav = async (payload) => {
    try {
      console.log(payload);
      const response = await axiosInstance.get(`/recipes/getFavouriteList?user_id=${payload.user_id}`);
      if (response.data.favList!=undefined) {
        const favList = response.data.favList;
        let favoriteItems =[]
        const requests = favList.map(async (item) => {
          try {
            const itemResponse = await axiosInstance.get(`/recipes/details?id=${item.recipe_id}`);
            // favoriteItems =[...favoriteItems,itemResponse.data.meals]
            favoriteItems.push(itemResponse.data.meals[0])
          } catch (error) {
            console.error('Error fetching item details:', error);
            throw error;
          }
        });
  
       
        await Promise.all(requests);
        console.log(favoriteItems);
        return favoriteItems
      }
      return response
    } catch (error) {
      console.error('Error posting data:', error);
      throw error; 
    }
  };


  
