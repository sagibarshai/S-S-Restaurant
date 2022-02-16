import {Link} from 'react-router-dom'
import FoodMenu from '../pages/FoodMenu';
import '../../sass/Layout/nav-bar.scss';
const NavBar = () => {
return (<div className='navbar__container'> 
    <Link className='navbar__link'to='/menu' >| Our Menu |</Link>
    <Link className='navbar__link' to="/home-page" >| Order Take Away ! |</Link>
    <Link className='navbar__link' to="/home-page" >| Our Location |</Link>
    <Link className='navbar__link'to="/home-page" >| Content Us |</Link>
    <Link className='navbar__link'to="/home-page" >| About Us |</Link>
</div>)
}
export default NavBar;
