import { food } from './../Data/allMenu';
import '../../sass/pages/food-menu.scss'
import React, {useState } from 'react';
import DisplayMainFood from '../DisplayMainFood';
import DisplayDesserts from './../DisplayDesserts';
import DisplayDrinks from './../DisplayDrinks';
const FoodMenu = () => {
    const [showFoodMenu,setShowFoodMenu] = useState(false)
    const [showDessertsMenu,setShowDessertsMenu] = useState(false)
    const [showDrinksMenu,setShowDrinksMenu] = useState(false)
    const [displayCart,setDisplayCart] = useState(false)
    const allFood = food.allFood
    const displayFoodHandler = () => {
        setShowFoodMenu(()=>!showFoodMenu)
    }
    const displayDessertHandler = () => {
        setShowDessertsMenu(()=>!showDessertsMenu)
    }
    const displayDrinksHandler = () => {
        setShowDrinksMenu(()=>!showDrinksMenu)
    }
    const displayCartHandler = () => {
        setDisplayCart(()=>!displayCart)

        
    }
return <div className='container'  >
    {displayCart&&<div className="cart-popup-container">
        {allFood.map((food,indx) => {
            if(food.cart >0) {
                return <div className='content' key={indx}>
                <h1>{food.name}</h1>
                <h1>{food.price*food.cart}</h1>
                <h1>{food.cart}</h1>
            </div>
            }
    
        })}
        
    </div>}
    <div className='cart-button-background-container'>
     <button className='cart-button' onClick={displayCartHandler}>
                    <svg className='cart-icon-background'> 
                    <use xlinkHref="images/icons/sprite.svg#icon-cart"></use>
                    </svg>
                  </button>
                  <span className='background-button-text'>My Cart</span>
    </div>
    <div className={displayCart? 'blur' : ''}>

    <h1 className='food-menu__title'>Menu </h1>
    <h3 className='food-menu__subtitle'> We offer a wide range of dishes of the highest quality.

All dishes are made from fresh ingredients.
And all this to ensure a great experience </h3>
    <div className='flex-box'>
    <a className='button' onClick={displayFoodHandler} href="#food">
        
        <img src='images/menu/alfredo-pasta.jpg' alt="pasta" className="img-button"/>
        <span className='inner-text'>Food Menu</span>
    </a>
    <a className='button'  href='#drinks' onClick={displayDrinksHandler} >
        <img src='images/menu/wine.jpg' alt="wine" className="img-button"/>
        <span className='inner-text'>Wine and drinks</span>
    </a>

    <a href='#desserts' className='button' onClick={displayDessertHandler}>
        <img src='images/menu/macaroon.jpg' alt="dessert" className="img-button"/>
        <span className='inner-text'>Dessert</span>
    </a>
        {showFoodMenu&&<DisplayMainFood/>}        
        {showDessertsMenu&&<DisplayDesserts/>}
        {showDrinksMenu&&<DisplayDrinks/>}        
    </div>
    </div>

</div>
}
export default FoodMenu;