import React from 'react'
import {food} from '../Data/allMenu.jsx'
import '../../sass/pages/food-menu.scss'
const desserts = food.desserts
const DisplayDesserts = ({setCartIsUpdate,cartIsUpdate,setCartSumIsUpdate ,sum  }) => {
    return <React.Fragment>
    {desserts.map((dessert,indx)=>{
        let dessertCart = localStorage.getItem(dessert.name)
return(
    <div id="desserts" key={indx} className='container-menu'>
    <span className='menu-image-name' >{dessert.name}</span>
    <img src={dessert.imgSrc} alt="menu food " className='menu-image'/>
    <span className='menu-image-description' >{dessert.description}</span>
    <span className='menu-image-price' >{dessert.price}₪</span>
    <div className='cart-button-container'>
    <button className='cart-button' onClick={() => {
                dessertCart++
        localStorage.setItem(`${dessert.name}`, dessertCart)
        setCartIsUpdate(()=>!cartIsUpdate)
        sum = Number(sum)
        sum +=dessert.price
        localStorage.setItem('cartSum', sum)
        setCartSumIsUpdate(()=>true)
            }}>
    <svg className='cart-icon'> 
    <use xlinkHref="images/icons/sprite.svg#icon-cart-plus"></use>
    </svg>
  </button>
  <span className='button-text'>Add To Cart</span>
    </div>
    
</div>
)
})}
</React.Fragment>
}
export default DisplayDesserts;