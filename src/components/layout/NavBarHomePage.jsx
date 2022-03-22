import {Link} from 'react-router-dom'
import '../../sass/Layout/nav-bar.scss';
const NavBarHomePage = () => {
return (<div className='navbar__container'> 
    <Link className='navbar__link'to='/menu' >  Menu </Link>
    <a className='navbar__link navbar__link-location' href="#footer" > Location </a>
    <a className='navbar__link'href="#footer" >Contact  </a>
    <a className='navbar__link navbar__link-about'href="#about-us"> About</a>

</div>)
}
export default NavBarHomePage;