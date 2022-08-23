import React from 'react';
import styled, {keyframes} from 'styled-components';
import '../styles/contact.css'
import {fadeIn} from 'react-animations';


// ? Animations

const fadeAnimation = keyframes `${fadeIn}`;
const FadeDiv = styled.div `
  animation: 1s ${fadeAnimation};
  margin-top: 150px;
  margin-right: 10%;
  margin-left: 10%;
`

function Contact() {
  return (
    <FadeDiv>
        <div id="founderFlex">
          <img src="ForgeTheFort2.0/imgs/Unknown/portrait-edit.png" alt="potrait" id='portrait'/>
          <div id="test">

          <h1>Meet the founder</h1>
          <p>
            Hello! My name is Stephon. I'm doing this as a final project for the Bootstrap section of "Nucamp". I plan on expanding on this in the future and turning it into a legitimate website. On the right hand side, I give you more details on where i'm currently at now with the project and what I plan on going with it in the future. Enjoy.
          </p>
          </div>
        </div>

        <div className="whyFlex">
          <div id='why'>
            <h3>Why</h3>
            <p>The midwest (also known as "the flyover states") has alot of underutilized talent. It is slow to adapt to the tech boom and is, thus, behind in economic development that could benefit it if it were to adapt. Combined with it's relatively low cost of living, I see it as a great place to spark this surge in innovation to help it thrive.</p>
          </div>

          <div id='goals'>
            <h3>Goals</h3>
            <p>I'll have regularly updates on what I plan on doing on Youtube and on here. They include, but are not limited to:</p>
            <ol>
              <li>1. Updating the "Explore", "Blog", and "Resources" pages</li>
              <li>2. Add more funtionality to the home page. For example, I want a feature where when you hover on the bottom cards, they expand with more information and links</li>
              <li>3. Adding detailed plans to this page (like pictures)</li>
              <li>4. Incoporate versions ✔️</li>
              <li>5. Host the website with a domain name ✔️</li>
            </ol>
          </div>

          <div id='current'>
            <h3>Current</h3>
            <p>Where i'm currently at is as is. This is just a basic demonstration of my knowledge of Bootstrap for Nucamp. However, I want to update this website in the future with more functionality, more features, etc. </p>
          </div>
        </div>
    </FadeDiv>
  )
}

export default Contact