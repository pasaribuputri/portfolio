import React from 'react'
import {NavLink} from 'react-router-dom'
import { useState } from 'react';
import {MdDarkMode} from 'react-icons/md'
import {MdOutlineLightMode} from 'react-icons/md'
import {GrLanguage} from "react-icons/gr"
import { useContext } from 'react';
import { ThemeContext } from '../../../Theme';
import { Language, LanguageContext } from '../../../App';
import { useRef} from 'react';
import { useEffect } from 'react';
import {FaArrowCircleUp} from 'react-icons/fa'

const Header = () => {
  const {language, setLanguage} = useContext(LanguageContext)
  const {theme, setTheme} = useContext(ThemeContext)
  const [isActive, setIsActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(true);
  const [showSelectOption, setShowSelectOption] = useState(false)
  const scrollButtonRef = useRef(null)

  function toggleSelectOption (){
    setShowSelectOption(!showSelectOption)
  }

  const handleClick = () => {
    setIsActive(!isActive);
    setIsMenuActive(!isMenuActive)
  };

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleScroll = () => {
    if(scrollButtonRef.current){
      const {current: button} = scrollButtonRef;
      if(window.scrollY > 300){
        button.classList.remove('hidden')
      }else{
        button.classList.add('hidden')
      }
    }
  }

  const handleAllert = () => {
    if(theme === 'light'){
      console.log("Thema Terang")
    }else{
      console.log("Thema Gelap");
    }
  }

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  useEffect(()=>{
    handleAllert()
  }, [theme])

  const buttonClasses = `block absolute right-4 lg:hidden ${isActive ? 'hamburger-active' : ''}`;
  const head = `bg-opacity-80  fixed top-0 left-0 w-full  z-10 shadow', ${theme=== 'light'? 'bg-white': "bg-slate-500"}`
  const navMel = ` absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:max-w-full lg:bg-transparent lg:shadow-none lg:rounded-none ${isMenuActive ? 'hidden' : ''}`
  
  return (
    <header className={head}>
      <div className='flex items-center'>
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
                  <NavLink to='/' className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>{Language[language].home}</NavLink>
                </li>
                <li className='group'>
                  <NavLink to='/about' className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>{Language[language].about}</NavLink>
                </li>
                <li className='group'>
                  <NavLink to='/portfolio' className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>{Language[language].portfolio}</NavLink>
                </li>
                <li className='group'>
                  <NavLink to='/kontak' className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>{Language[language].contact}</NavLink>
                </li>
              </ul>
            </nav>
          </div>
            <div className='flex justify-center items-center'>
              <button className='mt-2 mr-5' onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>
                {
                  theme === 'light' ? <MdDarkMode size={26}/> : <MdOutlineLightMode size={24} />
                }
              </button>
              <button className='mt-2 mr-16' onClick={toggleSelectOption}>
                <GrLanguage size={24}/>
              </button>
            </div>
            <button ref={scrollButtonRef} onClick={ScrollTop} className='fixed bottom-5 right-5 p-4 rounded-fullcursor-pointer hidden'><FaArrowCircleUp size={26}/></button>
        </div>
      </div>
      </div>
      {showSelectOption && (
        <div className='w-full absolute flex justify-end pb-3 px-16 '>
          <select onChange={(e)=> setLanguage(e.target.value)}>
            <option value="id" >Indonesia</option>
            <option value="en" >Inggris</option>
          </select>
        </div>
      )}
    </header>
  )
}

export default Header