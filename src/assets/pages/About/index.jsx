import React from 'react'
import {FaInstagram} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import { useContext } from 'react'
import { ThemeContext } from '../../../Theme'
import { Language, LanguageContext } from '../../../App'


const About = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  const {language} = useContext(LanguageContext)
  const sect = `pt-36 pb-32 ${theme === 'dark' ? 'bg-slate-700' : 'bg-white'}`

  return (
    <section id='about' className={sect}>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className='font-bold uppercase text-primary text-lg mb-3'>{Language[language].t1}</h4>
            <h2 className='font-bold text-dark text-3xl mb-5 max-w-md lg:first-letter:text-4xl'>Junior Developer</h2>
            <p className='font-medium text-base text-secondary max-w-xl lg:text-lg'>{Language[language].t2}</p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className='font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10'>{Language[language].t3}</h3>
            <p className='font-medium text-base text-secondary mb-6 lg:text-lg'>{Language[language].t4}</p>
            <div className='flex items-center'>
              {/* instagram */}
              <a href="https://instagram.com/putrimlypsb" target='blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white'>
                <FaInstagram/>
              </a>
              {/* github */}
              <a href="https://github.com/pasaribuputri" target='blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white'>
                <BsGithub/>
              </a>
              {/* linkedin */}
              <a href="https://www.linkedin.com/in/putri-mulyani-94743a26b/overlay/background-image/" target='blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white'>
                <BsLinkedin/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About