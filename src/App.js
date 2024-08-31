import './App.css';
import { Link } from "react-router-dom";
import Summary from './Components/Summary';
import Portfolio from './Components/Portfolio';
import Skill from './Components/Skill';
import Career from './Components/Career';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Input from './Components/Input';


function App() {
  return (
    <>
    <div className="portfolio">

      <Summary/>
      <Portfolio/>
      <Skill/>
      <Career/>
      <Education/>
      <Contact/>

      <Navbar/>

    </div>
    
    
    </>
  );
}

export default App;
