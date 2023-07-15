import React from 'react'
import Proyek from '../../components/proyek'

const projek = [
    {
        id: 1,
        judul: "pmps pages",
        deskripsi: `Website toko buku yang menarik dan fungsional dengan fitur pencarian canggih, dan dilengkapi dengan fitur CRUD. Dibuat untuk memenuhi UAS Pelatihan Lanjutan Node Js. Nikmati pengalaman belanja buku yang seru!`,
        url: "https://github.com/pasaribuputri/pmps-pages"
    },
    {
        id: 2,
        judul: "Petrichor Shop",
        deskripsi: "Website ini adalah hasil dari Ujian Tengah Semester (UTS) Pelatihan React, yang menampilkan simulasi penjualan perangkat elektronik dengan fitur CRUD. Dibuat dengan tampilan menarik dan fungsional, website ini memungkinkan pengguna untuk menambahkan, melihat, mengedit, dan menghapus produk dengan mudah.",
        url: "https://github.com/pasaribuputri/uts-react"
    },

]

const Portfolio = () => {
  return (
    <section id='portfolio' className='pt-36 pb-16 bg-slate-100'>
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className='font-semibold text-lg text-primary mb-2'>Portfolio</h4>
            <h2 className='font-bold text-dark text-3xl mb-4'>Project</h2>
            <p className='font-medium text-md text-secondary'>Welcome to my portfolio!</p>
          </div>
        </div>
        <div className='w-full px-4 flex flex-wrap justify-center xl:mx-auto gap-1'>
          {
            projek.map((val)=>{
               return <Proyek key={val.id} judul={val.judul} deskripsi={val.deskripsi} url={val.url}/>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio