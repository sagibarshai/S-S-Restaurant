import '../src/App.css'
import ImageSection from './components/layout/ImageSection';
import AboutUs from './components/layout/AboutUs';
import Header from './components/layout/Header';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import {Switch,Route,Redirect} from 'react-router-dom'
import FoodMenu from './components/pages/FoodMenu';
function App() {
  return (
    <div>
      {/* <Route>
        <Redirect to="/home-page"/>
      </Route> */}
      <Switch>
<Route path="/home-page" exact>

      <NavBar/>
      <Header/>
    <AboutUs/>
    <ImageSection/>
    <Footer/>
</Route>
      </Switch>
      <Switch>
      <Route path="/menu" exact>
        <NavBar/>
      <FoodMenu/>
      <Footer/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
