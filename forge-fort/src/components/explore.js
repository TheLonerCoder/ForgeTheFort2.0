import React, { useState, useRef } from 'react'
import MidwestMap from './MidwestMap';
import '../styles/map.css';
import '../styles/mapcontent.css';
import styled, {keyframes} from 'styled-components';
import {fadeIn, fadeInLeft, zoomIn} from 'react-animations';
import { mapObject } from '../data/mapdata';
import Howto from './howto';


// ? Animations

const fadeAnimation = keyframes `${fadeIn}`;
const FadeDiv = styled.div `
  animation: 1s ${fadeAnimation};
  margin-top: 150px;
  margin-right: 10%;
  margin-left: 10%;
`

const fadeLeftAnimation = keyframes `${zoomIn}`;
const FadeLeftDiv = styled.div `
  animation: 1s ${fadeLeftAnimation};
  ${'' /* margin-top: 150px;
  margin-right: 10%;
  margin-left: 10%; */}
`


// ? Clear map function
const idArray = ['OH', "IN", "IL", "MI", "MN", "ND", "SD", "MO", "KS", "IA", "NE", "WI"];

function clearMap () {

    for (let i = 0; i < idArray.length; i++) {
      document.getElementById(idArray[i]).style = null;
    }

}




function Explore() {

  const [mapContentVisibility, changeMapContentVisibility] = useState({display: 'none'});
  const [tutorialVisibility, changeTutorialVisibility] = useState();
  const [stateID, renderID] = useState();
  const [stateName, renderName] = useState('test');
  const [flag, changeFlag] = useState();
  const [cities, renderCity] = useState([]);
  const mapRef = useRef(null);
  
  const mapColors = {
    OH: '#432771', 
    IN: '#f7bc17', 
    IL: '#53b35a', 
    MO: '#1aa9a9', 
    MI: '#625d59', 
    KS: '#e9565e', 
    NE: '#a3ce65', 
    IA: '#8f7d71', 
    SD: '#f7bc17', 
    WI: '#e3595e', 
    ND: '#246cb6', 
    MN: '#7f4f99', 
  }
  
  
  // ? Gets ID of clicked state and returns data
  function getIdClicked (e) {

    changeMapContentVisibility({display: 'inline-block'});
    changeTutorialVisibility({display: 'none'});


    const theID = e.target.id ;
    // ^ Saves clicked id into a variable and uses that variable as a keypoint in the mapObject to access the data
    renderID(theID);
    renderName(mapObject[theID].name);

    clearMap();

    e.target.style.fill = mapColors[theID];
    // ^ Map changes color on click

    changeFlag(mapObject[theID].flag);
    
    renderCity(mapObject[theID].cities.largest);
    
    

  }

  return (
    <FadeDiv id='explore'>

      <div id='howToBox' style={tutorialVisibility}>
        <Howto />
      </div>

      <FadeLeftDiv style={mapContentVisibility}>
        <div id='name'>
          <div><img src={flag} alt="flag" /></div>
          <h2><span id="state">State:</span> {stateName}</h2>
        </div>

      </FadeLeftDiv>

      <div id='mapDiv' onClick={getIdClicked} ref={mapRef}>
        <MidwestMap />

      </div>

    <FadeLeftDiv id='mapContent' style={mapContentVisibility}>
      {/* <div>ID: {stateID}</div> */}

      <div>
        <h3>Largest Cities</h3>
        <ul>
            {cities.map(item => {return <li>{item}</li>})}
        </ul>
      </div>
      
      <div>Largest cities + hightlights</div>
      <div>Private investment</div>
      <div>GDP</div>
      <div>Industries</div>
      <div></div>
    </FadeLeftDiv>
    </FadeDiv>
  )
}

export default Explore;