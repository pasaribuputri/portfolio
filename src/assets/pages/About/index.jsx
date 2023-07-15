import React from 'react'
import {FaInstagram} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

const About = () => {
  return (
    <section id='about' className='pt-36 pb-32'>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className='font-bold uppercase text-primary text-lg mb-3'>About Me</h4>
            <h2 className='font-bold text-dark text-3xl mb-5 max-w-md lg:first-letter:text-4xl'>Junior Developer</h2>
            <p className='font-medium text-base text-secondary max-w-xl lg:text-lg'>I am a D3 student majoring in Informatics Management at Pasim National University and a junior frontend developer with major expertise in React JS. I have a strong interest in web development and love taking on the new challenge of developing attractive and responsive user interfaces. With my knowledge and experience in React JS, I am ready to continue learning and growing in my frontend development career.</p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className='font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10'>let's be friends</h3>
            <p className='font-medium text-base text-secondary mb-6 lg:text-lg'>If anyone wants to collaborate or have questions, feel free to contact me. Thank You!</p>
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