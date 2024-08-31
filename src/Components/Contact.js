import React from 'react'
import './Contact.css';
import { Tooltip } from 'react-tooltip';

function Contact() {
  
  // const email = 'nimra@gmail.com';
  // const handleEmailClick = () =>{
  //   window.location.href = 'mailto:${email}';
  // };

  return (
    <div id='ContactSection'>
         <div className='careersection'>
          <p className='titlecareer'>Contact</p>
        </div>

        <div className='clicklink'>
           {/* <p className='weblinkp'>Email: <a href="#" target="_blank" className='edulink' 
            onClick={handleEmailClick}> nimra@gmail.com</a></p>  */}

            <p className='weblinkp'>Email: <a href="mailto:nimra@gmail.com" target="_blank" className='edulink' 
              data-tooltip-id="my-tooltip" data-tooltip-content="Tap here to email me"> nimra@gmail.com</a></p> 

            <p className='weblinkp'>LinkedIn: <a href="https://pk.linkedin.com/" target="_blank" className='edulink'
            data-tooltip-id="my-tooltip" data-tooltip-content="Tap here to visit my LinkedIn page">Nimra Waqar</a></p>
            
            <Tooltip place='bottom' id="my-tooltip" style={{fontSize:12}}/>

        </div>


        <div className='educationdots'>
      <p>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </p>
    </div>

    <footer className='footer'>© Copyright 2024 Nimra Waqar</footer>
        
    </div>
  )
}

export default Contact