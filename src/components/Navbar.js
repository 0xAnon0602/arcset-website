import '../css/Navbar.css';
import bitsLogo from '../images/logo/bitsLogo.png';

const menuData = [
  {
    title: 'About Us',
    options: ['Vision & Mission', 'Leadership', 'Advsiory Committee', 'Industry Partners'],
  },
  {
    title: 'Research',
    options: ['Hydrogen', 'Biofuels', 'Renewables', 'Carbon Capture'],
  },
  {
    title: 'People',
    options: ['Associated Faculty', 'Visting/Chair Professors', 'PHD Students', 'Postdoctoral'],
  },
  {
    title: 'Information',
    options: ['For Faculty', 'For Students', 'For Industries', 'For Academic Collaborations']
  },
  {
    title: 'Outreach',
    options: ['Seminars', 'Workshops']
  },
  {
    title: 'Openings',
    options: ['PHD Openings', 'Postdoctoral Openings', 'Faculty Openings']
  }
];

function Navbar() {
  return (
    <div className="navbar">
      <div className="bitsLogo">
        <img src={bitsLogo} alt="Logo" width="70" />
      </div>

      {menuData.map((menu, index) => (
        <div className="menu" key={index}>
          <button className="menu-button">{menu.title}</button>
          <div className="dropdown">
            {menu.options.map((option, idx) => (
              <a href={`#${option.toLowerCase().replace(' ', '-')}`} key={idx}>
                {option}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
