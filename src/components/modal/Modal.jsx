import React from 'react'
import './Modal.scss'
import { Link } from 'react-router-dom'

const Modal = ({ open, dish, onClose }) => {

  if (!open) return null
  return (
    <div className='modal--overlay'>
      <div className="modal--container">
        <img src={dish.strMealThumb} alt="" />
        <div className="modal--right">
          <p onClick={onClose} className="modal--close">&times;</p>
          <div className="modal--content">
            <h3>{dish.strMeal}</h3>
            <h4>Ingredients</h4>
            <p>{dish.strIngredient1}</p>
            <p>{dish.strIngredient2}</p>
            <p>{dish.strIngredient3}</p>
          </div>
          <div className="modal--buttons">
            <button className='modal--primery--btn'>
              <Link to='/cart' className='modal--primery--btn-link'>Add to cart</Link>
            </button>
            <button onClick={onClose} className='modal--secondary--btn'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
