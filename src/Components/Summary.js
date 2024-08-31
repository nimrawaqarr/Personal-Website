import React from 'react'
import './Summary.css';

function Summary() {
  return (
    <>
    <div className='summary' id='BioSection'>

    <div className='photo'>
    <img className='pic' src='./images/girl.jpg' alt='picture'></img>
    </div>

    <div className='description'>
        <p className='name'>Nimra Waqar</p>
        <p className='heading'>Software Developer, System Analyst</p>
        <p className='desc'>I am a software developer from Pakistan and now I live in the Islamabad area. 
        After I graduated from Numl Islamabad with a degree in software engineering, 
        I have been working on interesting projects that bring the world together. 
        Here's portfolio of some of my work. I hope you enjoy them!</p>
    </div>

    </div>

    <div className='dots'>
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

    </>
  )
}

export default Summary