import React from 'react'
import {NavLink} from 'react-router-dom'
import { useState } from 'react';
import {MdDarkMode} from 'react-icons/md'
import {MdOutlineLightMode} from 'react-icons/md'
import { useContext } from 'react';
import { ThemeContext } from '../../../Theme';

const Header = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  const [isActive, setIsActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
    setIsMenuActive(!isMenuActive)
  };


  const buttonClasses = `block absolute right-4 lg:hidden ${isActive ? 'hamburger-active' : ''}`;
  const head = `bg-opacity-80  fixed top-0 left-0 w-full flex items-center z-10 shadow', ${theme=== 'light'? 'bg-white': "bg-slate-600"}`
  const navMel = ` absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:max-w-full lg:bg-transparent lg:shadow-none lg:rounded-none ${isMenuActive ? 'hidden' : ''}`
  return (
    <header className={head}>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className='px-4'>
            <a className='font-bold text-lg text-primary block py-6'>PutriMLY</a>
          </div>
          <div className='flex  justify-center items-center px-4'>
            <button id='hamburger' name='hamburger' type='button' onClick={handleClick} className={buttonClasses}>
              <span className='hamburger-line transition duration-300 ease-in-out origin-top-left'></span>
              <span className='hamburger-line transition duration-300 ease-in-out'></span>
              <span className='hamburger-line transition duration-300 ease-in-out origin-bottom-left'></span>
            </button>

            <nav id='nav-menu' className= {navMel}>
              <ul className='block lg:flex'>
                <li className='group'>
                  <NavLink to='/' className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Beranda</NavLink>
                </li>
                <li className='group'>
                  <NavLink to='/about' className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>About Me</NavLink>
                </li>
                <li className='group'>
                  <NavLink to='/portfolio' className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Portfolio</NavLink>
                </li>
                <li className='group'>
                  <NavLink to='/kontak' className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
            <button className='mt-2 mr-16' onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>
              {
                theme === 'light' ? <MdDarkMode size={24}/> : <MdOutlineLightMode size={24} />
              }
            </button>
              
        </div>
      </div>
    </header>
  )
}

export default Header