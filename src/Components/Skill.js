import React from 'react'
import './Skill.css';

function Skill() {
  return (
    <div className='mainskill' id='SkillSection'> 

    <div className='skillsection'>
        <p className='titleskill'>Skill Summary</p>
    </div>

    <div className='skilldiv' data-tooltip-id="my-tooltip" data-tooltip-content="
    These tags tell you what technologies I used">
        <button className='btnskill'> HTML</button>
        <button className='btnskill'> CSS</button>
        <button className='btnskill'> JavaScript</button>
        <button className='btnskill'> Node.js</button>
        <button className='btnskill'> Java</button>
        <button className='btnskill'> Kotlin</button>
        <button className='btnskill'> Swift</button>
    </div>

    <div className='listskill'>
        <dl className='skill'>
            <dt ><i class="fa fa-star" aria-hidden="true"></i> Full stack web developer</dt>
            <dt><i class="fa fa-star" aria-hidden="true"></i> Mobile application developer for iOS and Android</dt>
            <dt><i class="fa fa-star" aria-hidden="true"></i> Graphic designer with Adobe Suite</dt>
        </dl> 
    </div>

    <div className='skillsdot'>
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

export default Skill