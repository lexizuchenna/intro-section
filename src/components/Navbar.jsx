import {useState} from "react";

import arrowUp from '../images/icon-arrow-up.svg'
import arrowDown from '../images/icon-arrow-down.svg'
import logo from '../images/logo.svg'
import todo from '../images/icon-todo.svg'
import calendar from '../images/icon-calendar.svg'
import reminders from '../images/icon-reminders.svg'
import planning from '../images/icon-planning.svg'
import menu from '../images/icon-menu.svg'
import closeMenu from '../images/icon-close-menu.svg'


function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isOpen, setIsOpen] = useState(true)

    const onClick = (e) => {
        setIsActive(() => (e.target.value = !isActive))
    };

    const onClick2 = (e) => {
        setIsActive2(() => (e.target.value = !isActive2))
    };

    const closeMenuBar = () => {
      setIsOpen(() => (!isOpen))
    }
  return (
    <>
    <div className="container">
      <div className="flex navbar">
        <div className="logo flex">
            <img src={logo} alt="" />
        </div>
        <nav className="flex">
          <ul className="flex">
            <li>
              <a href="#" onClick={onClick}>Features <img src={isActive ? arrowUp : arrowDown} alt="" /></a>
            </li>
            <li>
              <a href="#" onClick={onClick2}>Company <img src={isActive2 ? arrowUp : arrowDown} alt="" /></a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
          <div className="user">
              <ul className="flex">
                  <li><a href="">Login</a></li>
                  <li><a href="">Register</a></li>
              </ul>
          </div>
          <div className={isActive ? 'dropdown-item features active' : 'dropdown-item features'}>
            <ul>
              <li>
                <a href="3">
                  <img src={todo} alt="" /> &nbsp; Todo List
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={calendar} alt="" /> &nbsp;Calendar
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={reminders} alt="" /> &nbsp;Reminders 
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={planning} alt="" /> &nbsp;Planning 
                </a>
              </li>
            </ul>
          </div>
          <div className={isActive2 ? 'dropdown-item company active' : 'dropdown-item company'}>
            <ul>
              <li><a href="#">History</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </nav>
        <div className="mobile-menu" onClick={closeMenuBar}>
          <img src={menu} alt="" />
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={!isOpen ? 'menu-bar flex' : 'menu-bar flex menu-bar-hide'}>
        <div className="menu-close flex" onClick={closeMenuBar}>
          <img src={closeMenu} alt="" />
        </div>
        <div className="menu-items">
            <li>
                <a href="#" onClick={onClick}>Features <img src={isActive ? arrowUp : arrowDown} alt="" /></a>
            </li>
            <div className="features-items" hidden={!isActive ? true : false}>
              <li>
                <a href="3">
                  <img src={todo} alt="" /> &nbsp; Todo List
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={calendar} alt="" /> &nbsp;Calendar
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={reminders} alt="" /> &nbsp;Reminders 
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={planning} alt="" /> &nbsp;Planning 
                </a>
              </li>
            </div>

            <li>
              <a href="#" onClick={onClick2}>Company <img src={isActive2 ? arrowUp : arrowDown} alt="" /></a>
            </li>
            <div className="company-items" hidden={!isActive2 ? true : false}>
              <li><a href="#">History</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Blog</a></li>
            </div>

            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">About</a>
            </li>

            <div className="mobile-user flex">
              <li><a href="#">Login</a></li>
              <li><a href="#">Register</a></li>

            </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Navbar;
