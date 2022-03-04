import {Link} from 'react-router-dom'
import '../../sass/Layout/nav-bar.scss';
const NavBarHomePage = () => {
return (<div className='navbar__container'> 
    <Link className='navbar__link'to='/menu' >| Our Menu |</Link>
    <Link className='navbar__link' to="/order-Ta" >| Order Take Away ! |</Link>
    <a className='navbar__link' href="#footer" >| Our Location |</a>
    <a className='navbar__link'href="#footer" >| Content Us |</a>
    <Link className='navbar__link'to="/home-page#about-us">  | About Us |</Link>

</div>)
}
export default NavBarHomePage;