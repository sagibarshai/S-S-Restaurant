import '../../sass/Layout/nav-bar.scss';
const NavBar = () => {
return (<div className='navbar__container'>
    <a className='navbar__link'href='food-menu' id="food-menu">| Food Menu |</a>
    <a className='navbar__link'href='#' >| Wine & Drink Menu |</a>
    <a className='navbar__link ' href='#' >| Order Take Away ! |</a>
    <a className='navbar__link'href='#footer' >| Our Location |</a>
    <a className='navbar__link'href='#footer' >| Content Us |</a>
    <a className='navbar__link'href='#about-us' >| About Us |</a>
</div>)
}
export default NavBar;
