import React from 'react'
import './Education.css';
import { Tooltip } from 'react-tooltip';

function Education() {
  return (
    <div id='EducationSection'>

        <div className='careersection'>
          <p className='titlecareer'>Education</p>
          <p className='headingC'>NUML, Islamabad, Pakistan</p>
          <p className='headingS'>Bachelor of Software Engineering</p>
        </div>

        <div className='clicklink'>
            <a href="https://www.numl.edu.pk/" target="_blank" className='edulink'
            data-tooltip-id="my-tooltip" data-tooltip-content="Tap here visit my alta mater in beautiful Paris"> 
            Visit NUML Islamabad </a>
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


    </div>
  )
}

export default Education