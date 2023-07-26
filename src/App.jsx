import React from 'react'
import Header from './assets/pages/Header'
import {Outlet} from 'react-router-dom'
import { useState } from 'react'
import { ThemeContext } from './Theme'

const App = () => {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </ThemeContext.Provider>
    
  )
}

export default App