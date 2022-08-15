import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import Explore from './components/explore';
import './styles/header.css'


function App() {
  return (
    <div className="App">
        <nav id='headerNav'>
          <div class="logoHeader">
            <h1>Forge the Fort</h1>
            <p>Midwest Development</p>
          </div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path="*" element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;
