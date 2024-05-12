import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/user.js';
import { recipeRouter } from './routes/recipes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth",userRouter);
app.use("/recipes",recipeRouter);
const PORT = process.env.PORT || 3001

mongoose.connect(
    "mongodb+srv://kalana:Recipeapp2024@recipes.n8ur4qn.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }

);

app.listen(PORT,()=> console.log("server started"))