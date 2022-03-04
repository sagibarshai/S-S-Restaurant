import {Link} from 'react-router-dom'
import '../../sass/Layout/nav-bar.scss';
const NavBarMenuPage = () => {
return (<div className='navbar__container'> 
    <Link className='navbar__link'to='/home-page' >| Home |</Link>
    <Link className='navbar__link' to="/order-Ta" >| Order Take Away ! |</Link>
    <a className='navbar__link' href="#footer" >| Our Location |</a>
    <a className='navbar__link' href="#footer" >| Content Us |</a>
</div>)
}
export default NavBarMenuPage;