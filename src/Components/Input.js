import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import './Input.css';

function Input() {

    const [plant, setPlant] = useState('');
    const [animal, setAnimal] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    const texts = [
        `The firmament is vast and the Milky Way is, too.\n\nThe ${plant} was inquisitive and so are you\n\nThe ${animal} barges in and interrupts the ${plant}\n\nThe ${plant} asks, 'What is the origin? For ${animal} like you?'\n\nThe ${plant} insists on asking\n\nAnd the ${animal} just wants to get through\n\nThe ${animal} says, 'we all came from a big bang'\n\n'Both me and you!'`,
        `Wake up the ${plant}\n\nThe morning has come\n\nRouse the ${animal}\n\nBecause the coffee needs to be done\n\n'I need the coffee now', says the ${plant}\n\nLook around, coffee there is none\n\nAll because the ${animal} has to run`,
        `The ${plant} had a very bad day\n\nAnd was about to resign\n\nThe ${animal} saw the ${plant} and said\n\n'There is always tomorrow, no need to be despised'\n\nThe ${plant} said the dolphin just didn't understand\n\nSo the ${animal} inquired\n\n'What's really the matter?' asked the ${animal}\n\nThe ${plant} cried and then replied\n\n'Because you just stepped on me and now I am going to die!'`,
        `The ${plant} asked the sky\n\nWhy am I not inspired?\n\nThe ${animal} then came falling off the sky\n\nThe ${plant} was caught by surprise\n\n'Why did you choose me?', the ${plant} asked\n\nThe ${animal} said, 'I need to eat something, that's why!'\n\n'And you are cheaper than anything money can buy!'`,
        `The sky is red and the ${animal} is mad\n\nBecause men are destroying the planet\n\nAnd the ${animal} has not been fed\n\nThe ${plant} laughs at the ${animal} and says\n\n'The destiny is in our hands my friend'\n\nThe ${animal} says, 'how? but I don't understand?'\n\nThe ${plant} says, 'Man-made things are not all bad!'\n\n'You see? All you have to do is to raid that hotdog stand!'`
      ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Generating poem with:', plant, animal);
    setSubmitted(true);
    // Cycle through text options
    setTextIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  const handleReset = () => {
    setPlant('');
    setAnimal('');
    setSubmitted('');
  };

  return (
    <div className="inputsection">
      <div className='inputtext'>
        <p className='inputtitle'>Take a Break and be Poetic!</p>
    </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="plant">Enter the name of a plant:</label>
          <input
            type="text"
            id="plant"
            value={plant}
            onChange={(e) => setPlant(e.target.value)}
            placeholder="e.g. orchid"
          />
        </div>
        <div className="form-row">
          <label htmlFor="animal">Enter the name of an animal:</label>
          <input
            type="text"
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            placeholder="e.g. dolphin"
          />
        </div>

        {submitted && (
        <div className='poemdiv'>
          <h2 className='poemheading'>
            {`The ${plant} and the ${animal}`}
          </h2>
          <p className='poem'>
            {texts[textIndex]}
          </p>
        </div>
      )}

        <div>
          <button type="button" onClick={handleReset} className='btnreset'>Reset</button>
          <button type="submit" className='btnmake'>Make / Remake</button>
        </div>
      </form>


      <footer data-tooltip-id="my-tooltip-by" data-tooltip-content="These tags tell you what technologies I used">
        Powered by : <span>JavaScript</span> <span>JQuery</span> <span>Bootstrap</span>
      </footer>
      <Tooltip id="my-tooltip-by" place="bottom" effect="solid" />

      
    </div>
  );
}

export default Input;