import {Link} from 'react-router-dom'
import '../../sass/Layout/nav-bar.scss';
const NavBarMenuPage = () => {
return (<div className='navbar__container'> 
    <Link className='navbar__link'to='/home-page' > Home </Link>
    <a className='navbar__link navbar__link-location' href="#footer" >Location </a>
    <a className='navbar__link' href="#footer" >Contact  </a>
</div>)
}
export default NavBarMenuPage;