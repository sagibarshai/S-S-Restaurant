import '../../sass/Layout/about-us.scss'
const AboutUs = () => {

    return (
        <div className="about" id='about-us'>
            <h1 className="about__title">A little bit about us:</h1>
            <div className='about__content'>

            <p className="  about__restaurant">S & S Restaurant Was established in 2010,
            The restaurant is aimed at different kitchens with authentic flavors.
            In the restaurant you will find a pleasant experience, delicious food, good wine and an amazing atmosphere
            We will be happy to host you!
            </p>
            <p className=" about__chef"> S & S Restaurant is led by Chef Johan Mazor, who specializes in authentic dishes in the highest form.
            Johan Mazur is rated 5 stars as a chef and has 2 Michelin restaurants. </p>
            <span className="about__stars__logo"></span>
            </div>
            

        </div>
    )
}
export default AboutUs;