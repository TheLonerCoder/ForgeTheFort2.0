import React from 'react';
import styled, {keyframes} from 'styled-components';
import '../styles/home.css';
import {fadeIn} from 'react-animations';





// ? Styled Components

const InfoImages = styled.img `
  width: 100%;
  ${'' /* height: 150px; */}

`


// ? Animations

const fadeAnimation = keyframes `${fadeIn}`;
const FadeDiv = styled.div `
  animation: 1s ${fadeAnimation}
`





function Home() {
  return (
    <FadeDiv>
      <div id='homeCara'>
        <img src="ForgeTheFort2.0/imgs/Unknown/skyline.jpg" alt="skyline FW" id='mainImage'/>
      </div>
    
      <div id='infoFlex'>
        <div className='infoDiv'>
          <InfoImages src="ForgeTheFort2.0/imgs/Unknown/education.jpg" alt='education'/>
          <h2>Education</h2>
          <p>Here, at <i>Forge the Fort </i>, we believe education is a key fundamental into creating thriving economies and entrepreneurial ecosystems. We've partnered with other institutions and organizations to bring you the best education for your specific needs.</p>
            
        </div>

        <div className='infoDiv' id='div2'>
            <InfoImages src="ForgeTheFort2.0/imgs/Unknown/comm3.jpg" alt="community" />
          <h2>Community</h2>
          <p>To make sure people can truly thrive, you have sure they have their basic needs met. This includes - but is not limited to - housing, transportation, health, food availability. Every community has their own specific needs and problems so we provide a platform for people to voice those needs and for people within the community, or outside, to come in and solve them. </p>
        </div>

        <div className='infoDiv' id='div3'>
          <InfoImages src="ForgeTheFort2.0/imgs/Unknown/leisure3.jpg" alt="leisure"/>
          <h2>Leisure</h2>
          <p>At the end of the day, one of the best experiences in life is pleasure. We stand by pleasure and providing leisure activities for those within the Midwest, for all seasons, all times of the year. Seeing what works in other communities and what general ideas people have, you can bring these activities to your own.</p>
        </div>
      </div>
    
    </FadeDiv>
  )
}

export default Home;