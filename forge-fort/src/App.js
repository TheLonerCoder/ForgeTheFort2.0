import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import Explore from './components/explore';

function App() {
  return (
    <div className="App">
        <nav>
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
        </Routes>
    </div>
  );
}

export default App;
