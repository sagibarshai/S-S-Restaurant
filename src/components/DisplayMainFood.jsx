import React from 'react'
import {food} from './Data/allMenu.jsx'
import '../../src/sass/pages/food-menu.scss'
const allFood = food.allFood
const DisplayMainFood = ({id}) => {
        return <React.Fragment>
            {allFood.map((food,indx)=>{
        return(
            <div id="food" key={indx} className='container-menu'>
            <span className='menu-image-name' >{food.name}</span>
            <img src={food.imgSrc} alt="menu food image" className='menu-image'/>
            <span className='menu-image-description' >{food.description}</span>
            <span className='menu-image-price' >{food.price}₪</span>
            <div className='cart-button-container'>
            <button className='cart-button' onClick={()=>{food.cart++
            console.log(food , food.cart)}}>
            <svg className='cart-icon'> 
            <use xlinkHref="images/icons/sprite.svg#icon-cart-plus"></use>
            </svg>
          </button>
          <span className='button'>Add To Cart</span>
            </div>
            
        </div>
    )
})}
        </React.Fragment>
}
export default DisplayMainFood