import asyncHandler from "express-async-handler";
import axios from 'axios'
import { FavouriteRecipeModel } from "../models/FavouriteRecipe.js";

const getRecipiesByCategory = asyncHandler(async(req,res)=>{
    const category = req.query.category

    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const meals = response.data.meals;
        res.status(200).json({ meals });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

const getFullDetailsByID = asyncHandler(async(req,res)=>{
    const recipe_id = req.query.id

    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe_id}`);
        const meals = response.data.meals;
        res.status(200).json({ meals });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

const setRecipeAsFavourite = asyncHandler(async(req,res)=>{
    const {user_id,recipe_id} = req.body
    

    const isfavrep = await FavouriteRecipeModel.findOne({user_id,recipe_id}) 

    if (isfavrep) {
        return res.json({message:'This Recipe Alredy Added To The Favourite List'})
    }

    const newFavRecipe = new FavouriteRecipeModel({user_id,recipe_id})

    await newFavRecipe.save()

    res.json({message:'recipe added to favourite list successfully'})

})

const getFavouriteList = asyncHandler(async(req,res)=>{
    const user_id = req.query.user_id

    const favList = await FavouriteRecipeModel.find({user_id:user_id}) 

    if (!favList) {
        return res.json({message:'No Favourite List Yet'})
    }

    res.json({favList})

})

const deleteFavouriteItem = asyncHandler(async(req,res)=>{
    
    const {user_id,recipe_id} = req.query
    
     await FavouriteRecipeModel.deleteOne({user_id:user_id,recipe_id:recipe_id}) 
    
    res.json({message: 'Remove Item Successfully'})

})

export {getRecipiesByCategory,getFullDetailsByID,setRecipeAsFavourite,getFavouriteList, deleteFavouriteItem}