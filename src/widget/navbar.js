import React, { useState } from 'react';
import logo from '../ass/mccoollogog.svg';
import { IoManSharp } from 'react-icons/io5';
import { MdOutlineFastfood } from 'react-icons/md';
import { IoIosStats } from 'react-icons/io';
import { FiMoon } from 'react-icons/fi';
import './navbar.css';
import { MdOutlineNotificationAdd } from 'react-icons/md';
import { LuSettings } from 'react-icons/lu';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { Outlet, Link } from "react-router-dom";


function Navbar() {
  const [selectedTab, setSelectedTab] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={darkMode ? 'dark-mode' : ''}>
      <img src={logo} alt="Logo" id='logo'/>
      <div className='center-bar'>
        <Link
          id="link"
          to="/"
          className={`i ${selectedTab === 'home' ? 'white' : ''}`}
          onClick={() => handleTabClick('home')}
        >
          <IoManSharp /> Home
        </Link>
        <Link
                  id="link"



          to="/orders"
          className={`i ${selectedTab === 'orders' ? 'white' : ''}`}
          onClick={() => handleTabClick('orders')}
        >
          <MdOutlineFastfood /> Orders (23)
        </Link>
        <Link
                  id="link"


        to="/Statistiques"
          className={`i ${selectedTab === 'statistics' ? 'white' : ''}`}
          onClick={() => handleTabClick('statistics')}
        >
          <IoIosStats /> Statistiques
        </Link>
      </div>
      <div className='right-bar'>
        <button id='darkmodebtn' onClick={handleDarkModeToggle}>
          <FiMoon />
        </button>
        <button><MdOutlineNotificationAdd/></button>
        <button><MdOutlineAccountCircle /></button>
        <button> <LuSettings /></button>
      </div>
    </nav>
  )
}

export default Navbar
