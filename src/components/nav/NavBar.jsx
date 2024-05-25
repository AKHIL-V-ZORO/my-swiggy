import React from 'react'
import { useNavigate,} from 'react-router-dom'
import './NavBar.scss'


const NavBar = () => {
 const navigate= useNavigate()
  return (
    <div className='nav'>
       <div className='nav--logo'>F<span>OO</span>diee</div>
       <div className='nav--list'>
           <ul >
               <li onClick={()=>navigate('/')}>HOME</li>
               <button onClick={()=>navigate('/cart')} className='nav--checkout'>CHECKOUT</button>
           </ul>
       </div>
    </div>
  )
}

export default NavBar