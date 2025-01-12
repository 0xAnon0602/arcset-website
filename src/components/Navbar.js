import React, { useState } from 'react';
import bitsLogo from '../images/logo/bitsLogo.png';
import ceoLogo from '../images/logo/coeLogoWithoutText.jpg'
import { NavLink } from "react-router-dom";
import '../css/Navbar.css';

const menuData = [
  {
    title: 'About Us',
    options: {
      'Vision & Mission': '/about/vision-mission',
      'Leadership': '/about/leadership',
      'Advisory Committee': '/about/advisory-committee',
      'Industry Partners': '/about/industry-partners',
    },
  },
  {
    title: 'Research',
    options: {
      'Hydrogen': '/research/hydrogen',
      'Biofuels': '/research/biofuels',
      'Renewables': '/research/renewables',
      'Carbon Capture': '/research/carbon-capture',
    },
  },
  {
    title: 'People',
    options: {
      'Associate Faculty': {
        type: 'nested',
        items: {
          'Hydrogen': '/people/associated-faculty/hydrogen',
          'Biofuels': '/people/associated-faculty/biofuels',
          'Renewables': '/people/associated-faculty/renewables',
          'Carbon Capture': '/people/associated-faculty/carbon-capture',
        },
      },
      'Visiting/Chair Professors': '/people/visiting-chair-professors',
      'PhD Students': '/people/phd-students',
      'Postdoctoral': '/people/postdoctoral',
    },
  },
  {
    title: 'Outreach',
    options: {
      'Seminars': '/outreach/seminars',
      'Workshops': '/outreach/workshops',
    },
  },
  {
    title: 'Openings',
    options: {
      'PhD Openings': 'https://www.bits-pilani.ac.in/careers/',
      'Postdoctoral Openings': 'https://www.bits-pilani.ac.in/careers/',
      'Faculty Openings': 'https://www.bits-pilani.ac.in/career/faculty-positions/',
    },
  },
];
function Navbar() {
  const [openNested, setOpenNested] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleNestedClick = (menuIndex, optionKey) => {
    if (openNested?.menuIndex === menuIndex && openNested?.optionKey === optionKey) {
      setOpenNested(null);
    } else {
      setOpenNested({ menuIndex, optionKey });
    }
  };

  const handleMouseEnter = (title) => {
    setDropdownOpen(title);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
    setOpenNested(null); 
  };

  return (
    <div className="navbar">
      <div className="coeLogo">
        <img src={ceoLogo} alt="Logo" width="75"/>
      </div>

      <div className="menu">
        <NavLink className="menu-button" to="/">Home</NavLink>
      </div>

      {menuData.map((menu, index) => (
        <div
          className="menu"
          key={index}
          onMouseEnter={() => handleMouseEnter(menu.title)}
          onMouseLeave={handleMouseLeave}
        >
          <button className="menu-button">{menu.title}</button>
          {dropdownOpen === menu.title && (
            <div className="dropdown">
              {Object.keys(menu.options).map((option) => {
                const item = menu.options[option];

                if (item?.type === 'nested') {
                  const isOpen =
                    openNested?.menuIndex === index && openNested?.optionKey === option;
                  return (
                    <div key={option}>
                      <NavLink
                        onClick={() => handleNestedClick(index, option)}
                      >
                        {option}
                      </NavLink>

                      {isOpen && (
                      <div className="nested-dropdown">
                        {Object.keys(item.items).map((subOption) => (
                          <NavLink 
                            to={item.items[subOption]} 
                            key={subOption} 
                            style={{ display: 'block', fontSize: '14px' }}
                          >
                            {subOption}
                          </NavLink>
                        ))}
                      </div>
                      )}
                      </div>
                    );
                }

                return (
                  <NavLink to={menu.options[option]} key={option}>
                    {option}
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>
      ))}

      <div className="bitsLogo">
        <a href="https://www.bits-pilani.ac.in/goa/">
          <img src={bitsLogo} alt="Logo" width="65" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;