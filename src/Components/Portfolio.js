import React from 'react'
import './Portfolio.css';
import Input from './Input';

function Portfolio() {
  return (
  <div id='PortfolioSection'>
    <div className='portfoliotext'>
        <p className='title'>Portfolio</p>
    </div>

    <div className='PortfolioSectio'>

        <div className='photos'>
        <img className='pics' src='./images/eurorbit.jpg' alt='picture'></img>
        <p className='ptext'>EurOrbit</p>
        <p className='pdesc'>Weather Forecast written in JavaScript</p>
        <button className='button1' onClick={() => window.open('https://skyroute66.com/eurorbit2/', '_blank')}>Try it Out </button>
        </div>

        <div className='photos'>
        <img className='pics' src='./images/illustrator.jpg' alt='picture'></img>
        <p className='ptext'>Illustrator Vector Art</p>
        <p className='pdesc'> Traced from Paper and Colored</p>
        <button className='button' onClick={() => window.open('https://skyroute66.com/sampleportfolio2/images/illustrator_artwork_full.jpg', '_blank')}>Take a Closer Look</button>
        </div>

        <div className='photos'>
        <img className='pics' src='./images/github.jpg' alt='picture'></img>
        <p className='ptext'>GitHub</p>
        <p className='pdesc'> Take a look at my other projects on GitHub</p>
        <button className='button1' onClick={() => window.open('https://github.com/', '_blank')}>Go to my GitHub</button>
        </div>

    </div>

    <Input/>

    <div className='pdots'>
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

export default Portfolio