import React from 'react';
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';


// ? Animations

const fadeAnimation = keyframes `${fadeIn}`;
const FadeDiv = styled.div `
  animation: 1s ${fadeAnimation}
`

function Contact() {
  return (
    <FadeDiv>

    </FadeDiv>
  )
}

export default Contact