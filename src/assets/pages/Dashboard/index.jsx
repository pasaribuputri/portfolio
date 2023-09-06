import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../../Theme'
import { Language, LanguageContext } from '../../../App'

const Dashboard = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext)
  const sect = `pt-24 h-fit ${theme === 'dark' ? 'bg-slate-700 text-white' : 'bg-white'}`

  return (
    <section id='home' className={sect}>
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className='w-full lg:w-1/2 px-4'>
            <h1 className='text-base font-semibold text-primary md:text-xl'>{Language[language].d1}
              <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl'>Putri Mulyani</span>
            </h1>
            <h2 className='font-medium text-slate-500 text-lg mb-5 lg:text-2xl'>Junior Back End & Frontend Developer</h2>
            <p className='font-medium text-slate-400 mb-10 leading-relaxed'>{Language[language].d2}</p>
            {/* <button className='text-base font-semibold bg-primary text-white py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'>{Language[language].cm}</button> */}
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="mt-6 relative lg:mt-0 lg:right-0 ">
              <img src="/poto.png" alt="Putri Mulyani" className='w-96 rounded-full lg:ml-24' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
