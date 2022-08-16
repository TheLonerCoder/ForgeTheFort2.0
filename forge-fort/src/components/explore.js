import React from 'react'
import MidwestMap from './MidwestMap';
import '../styles/map.css';
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';


// ? Animations

const fadeAnimation = keyframes `${fadeIn}`;
const FadeDiv = styled.div `
  animation: 1s ${fadeAnimation};
  margin-top: 150px;
  margin-right: 10%;
  margin-left: 10%;
`


function Explore() {
  return (
    <FadeDiv id='explore'>
      <MidwestMap />
    </FadeDiv>
  )
}

export default Explore