import react, {useState} from "react";
const PayForm = () => {
    const [ta, setTa] = useState(false)
    const [pickFromReasturant, setPickFromReasturant] = useState(false)
return <div className="form__container">
<div className="form__content">
    <label className="form__label" for="first-name">First Name</label>
    <input className="form__input" type="text" id="first-name" />
    <label for="TA">TA</label>
    <input className="form__input-radio" type="radio" name="choise" id="TA" onClick={()=>setTa(()=>!ta)}/>
    <label for="restaurant">restaurant</label>
    <input className="form__input-radio" type="radio" name="choise" id="restaurant" onClick={()=>setPickFromReasturant(()=>!pickFromReasturant)}/>
    {ta && <div>
         <h2>Welcome to TA order</h2> 
         <label for="addres">Addres</label>
         <input type="text" placeholder="Fill Your Addres" id="addres"/>
    </div>}
</div>
</div>
}
export default PayForm;