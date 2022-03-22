import '../src/App.css'
import ImageSection from './components/layout/ImageSection';
import AboutUs from './components/layout/AboutUs';
import Header from './components/layout/Header';
import NavBarHomePage from './components/layout/NavBarHomePage';
import NavBarMenuPage from './components/layout/NavBarMenuPage';
import Footer from './components/layout/Footer';
import {Switch,Route,Redirect} from 'react-router-dom'
import FoodMenu from './components/menu-display/FoodMenu';
function App() {  
  return (
    <div>
      {/* <Route>
        <Redirect to="/home-page" exact/>
      </Route> */}
      <Switch>
<Route path="/home-page" exact>
      <NavBarHomePage/>
      <Header/>
    <AboutUs/>
    <ImageSection/>
    <Footer/>
</Route>
      </Switch>
      <Switch>
      <Route path="/menu" exact>
        <NavBarMenuPage/>
      <FoodMenu/>
      <Footer/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
