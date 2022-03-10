import React from 'react'
import {food} from '../Data/allMenu.jsx'
import '../../sass/pages/food-menu.scss'
const allFood = food.allFood
const DisplayMainFood = ({setCartIsUpdate,cartIsUpdate, setCartSumIsUpdate ,sum }) => {

      return  <React.Fragment> 
            {allFood.map((food,indx)=>{
            let foodCart = localStorage.getItem(food.name)
        return(
            <div id="food" key={indx} className='container-menu'>
            <span className='menu-image-name' >{food.name}</span>
            <img src={food.imgSrc} alt="menu food " className='menu-image'/>
            <span className='menu-image-description' >{food.description}</span>
            <span className='menu-image-price' >{food.price}₪</span>
            <div className='cart-button-container'>
            <button className='cart-button' onClick={() => {
            foodCart++
            localStorage.setItem(`${food.name}`, foodCart)
            setCartIsUpdate(()=>!cartIsUpdate)
            sum = Number(sum)
            sum+= food.price
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

export default DisplayMainFood