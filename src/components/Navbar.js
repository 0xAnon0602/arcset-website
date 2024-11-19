import bitsLogo from '../images/logo/bitsLogo.png';
import ceoLogo from '../images/logo/ceoLogoWithoutText.jpeg'
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
      'Associated Faculty': '/people/associated-faculty',
      'Visiting/Chair Professors': '/people/visiting-chair-professors',
      'PhD Students': '/people/phd-students',
      'Postdoctoral': '/people/postdoctoral',
    },
  },
  {
    title: 'Information',
    options: {
      'For Faculty': '/information/faculty',
      'For Students': '/information/students',
      'For Industries': '/information/industries',
      'For Academic Collaborations': '/information/academic-collaborations',
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
      'PhD Openings': '/openings/phd',
      'Postdoctoral Openings': '/openings/postdoctoral',
      'Faculty Openings': '/openings/faculty',
    },
  },
];

function Navbar() {


  return (
    <div className="navbar">
      
      <div className="coeLogo">
        <img src={ceoLogo} alt="Logo" width="75"/>
      </div>

      <div className="menu">
        <NavLink className="menu-button" to='/'>Home</NavLink>
      </div>

      {menuData.map((menu, index) => (
        <div className="menu" key={index}>
          <button className="menu-button">{menu.title}</button>
          <div className="dropdown">
            {Object.keys(menu.options).map((option, idx) => (
              <NavLink to={menuData[index].options[option]}>{option}</NavLink>
            ))}
          </div>
        </div>
      ))}

      <div className="bitsLogo">
        <a href='https://www.bits-pilani.ac.in/goa/'>
          <img src={bitsLogo} alt="Logo" width="65"/>
        </a>
      </div>

    </div>
  );
}

export default Navbar;
