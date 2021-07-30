import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

// useState(false) - indicates that the default value is false, or not showing;
// setSidebar(!sidebar) - update the state to the opposite of the default valueToNode, or showing
// sidebar ? - ? - ternary operator; if true, click on menu icon, is showing, else hidden
// without the CSS, the two icons will stil show at the same time even if useState is working
// IconContext.Provider - styles all the icons at once, global

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <GiIcons.GiHamburgerMenu onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  }
  
  export default Navbar;
