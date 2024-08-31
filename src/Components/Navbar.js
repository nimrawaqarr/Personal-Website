import React, { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import './Navbar.css';

const Navbar = () => {
  const [hoveredStar] = useState(null);
  const [showTopArrow, setShowTopArrow] = useState(false);
  const [showBottomArrow, setShowBottomArrow] = useState(true);


  const careerHighlights = [
    { id: 'BioSection', label: 'Jump to Bio', tooltipId: 'bioTooltip' },
    { id: 'PortfolioSection', label: 'Jump to Portfolio', tooltipId: 'portfolioTooltip' },
    { id: 'SkillSection', label: 'Jump to Skill Summary', tooltipId: 'skillTooltip' },
    { id: 'CareerSection', label: 'Jump to Career Highlights', tooltipId: 'careerTooltip' },
    { id: 'EducationSection', label: 'Jump to Education', tooltipId: 'educationTooltip' },
    { id: 'ContactSection', label: 'Jump to Contact', tooltipId: 'contactTooltip' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      setShowTopArrow(scrollTop > 100);
      setShowBottomArrow(scrollTop + clientHeight < scrollHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleStarClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar">
      
      {showTopArrow && (
        <div className="arrow top-arrow" onClick={scrollToTop}
        data-tooltip-id="topArrowTooltip"
        data-tooltip-content="Scroll to the Top">
          <i class="fa fa-angle-double-up" id='arrow' aria-hidden="true"></i>
          {/* ▲ */}
        </div>
      )}
      <Tooltip id="topArrowTooltip" place="left" effect="solid" />


      <div className="star-rating">
        {careerHighlights.map((highlight, index) => (
          <span 
            key={highlight.id} 
            className={`star ${hoveredStar >= index ? 'active' : ''}`}
            onClick={() => handleStarClick(highlight.id)}

            data-tooltip-id={highlight.tooltipId}
            data-tooltip-content={highlight.label}
            data-tooltip-place="left"
          >
            <i class="fa fa-star-o" id='star' aria-hidden="true"></i>{/* &#9734;  */}
          </span>
        ))}
      </div>


      {showBottomArrow && (
        <div className="arrow bottom-arrow" onClick={scrollToBottom}
        data-tooltip-id="bottomArrowTooltip"
        data-tooltip-content="Scroll to the Bottom">
          <i class="fa fa-angle-double-down" id='arrow' aria-hidden="true" ></i>
          {/* ▼ */}
        </div>
      )}
      <Tooltip id="bottomArrowTooltip" place="left" effect="solid" />

      {careerHighlights.map(highlight => (
        <Tooltip key={highlight.tooltipId} id={highlight.tooltipId} anchorSelect={`[data-tooltip-id="${highlight.tooltipId}"]`} place="right" effect="solid" />
      ))}

      
    </nav>
  );
};

export default Navbar;