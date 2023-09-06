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
    about: "CV",
    portfolio: "Portfolio",
    contact : "Kontak",
    cm : "Hubungi Saya",
    t1: "Tentang Saya",
    t2: "hai",
    t3: "Mari Berteman",
    t4: "Jika ada yang ingin berkolaborasi atau memiliki pertanyaan, jangan ragu untuk menghubungi saya. Terima kasih!",
    d1: "Halo 👋, saya",
    d2: `"Saya adalah mahasiswa D3 Manajemen Informatika di Universitas Nasional Pasim dengan minat besar dalam pengembangan web. Saya telah menjalani perjalanan sebagai back-end dan front-end developer.
          Kemampuan utama saya adalah dalam pengembangan front-end menggunakan React JS, untuk menciptakan antarmuka pengguna menarik dan responsif. Di sisi back-end, saya berfokus pada penggunaan Node JS untuk membangun sistem yang efisien.
          Pengembangan web bagi saya adalah penggabungan kreativitas dan teknologi. Saya selalu mencari tantangan baru dan siap terus belajar dan berkembang dalam karier saya di bidang front-end dan back-end development."`,
    k1: "Nama",
    k2: "Pesan",
    k3: "Kirim"
  },
  en: {
    home: "Home",
    about: "CV",
    portfolio: "Portfolio",
    contact : "Contact",
    cm: "Contact Me",
    t1: "About Me",
    t2: "hai",
    t3: "let's be friends",
    t4: "If anyone wants to collaborate or have questions, feel free to contact me. Thank You!",
    d1: "Hi there 👋, i'm ",
    d2:`"I am a D3 Informatics Management student at Pasim National University with a great interest in web development. I have traveled as a back-end and front-end developer.
        My main skills are in front-end development using React JS, to create attractive and responsive user interfaces. On the back-end side, I focused on using Node JS to build efficient systems.
        Web development for me is a combination of creativity and technology. I am always looking for new challenges and am ready to continue learning and growing in my career in front-end and back-end development."`,
    k1: "Name",
    k2: "Message",
    k3: "Send"
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

