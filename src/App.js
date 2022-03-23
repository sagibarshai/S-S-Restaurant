import '../src/App.css'
import ImageSection from './components/layout/ImageSection';
import AboutUs from './components/layout/AboutUs';
import Header from './components/layout/Header';
import NavBarHomePage from './components/layout/NavBarHomePage';
import NavBarMenuPage from './components/layout/NavBarMenuPage';
import Footer from './components/layout/Footer';
import {Switch,Route,Redirect} from 'react-router-dom'
import NotFound from './components/layout/NotFound';
import FoodMenu from './components/menu-display/FoodMenu';
function App() {  
  return (
    <div>
   
        <Route path="/">
        <Redirect to="/home-page" />
      </Route>
      <Switch>
<Route path="/home-page" exact>
      <NavBarHomePage/>
      <Header/>
    <AboutUs/>
    <ImageSection/>
    <Footer/>
</Route>
      <Route path="/menu" exact>
        <NavBarMenuPage/>
      <FoodMenu/>
      <Footer/>
      </Route>
        <Route path="*"><NotFound/></Route>
      </Switch>
    </div>
  );
}

export default App;
