import React from 'react';
import DisplayDesserts from './DisplayDesserts';
import DisplayMainFood from './DisplayMainFood';
import DisplayDrinks from './DisplayDrinks';
const DisplayMenu = ({showFoodMenu,showDessertsMenu,showDrinksMenu, setCartIsUpdate , cartIsUpdate, cartSumIsUpdate , setCartSumIsUpdate ,sum}) => {
    return <React.Fragment>
        {showFoodMenu&&<DisplayMainFood setCartIsUpdate={setCartIsUpdate} cartIsUpdate={cartIsUpdate} setCartSumIsUpdate={setCartSumIsUpdate} cartSumIsUpdate={cartSumIsUpdate} sum={sum} />}
        {showDrinksMenu&&<DisplayDrinks setCartIsUpdate={setCartIsUpdate} cartIsUpdate={cartIsUpdate} setCartSumIsUpdate={setCartSumIsUpdate} cartSumIsUpdate={cartSumIsUpdate} sum={sum} />}
        {showDessertsMenu&&<DisplayDesserts setCartIsUpdate={setCartIsUpdate} cartIsUpdate={cartIsUpdate}  setCartSumIsUpdate={setCartSumIsUpdate} cartSumIsUpdate={cartSumIsUpdate} sum={sum}/>}
    </React.Fragment>

}
export default DisplayMenu

