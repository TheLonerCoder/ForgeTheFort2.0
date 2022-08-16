import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import Explore from './components/explore';
import './styles/header.css';
import { GiFlatHammer as Ham1, GiGearHammer as Ham2, GiHammerBreak as Ham3, Gi3DHammer as Ham4} from "react-icons/gi";
import styled, { keyframes } from 'styled-components';
import { bounce, rollIn } from 'react-animations';



const rollAnimation = keyframes`${rollIn}`;

const BouncyDiv = styled.div`
  animation: 3s ${rollAnimation};
  display: inline-block;
`;


function App() {
  return (
    <div className="App">
        <nav id='headerNav'>
          <div class="logoHeader">
            {/* <h1> Forge the Fort</h1> */}
            <h1> F<BouncyDiv><Ham2 style={{position: 'relative', top: '5px'}} fill="#c06014"/></BouncyDiv>rge the Fort</h1>
            <p>Midwest Development</p>
          </div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<Contact />}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path="*" element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;
