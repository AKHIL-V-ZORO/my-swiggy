import React, { useState } from 'react'
import './SearchByCategory.scss'
import Modal from '../modal/Modal'

const SearchByCategory = ({ searchDish }) => {

    const [openModal, setOpenModal] = useState(false)
    const [dish, setDish] = useState({})


   function popup(item){
    setDish(item)   
    setOpenModal(true)
    }
    return (
        <>
            {
                searchDish?.map((item) => (
                    
                        <div key={item.idMeal} className='search--category--dish'>
                            <div className="search--category--card">
                                <img src={item.strMealThumb} alt="image" />
                                <span>{item.strMeal}</span>
                            </div>
                            <button onClick={()=>{popup(item)}}>click</button>
                        </div>
                   
                ))
            }

            <Modal open={openModal} onClose={()=>setOpenModal(false)} dish={dish}/>
            
        </>
    )
}

export default SearchByCategory
