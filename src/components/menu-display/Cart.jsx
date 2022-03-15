import React, {useState} from "react";
import { food } from "../Data/allMenu";
import PayForm from "../form/PayForm";
import '../../sass/components/cart.scss';
const allFood = food.allFood
const desserts = food.desserts
const drinks = food.drinks
const Cart = ({cartIsUpdate , setCartIsUpdate , displayCart , displayCartHandler , setCartSumIsUpdate ,sum,allStorage ,setFormIsValid , formIsValid}) => {
let [moveToPay , setMoveToPay] = useState(false)

const moveToPayHandler = () => {
    setMoveToPay(()=>true)
}
const backToEditHandler = () => {
    setMoveToPay(()=>false)
}



return <div>
{<div className="cart-popup__container">
{allStorage() <= 0 && !formIsValid&& <p className="cart-popup__empty-cart">No Items In Cart!</p>}
{ displayCart && <button className="cart-popup__exit-button" onClick={displayCartHandler}>X</button>}
{!moveToPay&& <div>
{allFood.map((food,indx) => {
    if(localStorage.getItem(food.name) > 0) {
          let foodCart = localStorage.getItem(food.name)
        return <div className='cart-item cart-item__content' key={indx}>
            <div className="cart-item__text">
        <h2 className="cart-item__name">{food.name}</h2>
        <p className="cart-item__amount">amount : {foodCart}</p>
        <p className="cart-item__total"> {foodCart * food.price}₪</p>
        <button className="cart-item__button" onClick = {() => {
            foodCart++
            localStorage.setItem(food.name,foodCart)
            setCartIsUpdate(()=>!cartIsUpdate)
            sum = Number(sum)
            sum+= food.price
            localStorage.setItem('cartSum', sum)
            setCartSumIsUpdate(()=>true)
            


}}>+</button>
        <button className="cart-item__button" onClick={()=> {
             if(foodCart <= 0) {
                foodCart = 0
                }
            else {
           foodCart--
           localStorage.setItem(food.name, foodCart)
           setCartIsUpdate(()=>!cartIsUpdate)
           sum = Number(sum)
           sum-= food.price
           localStorage.setItem('cartSum', sum)
           setCartSumIsUpdate(()=>true)

        }
        }}>-</button>
        </div>
                <img className="cart-item__image"  src={food.imgSrc} />
                <br/>
                <br/>
                    <hr/>
                <br/>
    </div> 

    }
})  }

{desserts.map((dessert,indx) => {
    if(localStorage.getItem(dessert.name) > 0) {
        let dessertCart = localStorage.getItem(dessert.name)

        return <div className='cart-item cart-item__content' key={indx}>
            <div className="cart-item__text">
        <h2 className="cart-item__name" >{dessert.name} </h2>
        <p className="cart-item__amount">amount : {dessertCart}</p>
        <p className="cart-item__total">{dessertCart * dessert.price}₪</p>
        <button className="cart-item__button" onClick = {() => {
            dessertCart++
            localStorage.setItem(dessert.name,dessertCart)
            setCartIsUpdate(()=>!cartIsUpdate)
            sum = Number(sum)
            sum+= dessert.price
            localStorage.setItem('cartSum', sum)
            
            setCartSumIsUpdate(()=>true)
        }}>+</button>
        <button className="cart-item__button" onClick={()=> {
            if(dessertCart <=0) {
                dessertCart = 0
            }
            else {
                dessertCart--
                localStorage.setItem(dessert.name, dessertCart)
                sum = Number(sum)
                sum-= dessert.price
                localStorage.setItem('cartSum', sum)
                setCartIsUpdate(()=>!cartIsUpdate)
            }
        

        }}>-</button>
        </div>
        <img className="cart-item__image"  src={dessert.imgSrc} />
                <br/>
                <br/>
                 <hr/>
                <br/>
    </div> 
    }
})
} 
{drinks.map((drink,indx) => {
        if(localStorage.getItem(drink.name) > 0) {
            let drinkCart = localStorage.getItem(drink.name)
            return <div className='cart-item cart-item__content' key={indx}>
                <div className="cart-item__text">
        <h2 className="cart-item__name">{drink.name}</h2>
        <p className="cart-item__amount">amount : {drinkCart} </p>
        <p className="cart-item__total">{drinkCart * drink.price}₪</p>
        <button className="cart-item__button" onClick = {() => {
                drinkCart++
                localStorage.setItem(drink.name,drinkCart)
                setCartIsUpdate(()=>!cartIsUpdate)
                sum = Number(sum)
                sum+= drink.price
                localStorage.setItem('cartSum', sum)
                setCartSumIsUpdate(()=>true)

        }}>+</button>
        <button className="cart-item__button" onClick={()=> {
            if(drinkCart <= 0) {
                drinkCart = 0
            }
            else {
                drinkCart--
                localStorage.setItem(drink.name, drinkCart)
                setCartIsUpdate(()=>!cartIsUpdate)
                sum = Number(sum)
                sum-= drink.price
                localStorage.setItem('cartSum', sum)
                setCartSumIsUpdate(()=>true)
            }

        }}>-</button>
        </div>
                <img className="cart-item__image" src={drink.imgSrc} alt="food" />
                <br/>
                <br/>
                <hr/>
                <br/>
    </div> 
    }

})
} 

{sum > 0 && <div>
    <b className="cart-popup__total-sum">Amount to pay : {sum}₪</b>
<button className="cart-popup__button-pay" onClick={moveToPayHandler}>Pay Now</button>
</div>
}
</div>}
{moveToPay&& <div>
   {!formIsValid&& <button className="cart-popup__edit-button-left-arrow" onClick={backToEditHandler}> &#x2190;</button>}
    <br/>
    <br/>
    <br/>
<PayForm sum={sum} formIsValid={formIsValid} setFormIsValid={setFormIsValid} setMoveToPay={setMoveToPay} setCartIsUpdate={setCartIsUpdate} />
    </div>}
</div>  
}
{/* {formIsValid && window.location.reload()} */}
</div>  

}
export default Cart;