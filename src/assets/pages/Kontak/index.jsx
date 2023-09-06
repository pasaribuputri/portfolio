import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../../Theme';
import { Language, LanguageContext } from '../../../App';

const Kontak = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const sect = `pt-36 pb-32 ${theme === 'dark' ? 'bg-slate-700' : 'bg-white'}`;

  return (
    <section id='kontak' className={sect}>
      <div className="container">
        <div className='w-full px-4'>
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className='font-semibold text-lg text-primary mb-2'>{Language[language].contact}</h4>
            <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>{Language[language].cm}</h2>
            <p className='font-medium text-md text-secondary md:text-lg'>{Language[language].t4}</p>
          </div>
        </div>
        <div className='w-full lg:w-2/3 lg:mx-auto'>
          <div className="w-full mb-8 px-4">
            <p className='text-base font-bold text-primary'>Nomor WhatsApp : +6283193064779</p>
          </div>
          <div className="w-full mb-8 px-4">
            <p className='text-base font-bold text-primary'>Email : pasaribuputri02@gmail.com</p>
          </div>
          <div className="w-full mb-8 px-4">
            <a className='text-base font-bold text-primary' href="https://www.linkedin.com/in/putri-mulyani-94743a26b/">LinkedIn : https://www.linkedin.com/in/putri-mulyani-94743a26b/</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kontak;
