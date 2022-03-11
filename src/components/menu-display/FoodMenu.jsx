import '../../sass/pages/food-menu.scss'
import React, {useState } from 'react';
import DisplayMenu from './DisplayMenu';
import Cart from './Cart';
const FoodMenu = () => {
    const [showFoodMenu,setShowFoodMenu] = useState(false)
    const [showDessertsMenu,setShowDessertsMenu] = useState(false)
    const [showDrinksMenu,setShowDrinksMenu] = useState(false)
    const [displayCart,setDisplayCart] = useState(false)
    const [cartIsUpdate, setCartIsUpdate] = useState(false)
    let [cartSumIsUpdate , setCartSumIsUpdate] = useState(false)
   let sum = localStorage.getItem('cartSum')
    
    

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
    function allStorage() {

        let values = [],
            keys = Object.keys(localStorage).filter((key)=>{return key!=='cartSum'}),
            i = keys.length               
        while ( i-- ) {
            values.push( localStorage.getItem(keys[i]) );
        }
        values.filter(val=>val>0)
        values = values.filter(val=>val>0);
        return values.length 
    }
return <div className='container'  >
    {displayCart&&<Cart cartIsUpdate={cartIsUpdate} setCartIsUpdate={setCartIsUpdate} displayCart={displayCart} displayCartHandler={displayCartHandler} setCartSumIsUpdate={setCartSumIsUpdate} sum={sum} allStorage={allStorage}/>}
    <div className='cart-button-background-container'>
     <button className='cart-button' onClick={displayCartHandler}>
                    <svg className='cart-icon-background'> 
                    <use xlinkHref="images/icons/sprite.svg#icon-cart"></use>
                    </svg>
                  </button>
                  <span className='background-button-text'>My Cart</span>
                  <span className='cart-button-background__notifications'>
                      <span className='cart-button-background__inner-text'>{allStorage()}</span>
                      </span>
    </div>
    <div>
    <h1 className='food-menu__title'>Menu </h1>
    <h3 className='food-menu__subtitle'> We offer a wide range of dishes of the highest quality.

All dishes are made from fresh ingredients.
And all this to ensure a great experience </h3>
    <div className='flex-box'>
    <a className='button' onClick={displayFoodHandler} href="#food">
        
        <img src='images/menu/burger.jpg' alt="pasta" className="img-button"/>
        <span className='inner-text'>Food Menu</span>
    </a>
    <a className='button'  href='#drinks' onClick={displayDrinksHandler} >
        <img src='images/menu/scotch.jpg' alt="wine" className="img-button"/>
        <span className='inner-text'>Wine and drinks</span>
    </a>

    <a href='#desserts' className='button' onClick={displayDessertHandler}>
        <img src='images/menu/caramel-cake.jpg' alt="dessert" className="img-button"/>
        <span className='inner-text'>Dessert</span>
    </a>
         <DisplayMenu showFoodMenu= {showFoodMenu} showDessertsMenu={showDessertsMenu} showDrinksMenu={showDrinksMenu} setCartIsUpdate={setCartIsUpdate} cartIsUpdate={cartIsUpdate} setCartSumIsUpdate={setCartSumIsUpdate} cartSumIsUpdate={cartSumIsUpdate} sum={sum}/>
    </div>
    </div>

</div>
}
export default FoodMenu;