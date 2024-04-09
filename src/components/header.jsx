import { Nav, Navbar } from "react-bootstrap";
import MHRlogo from "../assets/img/MHRlogo.jpg";

const Header = () => {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img src={MHRlogo} alt="" className="img-fluid rounded-circle" />
          <h1 className="text-light">
            <a href="index.html">Monster Hunter Rise Sunbreak</a>
          </h1>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li>
              <a href="#" className="nav-link scrollto active">
                <i className="bx bx-home"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <div className="dropdown">
                <a href="#" className="btn dropdown-toggle">
                  <i className="bx bx-user"></i> <span>Monsters</span>
                </a>
                <div className="dropdown-content">
                  <a href="#" className="btn">Large Monsters</a>
                  <a href="#" className="btn">Small Monsters</a>
                  
                </div>
              </div>
            </li>
            <li>
            <div className="dropdown">
                <a href="#" className="btn dropdown-toggle">
                  <i className="bx bx-user"></i> <span>Weapons</span>
                </a>
                <ul className="dropdown-content scrollable-menu">
                  <a href="#" className="btn">Great Sword</a>
                  <a href="#" className="btn">Sword and Shield</a>
                  <a href="#" className="btn">Dual Blades</a>
                  <a href="#" className="btn">Long Sword</a>
                  <a href="#" className="btn">Hammer</a>
                  <a href="#" className="btn">Hunting Horn</a>
                  <a href="#" className="btn">Lance</a>
                  <a href="#" className="btn">Gunlance</a>
                  <a href="#" className="btn">Switch Axe</a>
                  <a href="#" className="btn">Charge Blade</a>
                  <a href="#" className="btn">Insect Glaive</a>
                  <a href="#" className="btn">Bow</a>
                  <a href="#" className="btn">Heavy Bowgun</a>
                  <a href="#" className="btn">Light Bowgun</a>
                </ul>
              </div>
            </li>
            <li>
            <div className="dropdown">
                <a href="#" className="btn dropdown-toggle">
                  <i className="bx bx-user"></i> <span>Armor</span>
                </a>
                <ul className="dropdown-content scrollable-menu">
                  <a href="#" className="btn">Low Rank</a>
                  <a href="#" className="btn">High Rank</a>
                  <a href="#" className="btn">Master Rank</a>
                </ul>
              </div>
            </li>
            <li>
              <a href="#services" className="nav-link scrollto">
                <i className="bx bx-server"></i> <span>Armor Skills</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                <i className="bx bx-envelope"></i> <span>Decorations</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                <i className="bx bx-envelope"></i> <span>Switch Skills</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
