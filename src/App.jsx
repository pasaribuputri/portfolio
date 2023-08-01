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
    cm : "Hubungi Saya",
    t1: "Tentang Saya",
    t2: "Saya seorang mahasiswa D3 jurusan Manajemen Informatika di Pasim National University dan junior back end & frontend developer dengan keahlian utama React JS dan Node Js. Saya memiliki minat yang kuat dalam pengembangan web dan senang mengambil tantangan baru dalam mengembangkan antarmuka pengguna yang menarik dan responsif. Dengan pengetahuan dan pengalaman saya di React JS, saya siap untuk terus belajar dan berkembang dalam karir frontend development saya",
    t3: "Mari Berteman",
    t4: "Jika ada yang ingin berkolaborasi atau memiliki pertanyaan, jangan ragu untuk menghubungi saya. Terima kasih!",
    d1: "Halo 👋, saya",
    d2: `" Saya Putri Mulyani, seorang junior Back End & Frontend Developer dengan antusiasme tinggi dalam pengembangan perangkat lunak. Saya senang mempelajari hal-hal baru dan selalu mencari praktik terbaik di industri ini. Saya memiliki kemampuan dalam pemecahan masalah dan siap berkontribusi untuk proyek yang menantang. Terima kasih!!! . "`,
    k1: "Nama",
    k2: "Pesan",
    k3: "Kirim"
  },
  en: {
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
    contact : "Contact",
    cm: "Contact Me",
    t1: "About Me",
    t2: "I am a D3 student majoring in Informatics Management at Pasim National University and a junior back end & frontend developer with major expertise in React JS and Node Js. I have a strong interest in web development and love taking on the new challenge of developing attractive and responsive user interfaces. With my knowledge and experience in React JS, I am ready to continue learning and growing in my frontend development career.",
    t3: "let's be friends",
    t4: "If anyone wants to collaborate or have questions, feel free to contact me. Thank You!",
    d1: "Hi there 👋, i'm ",
    d2:` " I'm Putri Mulyani, a junior Back End & Frontend Developer with great enthusiasm in software development. I love learning new things and am always on the lookout for the best practices in the industry. I have ability in problem solving and ready to contribute to challenging projects. Thank You !!! ." `,
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

