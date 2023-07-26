import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../../Theme'

const Dashboard = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  const sect = `pt-28 h-fit ${theme === 'dark' ? 'bg-slate-700' : 'bg-white'}`

  return (
    <section id='home' className={sect}>
      <div className="container">
        <div className="flex flex-wrap">
          <div className='w-full self-center px-4 lg:w-1/2'>
            <h1 className='text-base font-semibold text-primary md:text-xl'>Hi there 👋, i'm 
            <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl'>Putri Mulyani</span></h1>
            <h2 className='font-medium text-slate-500 text-lg mb-5 lg:text-2xl'>Junior Frontend Developer</h2>
            <p className='font-medium text-slate-400 mb-10 leading-relaxed'>"Hello, I'm Putri Mulyani, a junior Frontend Developer with great enthusiasm in software development. I love learning new things and am always on the lookout for the best practices in the industry. I have ability in problem solving and ready to contribute to challenging projects. Thank You!."</p>
            <a href="" className='text-base font-semibold bg-primary text-white py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'>Contact Me</a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="mt-8 relative lg:mt-0 lg:right-0 ">
              <img src="/poto.png" alt="Putri Mulyani" className='w-96 rounded-full ml-24'/>
              {/* <span className='absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125 '>
                <svg height='400' width='400' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path  fill="#14b8a6" d="M56.2,-24.2C61.4,-2.2,46.3,20.4,27.5,32.8C8.8,45.2,-13.6,47.4,-33.6,35.5C-53.5,23.6,-70.9,-2.6,-64.9,-25.6C-58.8,-48.7,-29.4,-68.8,-2,-68.2C25.5,-67.5,51,-46.2,56.2,-24.2Z" transform='translate(100 100) scale(1.1)' />
                </svg>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard