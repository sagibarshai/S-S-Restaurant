import {Link} from 'react-router-dom'
import '../../sass/Layout/nav-bar.scss';
const NavBarHomePage = () => {
return (<div className='navbar__container'> 
    <Link className='navbar__link'to='/menu' >  Menu </Link>
    <a className='navbar__link' href="#footer" > Location </a>
    <a className='navbar__link'href="#footer" >Content Us </a>
    <a className='navbar__link'href="#about-us"> About Us </a>

</div>)
}
export default NavBarHomePage;