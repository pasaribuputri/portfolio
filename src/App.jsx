import React from 'react'
import Header from './assets/pages/Header'
import {Outlet} from 'react-router-dom'
import { useState } from 'react'
import { ThemeContext } from './Theme'
import { createContext } from 'react'


export const LanguageContext = createContext({
  language: null,
  setLanguage: ()=> {}
})

export const Language = {
  id: {
    home: "Beranda",
    about: "Tentang",
    portfolio: "Portfolio",
    contact : "Kontak",
    cm : "Hubungi Aku"
  },
  en: {
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
    contact : "Contact",
    cm: "Contact Me"
  }
}

const App = () => {
  const [theme, setTheme] = useState("light")
  const [language, setLanguage] = useState("id")

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Header/>
        <main>
          <Outlet/>
        </main>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  )
}

export default App