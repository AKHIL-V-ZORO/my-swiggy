import React, { useEffect, useState } from 'react'
import './FilteredDishes.scss'
import axios from '../../axios/axios'
import SearchByCategory from '../searchByCategory/SearchByCategory'

const FilteredDishes = () => {
    const [categories, setCategories] = useState([])
    const [searchDish, setSearchDish] = useState([])

    const getAllCategories = async () => {
        try {
            await axios.get("/categories.php").then((response) => { setCategories(response.data.categories) })
            .catch(console.log("error response"))
        } catch (error) {
            console.log("axios--error")
        }
    }

    async function searchByCategory(category){
    await axios.get(`/search.php?s=${category}`).then(response=>{setSearchDish(response.data.meals)})
      
    }
    useEffect(() => {
        getAllCategories()

    }, [])
    console.log(searchDish)
    return (
        <div className='filtered'>
            <div className="filtered--content">
                <h2 className='filtered--title'>Choose your Dishes</h2>
                <p>Here we provide different verieties of food ,especially veg and non-veg items, also the desserts are unique flavour with its own class.we provide special offers for new customers and also we provide diet food packages,also home delevery services are available you can choose from here...</p>
            </div>
            <div className="filtered--dishes">
                <ul>
                    {
                        categories?.map((category, index) => (
                            <li key={index} onClick={()=>searchByCategory(category.strCategory)}>{category.strCategory}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="search--dish">
                <SearchByCategory searchDish={searchDish} />
            </div>
        </div>
    )
}

export default FilteredDishes
