import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/navbar';
import SearchBar from './Components/searchBar';
import Hero from './Components/Hero';
import Footer from './Components/footer';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Componet1 from './componet1';
import Search from './search';
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <SearchBar/> */}
      <Componet1/>
      <Hero/>
       <Footer/>
     
    </div>
  );
}

export default App;
