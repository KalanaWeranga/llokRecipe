import express from 'express'
import { getRecipiesByCategory,getFullDetailsByID,setRecipeAsFavourite,getFavouriteList,deleteFavouriteItem} from '../controllers/recipes.js'

const router = express.Router()

router.get("/list",getRecipiesByCategory)
router.get("/details",getFullDetailsByID)
router.post("/addToFavourite",setRecipeAsFavourite)
router.get("/getFavouriteList",getFavouriteList)
router.delete("/removeItem",deleteFavouriteItem)


export {router as recipeRouter}