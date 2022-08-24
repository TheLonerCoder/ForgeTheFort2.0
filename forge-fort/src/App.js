import logo from './logo.svg';
import './App.css';
import React, {useState, useRef} from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import Explore from './components/explore';
import './styles/header.css';
import { GiFlatHammer as Ham1, GiGearHammer as Ham2, GiHammerBreak as Ham3, Gi3DHammer as Ham4} from "react-icons/gi";
import styled, { keyframes } from 'styled-components';
import { bounce, rollIn, slideOutDown } from 'react-animations'
import { IoCloseOutline as Exit1, IoClose as Exit2, IoMenuOutline as Menu1, IoMenu as Menu2 } from "react-icons/io5";;


// ? Animations
const rollAnimation = keyframes`${rollIn}`;

const BouncyDiv = styled.div`
  animation: 3s ${rollAnimation};
  display: inline-block;
`;


const DropAnimation = keyframes`${slideOutDown}`;

const DropDiv = styled.div`
  animation: 2s ${DropAnimation};
  display: inline-block;
`;


function App() {

  const [menu, changeMenu] = useState({display:'none'});

  function showDropDown (e) {
    // console.log(menu.display);
    
    if (menu.display === 'none')
     {
       changeMenu({display: 'block'})
      } else {changeMenu({display: 'none'})}

  }



  return (
    <div className="App">
        <nav id='headerNav'>
          <div class="logoHeader">
            {/* <h1> Forge the Fort</h1> */}
            <h1> F<BouncyDiv><Ham2 style={{position: 'relative', top: '5px', right: '2px'}} fill="#c06014"/></BouncyDiv>rge the Fort</h1>
            <p>Midwest Development</p>
          </div>

          <ul id='headerList'>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>


{/*? Hamburger Menu */}
          <ul id='headerListHamburger'>
            <button>
              <Menu1 size={'2rem'} onClick={showDropDown}/>
            </button>

            <div style={menu} id="hamDiv">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/explore">Explore</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </div>
          </ul>
        </nav>


        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<Contact />}/>
          <Route path='/explore' element={<Explore />}/>
          {/* <Route path="*" element={<Home />}/> */}
          <Route path='*' element={<Navigate to='/home'/>}/>
        </Routes>
    </div>
  );
}

export default App;
