import React from 'react'
import {food} from './Data/allMenu.jsx'
import '../../src/sass/pages/food-menu.scss'
const drinks = food.drinks
const DisplayDrinks = () => {
    return <React.Fragment>
    {drinks.map((drink,indx)=>{
return(
    <div id="drinks" key={indx} className='container-menu'>
    <span className='menu-image-name' >{drink.name}</span>
    <img src={drink.imgSrc} alt="menu food image" className='menu-image'/>
    <span className='menu-image-description' >{drink.description}</span>
    <span className='menu-image-price' >{drink.price}₪</span>
    <div className='cart-button-container'>
    <button className='cart-button'>
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
export default DisplayDrinks;