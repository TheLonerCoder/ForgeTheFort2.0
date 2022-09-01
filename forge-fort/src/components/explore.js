import React, { useState, useRef } from 'react'
import MidwestMap from './MidwestMap';
import '../styles/map.css';
import '../styles/mapcontent.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
// import '../styles/exploreInfo.css';
import styled, {keyframes} from 'styled-components';
import { GiTreasureMap as Map, GiModernCity as City } from "react-icons/gi";
import { AiOutlineStock as Stocks, AiFillBank as Bank } from "react-icons/ai";
import {fadeIn, fadeInLeft, zoomIn} from 'react-animations';
import { mapObject } from '../data/mapdata';
import Howto from './howto';
import {Doughnut, Bar} from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title} from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);



// ? Styled Component
const PaperDiv = styled.div `
    background-color: white;
    width: 50%;
    min-height: 400px;
    ${'' /* box-shadow: inset 0px 1px 3px black; */}
    box-shadow: -4px -2px 8px grey;
    ${'' /* margin-right: 5px; */}
    ${'' /* border-left: 1px solid black; */}
    ${'' /* border-left: 4px 5px solid darkgrey; */}
`


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



function Test1 () {
  return (
    <div>
      Test1
    </div>
  )
}
function Test2 () {
  return (
    <div>
      Test2
    </div>
  )
}
function Test3 () {
  return (
    <div>
      Test3
    </div>
  )
}
function Test4 () {
  return (
    <div>
      Test4
    </div>
  )
}




function Explore() {
  
  const [mapContentVisibility, changeMapContentVisibility] = useState({display: 'none'});
  const [tutorialVisibility, changeTutorialVisibility] = useState();
  const [stateID, renderID] = useState();
  const [stateName, renderName] = useState('test');
  const [flag, changeFlag] = useState();
  const [cities, renderCity] = useState([]);
  const [stateColor, changeColor] = useState('#e9565e');
  const [iconStyle, changeIconStyle] = useState(null);
  const [stateGDP, changeGDP] = useState('');
  const [stateCapita, changeCapita] = useState('');
  const [totalGDP, changeTotalGDP] = useState(0);
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
    
    

    // console.log(Object.keys(mapColors).find(theID));
    changeColor(mapColors[theID]);
    // ^ get colors of selected state


    changeGDP(parseInt(mapObject[theID].gdp.total));
    // ^ Converts GDP to single number (in billions)


    changeCapita(Number(mapObject[theID].gdp.capita));
    // ^ Converts GDP/capita to single number (in billions)

  }

 
  
  // ? Gets the average of the total GDP/capita
let gdpArray = [];

  for (const [key, value] of Object.entries(mapObject)) {
  // console.log(`${key}: ${value}`);
  let GDP = 0;

  GDP = GDP + value;
  // changeTotalGDP(totalGDP + value);
  // changeTotalGDP(totalGDP + value);


  gdpArray.push(Number(value.gdp.capita));
  // console.log(`${value.gdp.capita}`);
  // console.log(gdpArray);
}
const sumGDPCapita = gdpArray.reduce((previousGDP, currentGDP) => {return previousGDP + currentGDP}, 0);
let averageGDPCapita = Math.round(sumGDPCapita / 12);



// ? Gets average of the total midwestern GDP

let totalgdpArray = [];

  for (const [key, value] of Object.entries(mapObject)) {

  totalgdpArray.push(parseInt(value.gdp.total));
  
}
const sumGDPTotal = totalgdpArray.reduce((previousGDP, currentGDP) => {return previousGDP + currentGDP}, 0);
let averageGDPTotal = Math.round(sumGDPTotal/12);




 // ? Chart Data
 const pieData = {
  // labels: ["total", "nominal", "real"],
  labels: ["Total Midwestern GDP", "State GDP (Nominal)"],
  datasets: [{
      data: [sumGDPTotal, stateGDP],
      backgroundColor: ['#aaaaaa', stateColor]
  }]
}




const incomeData = {
  // labels: ["total", "nominal", "real"],
  labels: ["Average Midwestern GDP/capita", "State GDP/capita (Nominal)", "National GDP/capita"],
  datasets: [
    {
      // label: ['Midwest Average, State, National Average'],
      data: [averageGDPCapita, stateCapita, 66144],
      backgroundColor: ['#aaaaaa', stateColor, '#c06014']
  },
]
}


const totalOptions = {
responsive: true,
plugins: {
title: {
  display: true,
  text: 'GDP (in $ billions)'
}
}
}


const capitaOptions = {
responsive: true,
plugins: {
legend: {
  display: false
},
title: {
  display: true,
  text: 'GDP/capita ($)'
}
}
}



// ? Change color of tab when button is clicked
let backgroundGreen = {
  // backgroundColor: 'darkgreen',
  backgroundColor: 'rgba(0, 100, 0, 0.7)',

}
let backgroundBlue = {
  backgroundColor: 'rgba(0, 0, 255, 0.7)',
}
let backgroundOrange = {
  backgroundColor: 'rgba(192, 96, 20, 0.7)',
}


function changeBackgroundButton (e) {

  let changeStyle = e.currentTarget.style;
  changeStyle.boxShadow = 'none';      

  switch (e.currentTarget.id) {
    case 'mapIcon':
    case 'cityIcon':  
      // console.log('works');
      changeIconStyle(changeStyle = backgroundOrange);
      break;
    case 'stockIcon':
      changeIconStyle(changeStyle = backgroundGreen);
      break;
    case 'bankIcon':
      changeIconStyle(changeStyle = backgroundBlue);
      break;
    default:
      console.log('failure to change background color!')
  };


  // console.log(e.currentTarget.id);
  

  // changeIconStyle (e.currentTarget.style = backgroundGreen)
}






  return (
    <FadeDiv id='explore'>

      <div id='howToBox' style={tutorialVisibility}>
        <Howto />
      </div>

      <FadeLeftDiv style={mapContentVisibility}>
        <div id='name'>
          <img src={flag} alt="flag" />
          <h2><span id="state">State:</span> {stateName}</h2>
        </div>

      </FadeLeftDiv>

      <div id='mapDiv' onClick={getIdClicked} ref={mapRef}>
        <MidwestMap />

      </div>

    <FadeLeftDiv id='mapContent' style={mapContentVisibility}>
      {/* <div>ID: {stateID}</div> */}

      {/* <Routes>
        <Route path='map' element={<Test1/>}></Route>
        <Route path='city' element={<Test2/>}></Route>
        <Route path='stock' element={<Test3/>}></Route>
        <Route path='bank' element={<Test4/>}></Route>
      </Routes> */}

      <div className='cities' style={{backgroundColor: stateColor}}>
        <div>
          <h3>Largest Cities</h3>
          <ol>
              {cities.map(item => {return <li class='citiesItem'><div>{item}</div></li>})}
          </ol>
        </div>

        <div id='spotlight'>
          <h3>Spotlight</h3>
          <div>
            <img src="https://dummyimage.com/300x200/000/fff.png&text=city" alt="placeholder" />
            <h5 id='cityname'>City name, State</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nisi, ipsam autem doloremque porro odio amet dicta accusamus quibusdam voluptatum aliquam minima animi blanditiis sunt natus, ratione dolores et consectetur?</p>
          </div>
          {/* <h3>{mapObject[stateID].cities.upcoming.cityname}</h3> */}

          
        </div>

        <div id='cityIcons'>
          <ul style={iconStyle}>
            <li id='mapIcon' onClick={changeBackgroundButton}><button><Map size={'1.5rem'} /></button></li>
            <li id='cityIcon' onClick={changeBackgroundButton}><button><City size={'1.5rem'} /></button></li>
            <li id='stockIcon' onClick={changeBackgroundButton}><button><Stocks size={'1.5rem'}/></button></li>
            <li id='bankIcon' onClick={changeBackgroundButton}><button><Bank size={'1.5rem'} /></button></li>
          </ul>
        </div>
      </div>
      
      {/* <div>Largest cities + hightlights</div> */}

      <div>
        <h2 className='heading'>GDP</h2>
      </div>
      <div id="gdpCharts" className='cities'>
        <PaperDiv id='chart1'>
          <Doughnut data={pieData} options={totalOptions}/>
        </PaperDiv>
        <PaperDiv id='chart2'>
          <Bar data={incomeData} options={capitaOptions}/>
        </PaperDiv>
      </div>

      <div>
        <h2 className='heading'>
          Private investment
        </h2>
      </div>

      <div>
        <h2 className='heading'>Industries</h2>
      </div>
      {/* <div></div> */}
    </FadeLeftDiv>
    </FadeDiv>
  )
}

export default Explore;