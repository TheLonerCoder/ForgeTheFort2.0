import React from 'react';
import styled, {keyframes} from 'styled-components';
import '../styles/home.css';
import {fadeIn} from 'react-animations';
import { Link } from 'react-router-dom';
import Testchart from '../charts/testchart';
import { Doughnut } from 'react-chartjs-2';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const images = {
  alt: 'Image load failed',
  width: "95%",
  minWidth: "100px",
  maxWidth: "1250px",
  margin: 'margin: 20px 20px 50px 20px'

}

const infoImages = {
  alt: 'Image load failed',
  width: "100%",
  minWidth: "100px",
  maxWidth: "1250px",
  // margin: 'margin: 20px 20px 50px 20px'

}


const MyImage = ( image ) => {
  return (
    <div>
      <LazyLoadImage
        alt={images.alt}
        effect="blur"
        height={images.height}
        src={image} // use normal <img> attributes as props
        width={images.width} 
        style={images}
        placeholderSrc={image}
        />
      {/* <span>{image.caption}</span> */}
    </div>

  )
  };

const LazyImages = ( image ) => {
  return (
    <div>
      <LazyLoadImage
        alt={infoImages.alt}
        effect="blur"
        height={infoImages.height}
        src={image} // use normal <img> attributes as props
        width={infoImages.width} 
        style={infoImages}
        placeholderSrc={image}
        />
      {/* <span>{image.caption}</span> */}
    </div>

  )
  };



// ? Styled Components

const InfoImages = styled.img `
  width: 100%;

`


// ? Animations

const fadeAnimation = keyframes `${fadeIn}`;
const FadeDiv = styled.div `
  animation: 1s ${fadeAnimation}
`



function Home() {
  return (
    <FadeDiv>
        

        {/* <h1>Test</h1> */}

      {/* { MyImage('ForgeTheFort2.0/imgs/Unknown/skyline.jpg') }     */}

      <div id='homeCara'>
        {/* <img src="ForgeTheFort2.0/imgs/Unknown/skyline.jpg" alt="skyline FW" id='mainImage'/> */}
        { MyImage('ForgeTheFort2.0/imgs/Unknown/skyline.jpg') }    

      <div id='exploreDiv'>
        <h2>Start your journey through the Midwest</h2>

        <Link to="/explore" id='exploreButton'>Explore</Link>
        
      </div>
      </div>
    
      <div id='infoFlex'>
        <div className='infoDiv'>
          {/* <InfoImages src="ForgeTheFort2.0/imgs/Unknown/education.jpg" alt='education'/> */}
          {LazyImages('ForgeTheFort2.0/imgs/Unknown/education.jpg')}
          <h2>Education</h2>
          <p>Here, at <i>Forge the Fort </i>, we believe education is a key fundamental into creating thriving economies and entrepreneurial ecosystems. We've partnered with other institutions and organizations to bring you the best education for your specific needs.</p>
            
        </div>

        <div className='infoDiv' id='div2'>
            {/* <InfoImages src="ForgeTheFort2.0/imgs/Unknown/comm3.jpg" alt="community" /> */}
          {LazyImages('ForgeTheFort2.0/imgs/Unknown/comm3.jpg')}

          <h2>Community</h2>
          <p>To make sure people can truly thrive, you have sure they have their basic needs met. This includes - but is not limited to - housing, transportation, health, food availability. Every community has their own specific needs and problems so we provide a platform for people to voice those needs and for people within the community, or outside, to come in and solve them. </p>
        </div>

        <div className='infoDiv' id='div3'>
          {/* <InfoImages src="ForgeTheFort2.0/imgs/Unknown/leisure3.jpg" alt="leisure"/> */}
          {LazyImages('ForgeTheFort2.0/imgs/Unknown/leisure3.jpg')}
          <h2>Leisure</h2>
          <p>At the end of the day, one of the best experiences in life is pleasure. We stand by pleasure and providing leisure activities for those within the Midwest, for all seasons, all times of the year. Seeing what works in other communities and what general ideas people have, you can bring these activities to your own.</p>
        </div>
      </div>
    
    </FadeDiv>
  )
}

export default Home;