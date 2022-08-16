import React, {useState} from 'react';
import { IoCloseOutline as Exit, IoCaretBackSharp as LeftArrow, IoCaretForwardSharp as RightArrow } from "react-icons/io5";
import '../styles/howto.css';


function Howto() {

    const [page, changePage] = useState(<HowtoUse1 />);
    const [visible, hideVisibility] = useState({display: 'block'})

    function hideBox () {
        hideVisibility({display: "none"})
    }


  return (
    <div id='howto' style={visible}>    
        <div id='exitDiv'>
            <h2>Tutorial</h2>
            <button onClick={hideBox}><Exit size={'2rem'}/></button>    
        </div>    

    <div id='howtoContent'>
    <div className='arrows' ><LeftArrow size={'1.5rem'}/></div>
        <div>
            {page}
        </div>
    <div className='arrows'><RightArrow size={'1.5rem'}/></div>
    </div>
    </div>
  )
}


function HowtoUse1 () {
    return (
        <div>
            <p>Welcome. This app hopes to give you a brief overview of the economic/business climate here in the midwest.</p>

            <p>Simply click on a state to get started.</p>
        </div>
    )
}



function HowtoUse2 () {
    return (
        <div>
            <p>Here</p>
        </div>
    )
}
export default Howto;