import { food } from './../Data/allMenu';
import '../../sass/pages/menu.scss'
import React, { useState } from 'react';
const FoodMenu = () => {
    const [showFoodMenu,setShowFoodMenu] = useState(false)
    const [showDessertsMenu,setShowDessertsMenu] = useState(false)
    const allFood = food.allFood
    const desserts = food.desserts
    const displayFoodHandler = () => {
        setShowFoodMenu(()=>!showFoodMenu)
    }
    const displayDessertHandler = () => {
        setShowDessertsMenu(()=>!showDessertsMenu)
    }
    const dispalyFoodMenu = () => {
        return(

            allFood.map((food)=>{
                return(
                    <div className='container-menu'>
                    <span className='menu-image-name' >{food.name}</span>
                    <img src={food.imgSrc} alt="menu food image" className='menu-image'/>
                    <span className='menu-image-description' >{food.description}</span>
                    <span className='menu-image-price' >{food.price}₪</span>
                </div>
            )
        })
        )
    }
    const dispalyDessertMenu = () => {
        return(

            desserts.map((dessert)=>{
                return(
                    <div className='container-menu'>
                    <span className='menu-image-name' >{dessert.name}</span>
                    <img src={dessert.imgSrc} alt="menu food image" className='menu-image'/>
                    <span className='menu-image-description' >{dessert.description}</span>
                    <span className='menu-image-price' >{dessert.price}₪</span>
                </div>
            )
        })
        )
    }
return <div className='container'>
    <h1 className='food-menu__title'>Menu </h1>
    <h3 className='food-menu__subtitle'> We offer a wide range of dishes of the highest quality.

All dishes are made from fresh ingredients.
And all this to ensure a great experience </h3>
    <div className='flex-box'>

    <button className='button' onClick={displayFoodHandler}>
        
        <img src='images/menu/alfredo-pasta.jpg' alt="pasta" className="img-button"/>
        <span className='inner-text'>Food Menu</span>
    </button>
    <button className='button' >
        <img src='images/menu/wine.jpg' alt="wine" className="img-button"/>
        <span className='inner-text'>Wine and drinks</span>
    </button>

    <button className='button' onClick={displayDessertHandler}>
        <img src='images/menu/macaroon.jpg' alt="dessert" className="img-button"/>
        <span className='inner-text'>Dessert</span>
    </button>
   
        {showFoodMenu&&dispalyFoodMenu()}
        {showDessertsMenu&&dispalyDessertMenu()}
    </div>

</div>
}
export default FoodMenu;