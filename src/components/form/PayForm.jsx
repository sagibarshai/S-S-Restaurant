import react, {useState,useRef} from "react";
import '../../sass/components/form.scss'
import emailjs from 'emailjs-com'
const PayForm = ({sum ,formIsValid , setFormIsValid }) => { 
    const [ta, setTa] = useState(false)
    const [pickFromReasturant, setPickFromReasturant] = useState(false)
    const [nameIsValid , setNameIsValid] = useState(false)
    const [addresIsValid , setAddresIsValid] = useState(false)
    const [cardIsValid , setCardIsValid] = useState(false)
    const [expiryDateIsValid , setExpiryDateIsValid] = useState(false)
    const [cvcIsVaild , setCvcIsVaild] = useState(false)
    let firstNameInput = useRef(null)
    let addresInput = useRef(null)
    let cardInput = useRef(null)
    let expiryDate = useRef(null)
    let cvc = useRef(null)

    function getRandomString(length) {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }
    
    function stringContainsNumber(_string) {
        return /\d/.test(_string);
    }
    const firstNameHandler = () => {
        let firstName = firstNameInput.current.value
        if(stringContainsNumber(firstName)&&firstName.length <2) {alert('first name field Shoud Not contain any numbers and Shoud Be at least 2 charecters')
    setNameIsValid(()=>false)}
         else if(stringContainsNumber(firstName)){ alert(`first name field Shoud Not contain any numbers`)
          setNameIsValid(()=>false)}
          else if (firstName.length <2) {alert('first name field Shoud be at least 2 charecters')
          setNameIsValid(()=>false) }
          else setNameIsValid(()=>true)
    }
    const addresHandler = () => {
        let addres = addresInput.current.value
        if(addres.length <6 ) { alert(`Addres Field Shoud Be at least 6 charecters`)
    setAddresIsValid(()=>false)}
    else setAddresIsValid(()=>true)
    }
    const cardHandler = () => {
        let card = cardInput.current.value
        if(!isNaN(card)) {alert('Card field must contain only numbers')
        setCardIsValid(()=>false)
    }
        else if(card.length < 16) {alert('Card Field must be exact 16 digits')
    setCardIsValid(()=>false)
}
    else setCardIsValid(()=>true)
        }
       const expiryDateHandler = () => {
        let expiry = expiryDate.current.value
        if(expiry.length === 0){ setExpiryDateIsValid(()=> false)
            alert(`Expiry Date must be enterd `)
       }
        else setExpiryDateIsValid(()=>true)
       }
       const cvcHandler = () => {
        let Cvc = cvc.current.value
        if(Cvc.length < 3) {
            alert(`cvc field must contain exact 3 numbers`)
            setCvcIsVaild(()=>false)
        }
        else if (isNaN(Cvc)){alert('cvc must contain only numbers')
    setCvcIsVaild(()=>false)
}
        else setCvcIsVaild(()=>true)
       }
    const displayTaChoiseHandler = ()=>{ 
        setPickFromReasturant(()=>false)
        setTa(()=>true)
    }
    const displayPickUpFromRestChoiseHandler = ()=>{ 
        setPickFromReasturant(()=>true)
        setTa(()=>false)
    }
    // const sendEmail = (event) => {
    //     console.log(event)
    //        emailjs.sendForm('service_19jeicj', 'template_qtt9ugk',event.target, 'YzhgHt81K6x2IUCjp')
    //          .then((result) => {
    //              console.log(result.text);
    //          }, (error) => {
    //              console.log(error.text);
    //          });
    //    }
    const submitFormHandler = (event) => {
        event.preventDefault()
       if(!ta && !pickFromReasturant) alert(`pick one option: Pick Up or TA`)
       else{
           firstNameHandler()
           ta && !pickFromReasturant && addresHandler()
           cardHandler()
           expiryDateHandler()
           cvcHandler()
           if(( (ta &&!pickFromReasturant) && nameIsValid  &&addresIsValid &&cardIsValid && expiryDateIsValid && cvcIsVaild) || ((!ta &&pickFromReasturant) && nameIsValid &&cardIsValid && expiryDateIsValid && cvcIsVaild)) {
               emailjs.sendForm('service_19jeicj', 'template_qtt9ugk',event.target, 'YzhgHt81K6x2IUCjp')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                  if(error.text !== 'ok') alert(`Email is Not Valid or email is Not Exists`)
                });
            setFormIsValid(true)
            localStorage.clear()
        }
       
    } 
}
return <form className="form__container" onSubmit={submitFormHandler}>
    <div className="form__my-order">

{ !formIsValid && <div className="form__content">
 <input className="form__input-radio" type="radio" name="choise" id="TA" onClick={displayTaChoiseHandler}/>
    <label  className="form__label-radio" htmlFor="TA">TA</label>
    <input className="form__input-radio" type="radio" name="choise" id="restaurant" onClick={displayPickUpFromRestChoiseHandler}/>
    <label  className="form__label-radio" htmlFor="restaurant">Pick Up</label>
    {ta && !pickFromReasturant && <div>
         <h2 className="form__welcome">Welcome to TA order</h2> 
    <label className="form__label" htmlFor="first-name" name="name" >First Name</label>
    <input className="form__input" id="first-name"  placeholder="First Name" ref={firstNameInput} name="name" />
         <label className="form__label" htmlFor="addres" >Addres</label>
         <input className="form__input" type="text" placeholder="Fill Your Addres" id="addres" ref={addresInput} name="addres"/>
    </div>}
    {pickFromReasturant && !ta && <div>
        <label className="form__label" htmlFor="first-name">First Name</label>
    <input className="form__input" type="text" id="first-name"  placeholder="First Name" ref={firstNameInput} name="name"/>
        </div>
        }
        <label className="form__label" htmlFor="email" >Email</label>
        <input className="form__input" type="email" id="email" placeholder="enter your email" name="email" required/>
    <label className="form__label" htmlFor="card-number" >Card Number</label>
    <input className="form__input" type="tel" id="card-number" placeholder="4580 **** **** ****" maxLength="19"  ref={cardInput} onChange={(e) => {
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()}}/>
    <label className="form__label" htmlFor="expiry-date">Expiry Date</label>
    <input className="form__input" type="month" id="expiry-date" ref={expiryDate} />
    <label className="form__label" htmlFor="cvc">CVC</label>
    <input className="form__input" type="password" id="cvc"  placeholder="***" maxLength="3" ref={cvc}/>
    <input type="hidden" value={getRandomString(10)} name="id"/>
    <input type="hidden" value={sum} name="sum"/>
    <b className="cart-popup__total-sum">Amount to pay : {sum}₪</b>
    <br/>
    <br/>
    <br/>
    <input type="submit" value="submit" className="cart-popup__button-pay"/>
</div>} 

{ firstNameInput.current !==null && formIsValid && <div className="form__recipt-container" >
  <p className="form__recipt-text"> hello {firstNameInput.current.value}  </p>
        {addresInput.current !==null && ta ? <p className="form__recipt-text">your order will rich to {addresInput.current.value} in 30min</p> : ''} <br/>
        <p className="form__recipt-text"> we will send you an Email with id order for identify. <br/>
        we thankful for your buy <br/> <br/> S & S Team ✌️ </p>
        </div>}
    </div>
    
</form> 
}
export default PayForm;