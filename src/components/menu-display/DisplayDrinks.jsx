import React from 'react'
import {food} from '../Data/allMenu.jsx'
import '../../sass/pages/food-menu.scss'
const drinks = food.drinks
const DisplayDrinks = ({setCartIsUpdate , cartIsUpdate ,setCartSumIsUpdate ,sum }) => {
    return <React.Fragment>
    {drinks.map((drink,indx)=>{
        let drinkCart = localStorage.getItem(drink.name)
return(
    <div id="drinks" key={indx} className='container-menu'>
    <span className='menu-image-name' >{drink.name}</span>
    <img src={drink.imgSrc} alt="menu food" className='menu-image'/>
    <span className='menu-image-description' >{drink.description}</span>
    <span className='menu-image-price' >{drink.price}₪</span>
    <div className='cart-button-container'>
    <button className='cart-button' onClick={() => {
                drinkCart++
        localStorage.setItem(`${drink.name}`, drinkCart)
        setCartIsUpdate(()=>!cartIsUpdate)
        sum = Number(sum)
            sum+= drink.price
            localStorage.setItem('cartSum', sum)
            setCartSumIsUpdate(()=>true)

            }}>
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