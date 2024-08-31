import React from 'react'
import './Career.css';

function Career() {
  return (
    <div id='CareerSection'>

        <div className='careersection'>
          <p className='titlecareer'>Career Highlights</p>
          <p className='headingC'>City and County of San Francisco</p>
          <p className='headingS'>Software Developer, System Analyst</p>
        </div>

        <div className='listcareer'>
        <dl className='skill'>
            <dt ><i class="fa fa-star" aria-hidden="true"></i> Develop emergency mobile and web applications</dt>
            <dt><i class="fa fa-star" aria-hidden="true"></i> Analyse historical data on natural disasters</dt>
        </dl> 
        </div>

        <div className='careersection2'>
          <p className='headingC'>Les Étoiles Du Temps Satellite HQ</p>
          <p className='headingS'>Technology Intern</p>
        </div>

        <div className='listcareer'>
        <dl className='skill'>
            <dt ><i class="fa fa-star" aria-hidden="true"></i> Developed firmware for communication satellites</dt>
            <dt><i class="fa fa-star" aria-hidden="true"></i> Assured software performance and data integrity</dt>
        </dl> 
        </div>


    <div className='careerdots'>
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

export default Career