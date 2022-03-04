import '../../sass/Layout/footer.scss';
const Footer = () => {
    return <div className="footer" id='footer'>
        <h2 className='footer__item'>
        <svg className='icon fotter__item'> 
            <use xlinkHref="images/icons/sprite.svg#icon-envelop"></use>
            </svg>
            Sagibarshai1@gmail.com
            </h2>
        <h2 className='footer__item'>
        <svg className='icon fotter__item'> 
            <use xlinkHref="images/icons/sprite.svg#icon-phone"></use>
            </svg>
             054-6077-403
            </h2>
        <h2 className='footer__item'>
        <svg className='icon fotter__item'> 
            <use className="use" xlinkHref="images/icons/sprite.svg#icon-map"></use>
            </svg>
             Tel-Aviv 19
             </h2>
        <h2 className='footer__item'>
        <svg className='icon fotter__item'> 
            <use xlinkHref="images/icons/sprite.svg#icon-clock"></use>
            </svg>
            Evrey Day 10:00-23:00
        </h2>
    </div>
}
export default Footer;