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

  const [stateID, renderID] = useState();
  const [stateName, renderName] = useState('test');
  const mapRef = useRef(null);
  

  
  
  // ? Gets ID of clicked state and returns data
  function getIdClicked (e) {
    const theID = e.target.id ;
    // ^ Saves clicked id into a variable and uses that variable as a keypoint in the mapObject to access the data
    renderID(theID);
    renderName(mapObject[theID].name)
    // console.log(mapRef.current.id)
    // console.log(`Before ${stateName}`);
    // renderID(e.target.id);
    // console.log(theID)
    // console.log(mapObject[theID])
    // console.log(mapObject[theID].name)
    // console.log(e.target.id);
    // renderName(mapObject[theID]);
    // console.log(mapObject[stateID]);
    // renderName(mapObject[stateID].name);
    // console.log(`After: ${stateName}`);

    
    // renderState(stateID.name)
    

  }

  return (
    <FadeDiv id='explore'>
      <div id='mapDiv' onClick={getIdClicked}>
        <MidwestMap ref={mapRef}/>

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