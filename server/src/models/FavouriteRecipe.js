import mongoose from 'mongoose'

const FavouriteRecipeSchema = new mongoose.Schema({
    user_id :{type:String, required: true},
    recipe_id:{type:String,required: true},
    
})

export const FavouriteRecipeModel =mongoose.model("favrecipes",FavouriteRecipeSchema)