import {React, useState} from 'react'
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as FcIcons from "react-icons/fc";
import { SidebarData } from './SidebarData';
import './Navbar.css'
import { IconContext } from 'react-icons';

export default function Navbar() {
    const [sideBar, setSideBar] = useState(false);

    const showSidebar = () => setSideBar(!sideBar)

  return (
    <>
    <IconContext.Provider value={{color:'fff'}}>
    <div className="navbar">
        <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar}/>   
        </Link>
        <nav className={sideBar? 'nav-menu active':'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose/>
                </Link>
            </li>
            {SidebarData.map((item, index) =>{
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>{item.icons} <span>{item.title}</span></Link>
                    </li>
                )
            })}
        </ul>

        </nav>

        </div>
        </IconContext.Provider>
      
    </>
  )
}
