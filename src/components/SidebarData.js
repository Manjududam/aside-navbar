import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FcIcons from "react-icons/fc";


export const SidebarData = [
    {
        title: "Home",
        path: '/home',
        icons: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: "Reports",
        path: '/reports',
        icons: <IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title: "Products",
        path: '/products',
        icons: <FaIcons.FaCartPlus/>,
        cName:'nav-text'
    },
    {
        title: "Team",
        path: '/team',
        icons: <IoIcons.IoIosPeople/>,
        cName:'nav-text'
    },
    {
        title: "Message",
        path: '/message',
        icons: <FaIcons.FaEnvelopeOpenText/>,
        cName:'nav-text'
    },
    {
        title: "Support",
        path: '/support',
        icons: <IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    },
    {
        title: "About",
        path: '/about',
        icons: <FcIcons.FcAbout/>,
        cName:'nav-text'
    },
]
