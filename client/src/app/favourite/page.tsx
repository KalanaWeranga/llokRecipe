"use client";

import { Card, Tabs } from "flowbite-react";
import { FaHeart } from "react-icons/fa"
import { CiHeart } from "react-icons/ci";
import { useState, useEffect } from "react";
import { getItemInFav, removeItemToFav } from './../../utils/apis/recipeApi.js'

export default function Component() {
    // Specify imgSrc and imgAlt for all cards

    const [recipeArray, setRecipeArray] = useState<any>([])
    const [itemRemove,setItemRemove]=useState(false)

    const removeItemFromFavourite = async (a: any) => {
        
        const user = localStorage.getItem('user')
        const payload = {
            user_id: user,
            recipe_id: a
        }
        console.log("pay",payload);
        
        const response = await removeItemToFav(payload)
        console.log(response);
        alert(response.data.message)
        if (itemRemove) {
            setItemRemove(false)
        }else{
            setItemRemove(true)
        }
        

    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = localStorage.getItem('user')
                const payload = {
                    user_id: user,

                }
                const recipes = await getItemInFav(payload)

                setRecipeArray(recipes);
            } catch (error) {
                // Handle error if needed
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [itemRemove]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = localStorage.getItem('user')
                const payload = {
                    user_id: user,

                }
                const recipes = await getItemInFav(payload)

                setRecipeArray(recipes);
            } catch (error) {
                // Handle error if needed
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);
    const imgSrc = "soup.jpeg";
    const imgAlt = "Meaningful alt text for an image that is not purely decorative";

    return (
        <>
            <main className="bg-stone-200 h-screen p-8">
                {/* <div className="bg-pink-600 rounded-lg p-4"> */}



                {/* <div className="bg-white"> */}
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {recipeArray.length != 0 ? (
                        
                            <div className="flex flex-wrap justify-center">

                                {recipeArray.map((item: any, index: any) => (
                                    <div key={index} className="mx-2 mb-4">
                                        <Card className="max-w-sm" imgSrc={item.strMealThumb} imgAlt={imgAlt} />
                                        <div className="flex">
                                            <p className="text-black">{item.strCategory}</p>
                                            <FaHeart className="w-20 h-6 text-pink-600" onClick={()=>removeItemFromFavourite(item.idMeal)} />
                                        </div>
                                        <p className="text-black font-bold">{item.strMeal}</p>
                                    </div>
                                ))}
                            </div>)  : null}
                </p>


            </main>
        </>
    );
}