import React, { useState, useRef } from 'react'
import MidwestMap from './MidwestMap';
import '../styles/map.css';
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';
import { mapObject } from '../data/mapdata';


// ? Animations

const fadeAnimation = keyframes `${fadeIn}`;
const FadeDiv = styled.div `
  animation: 1s ${fadeAnimation};
  margin-top: 150px;
  margin-right: 10%;
  margin-left: 10%;
`


// ? Clear map function
const idArray = ['OH', "IN", "IL", "MI", "MN", "ND", "SD", "MO", "KS", "IA", "NE", "WI"];

function clearMap () {

    for (let i = 0; i < idArray.length; i++) {
      document.getElementById(idArray[i]).style = null;
    }

}




function Explore() {

  const [stateID, renderID] = useState();
  const [stateName, renderName] = useState('test');
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
    const theID = e.target.id ;
    // ^ Saves clicked id into a variable and uses that variable as a keypoint in the mapObject to access the data
    renderID(theID);
    renderName(mapObject[theID].name);

    clearMap();


    e.target.style.fill = mapColors[theID];
    // ^ Map changes color on click


    
    

  }

  return (
    <FadeDiv id='explore'>
      <div id='mapDiv' onClick={getIdClicked} ref={mapRef}>
        <MidwestMap />

      </div>

    <div id='mapContent'>
      <div>ID: {stateID}</div>
      <div>Name: {stateName}</div>
      <div>Flag + name</div>
      <div>Largest cities + hightlights</div>
      <div>Private investment</div>
      <div>GDP</div>
      <div>Industries</div>
      <div></div>
    </div>
    </FadeDiv>
  )
}

export default Explore;