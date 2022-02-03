import '../src/App.css'
import ImageSection from './components/layout/ImageSection';
import AboutUs from './components/layout/AboutUs';
import Header from './components/layout/Header';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
    <AboutUs/>
    <ImageSection/>
    <Footer/>
    </div>
  );
}

export default App;
