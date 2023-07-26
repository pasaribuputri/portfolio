import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../../Theme'


const Kontak = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  const sect = `pt-36 pb-32 ${theme === 'dark' ? 'bg-slate-700' : 'bg-white'}`

  return (
        <section id='kontak' className={sect}>
      <div className="container">
        <div className='w-full px-4'>
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className='font-semibold text-lg text-primary mb-2'>Contact</h4>
              <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>Contact Me</h2>
              <p className='font-medium text-md text-secondary md:text-lg'>If anyone wants to collaborate or have questions, feel free to contact me. Thank You!</p>
            </div>
        </div>
        <form>
          <div className='w-full lg:w-2/3 lg:mx-auto'>
          <div className="w-full mb-8 px-4">
            <label htmlFor="name" className='text-base font-bold text-primary'>Name</label>
            <input type="text" id='name' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary' />
          </div>
          <div className="w-full mb-8 px-4">
            <label htmlFor="email" className='text-base font-bold text-primary'>Email</label>
            <input type="text" id='email' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary' />
          </div>
          <div className="w-full mb-8 px-4">
            <label htmlFor="pesan" className='text-base font-bold text-primary'>Message</label>
            <textarea type="text" id='name' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32' ></textarea>
          </div>
          <div className="w-full px-4">
            <button className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500'>Kirim</button>
          </div>
        </div>
        </form>
      </div>
    </section>

  )
}

export default Kontak