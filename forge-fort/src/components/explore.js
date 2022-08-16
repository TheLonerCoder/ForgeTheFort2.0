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


function Explore() {

  const [stateName, renderState] = useState();
  const mapRef = useRef(null);


  // ? Gets ID of clicked state and returns data
  function getIdClicked (e) {
    // console.log(mapRef.current.id)
    renderState(e.target.id);
    console.log(e.target.id)

    for (const [key, value] of Object.entries(mapObject)) {
      console.log(key)
    }

  }

  return (
    <FadeDiv id='explore'>
      <div id='mapDiv' onClick={getIdClicked}>
        <MidwestMap ref={mapRef}/>

      </div>

    <div id='mapContent'>
      <div>{stateName}</div>
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