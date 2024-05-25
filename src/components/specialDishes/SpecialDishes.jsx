import React from 'react'
import './SpecialDishes.css'

const SpecialDishes = ({ specialMenu }) => {
    const maximumDishes=9;
    
    return (
       <>
        {
            specialMenu?.map((item, index) => (
                index<=maximumDishes?
                <div key={index} className='special--dishes'>
                    <div className="special--dishes--overlay"></div>
                    <img src={item.strMealThumb} alt="image" />
                    <h3 className='special--dishes--name'>{item.strMeal}</h3>
                </div>:null
            ))
        }
       </>
    )
}

export default SpecialDishes
