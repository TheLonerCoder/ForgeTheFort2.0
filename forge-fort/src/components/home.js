import React from 'react';
import styled from 'styled-components';




const InfoFlex = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`


const InfoDivs = styled.div `
 

  height: 300px;
  width: 200px;
  background-color: blue;
  margin-right: 100px;
  

`



function Home() {
  return (
    <div>
      <div id='homeCara' style={{backgroundColor: 'red', width: '100vw', height: '40vh', marginTop: '50px', marginBottom: '50px'}}>
        <img src="" alt="" />
      </div>
    
      <InfoFlex>
        <InfoDivs>
            test
        </InfoDivs>
        
        <InfoDivs>
            test 2
        </InfoDivs>

        <InfoDivs>
            test 3
        </InfoDivs>
      </InfoFlex>
    
    </div>
  )
}

export default Home