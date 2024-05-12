"use client";

import { Card, Tabs } from "flowbite-react";
import { CiHeart } from "react-icons/ci";
import { useState,useEffect } from "react";
import {getlistByCategory,addItemToFav} from './../../utils/apis/recipeApi.js'

export default function Component() {
    // Specify imgSrc and imgAlt for all cards

    const [recipeArray,setRecipeArray]=useState<any>([])
    const [category,setCategory]=useState("Pork")
    const categories = ['Pork','Beef','Chicken','Lamb','Pasta']

    const addItemToFavourite = async (a:any) => {
        
        const user = localStorage.getItem('user')
        const payload ={
            user_id:user,
            recipe_id:a
        }
        const response = await addItemToFav(payload)
        console.log(response);
        alert(response.data.message)
        
        
    };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = categories.map(category => getlistByCategory(category));
                const recipes = await Promise.all(promises);
                console.log(recipes);
                
                setRecipeArray(recipes);
            } catch (error) {
              // Handle error if needed
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
         
    },[]);
    const imgSrc = "soup.jpeg";
    const imgAlt = "Meaningful alt text for an image that is not purely decorative";

    return (
        <>
            <main className="bg-stone-200 h-screen p-8">
                {/* <div className="bg-pink-600 rounded-lg p-4"> */}

                <Tabs aria-label="Pills" style="pills" >
                    <Tabs.Item active title="Pork" className="mx-4" >
                         
                        {/* <div className="bg-white"> */}
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {recipeArray.length !=0 ? (
                            recipeArray[0].length!=0 ? (
                            <div className="flex flex-wrap justify-center">
                                
                                {recipeArray[0].map((item:any, index:any) => (
                                    <div key={index} className="mx-2 mb-4">
                                        <Card className="max-w-sm" imgSrc={item.strMealThumb} imgAlt={imgAlt} />
                                        <div className="flex">
                                            <p className="text-black">{categories[0]}</p>
                                            <CiHeart className="w-20 h-6 text-pink-600" onClick={()=>addItemToFavourite(item.idMeal)} />
                                        </div>
                                        <p className="text-black font-bold">{item.strMeal}</p>
                                    </div>
                                ))}
                            </div>):null) :null}
                        </p>
                        {/* </div> */}
                    </Tabs.Item>
                    <Tabs.Item title="Beef" className="mx-4" >
                        <p className="text-sm text-gray-500 dark:text-gray-400" >
                        {recipeArray.length !=0 ? (
                        recipeArray[1].length!=0 ? (
                            <div className="flex flex-wrap justify-center">
                                
                                {recipeArray[1].map((item:any, index:any) => (
                                    <div key={index} className="mx-2 mb-4">
                                        <Card className="max-w-sm" imgSrc={item.strMealThumb} imgAlt={imgAlt} />
                                        <div className="flex">
                                            <p className="text-black">{categories[1]}</p>
                                            <CiHeart className="w-20 h-6 text-pink-600" onClick={()=>addItemToFavourite(item.idMeal)}/>
                                        </div>
                                        <p className="text-black font-bold">{item.strMeal}</p>
                                    </div>
                                ))}
                            </div>):null):null}
                        </p>
                    </Tabs.Item>
                    <Tabs.Item title="Chicken" className="mx-4" >
                        <p className="text-sm text-gray-500 dark:text-gray-400" >
                        {recipeArray.length !=0 ? (
                        recipeArray[2].length!=0 ? (
                            <div className="flex flex-wrap justify-center">
                                
                                {recipeArray[2].map((item:any, index:any) => (
                                    <div key={index} className="mx-2 mb-4">
                                        <Card className="max-w-sm" imgSrc={item.strMealThumb} imgAlt={imgAlt} />
                                        <div className="flex">
                                            <p className="text-black">{categories[2]}</p>
                                            <CiHeart className="w-20 h-6 text-pink-600" onClick={()=>addItemToFavourite(item.idMeal)}/>
                                        </div>
                                        <p className="text-black font-bold">{item.strMeal}</p>
                                    </div>
                                ))}
                            </div>):null):null}
                        </p>
                    </Tabs.Item>
                    <Tabs.Item title="Lamb" className="mx-4" >
                        <p className="text-sm text-gray-500 dark:text-gray-400" >
                        {recipeArray.length !=0 ? (
                        recipeArray[3].length!=0 ? (
                            <div className="flex flex-wrap justify-center">
                                
                                {recipeArray[3].map((item:any, index:any) => (
                                    <div key={index} className="mx-2 mb-4">
                                        <Card className="max-w-sm" imgSrc={item.strMealThumb} imgAlt={imgAlt} />
                                        <div className="flex">
                                            <p className="text-black">{categories[3]}</p>
                                            <CiHeart className="w-20 h-6 text-pink-600" onClick={()=>addItemToFavourite(item.idMeal)}/>
                                        </div>
                                        <p className="text-black font-bold">{item.strMeal}</p>
                                    </div>
                                ))}
                            </div>):null):null}
                        </p>
                    </Tabs.Item>
                    <Tabs.Item title="Pasta" className="mx-4" >
                        <p className="text-sm text-gray-500 dark:text-gray-400" >
                        {recipeArray.length !=0 ? (
                        recipeArray[4].length!=0 ? (
                            <div className="flex flex-wrap justify-center">
                                
                                {recipeArray[4].map((item:any, index:any) => (
                                    <div key={index} className="mx-2 mb-4">
                                        <Card className="max-w-sm" imgSrc={item.strMealThumb} imgAlt={imgAlt} />
                                        <div className="flex">
                                            <p className="text-black">{categories[4]}</p>
                                            <CiHeart className="w-20 h-6 text-pink-600" onClick={()=>addItemToFavourite(item.idMeal)}/>
                                        </div>
                                        <p className="text-black font-bold">{item.strMeal}</p>
                                    </div>
                                ))}
                            </div>):null):null}
                        </p>
                    </Tabs.Item>
                </Tabs>
                {/* </div> */}


            </main>
        </>
    );
}