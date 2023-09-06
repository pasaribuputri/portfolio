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
    <div className="pt-32 w-full bg-gray-100 min-h-screen py-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl text-primary font-semibold mb-4">Curriculum Vitae</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Putri Mulyani</h2>
          <p className="text-dark">Junior Web Developer</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
          <p className="text-dark">Email: pasaribuputri02@gmail.com</p>
          <p className="text-dark">Phone: +6283193064779</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Education</h3>
          <p className="text-dark">Diploma 3</p>
          <p className="text-dark">Manajemen Informatika</p>
          <p className="text-dark">Universitas Nasional Pasim</p>
          <p className="text-dark">2021 - 2023</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Skills</h3>
          <ul className="list-disc list-inside text-dark">
            <li>Front-End : HTML5, CSS, JavaScript, React Js</li>
            <li>Back-End  : Express Js, Node Js</li>
            <li>Databases: PostgreeSQL, MySQL </li>
            <li>Version Control : Git (Github)</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

  // return (
  //   <section id='about' className={sect}>
  //     <div className="container">
  //       <div className="flex flex-wrap">
  //         <div className="w-full px-4 mb-10 lg:w-1/2">
  //           <h4 className='font-bold uppercase text-primary text-lg mb-3'>{Language[language].t1}</h4>
  //           <h2 className='font-bold text-dark text-3xl mb-5 max-w-md lg:first-letter:text-4xl'>Junior Developer</h2>
  //           <p className='font-medium text-base text-secondary max-w-xl lg:text-lg'>{Language[language].t2}</p>
  //         </div>
  //         <div className="w-full px-4 lg:w-1/2">
  //           <h3 className='font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10'>{Language[language].t3}</h3>
  //           <p className='font-medium text-base text-secondary mb-6 lg:text-lg'>{Language[language].t4}</p>
  //           <div className='flex items-center'>
  //             {/* instagram */}
  //             <a href="https://instagram.com/putrimlypsb" target='blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white'>
  //               <FaInstagram/>
  //             </a>
  //             {/* github */}
  //             <a href="https://github.com/pasaribuputri" target='blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white'>
  //               <BsGithub/>
  //             </a>
  //             {/* linkedin */}
  //             <a href="https://www.linkedin.com/in/putri-mulyani-94743a26b/overlay/background-image/" target='blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white'>
  //               <BsLinkedin/>
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // )
// }

export default About