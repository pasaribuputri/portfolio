import React from 'react'
import Proyek from '../../components/Proyek'
import { useContext } from 'react'
import { ThemeContext } from '../../../Theme'


const projek = [
    {
        id: 1,
        judul: "pmps pages",
        deskripsi: `Panel admin yang intuitif dan aman telah dirancang untuk memudahkan admin dalam mengelola buku, termasuk menambah, mengedit, atau menghapus buku dengan cepat dan efisien. Dengan tambahan fitur catatan riwayat perubahan dan laporan, pengelolaan toko buku menjadi lebih mudah dan terorganisir.`,
        url: "https://github.com/pasaribuputri/pmps-pages"
    },
    {
        id: 2,
        judul: "Petrichor Shop",
        deskripsi: "Website ini adalah hasil dari Ujian Tengah Semester (UTS) Pelatihan React, yang menampilkan simulasi penjualan perangkat elektronik dengan fitur CRUD. Dibuat dengan tampilan menarik dan fungsional, website ini memungkinkan pengguna untuk menambahkan, melihat, mengedit, dan menghapus produk dengan mudah.",
        url: "https://github.com/pasaribuputri/uts-react"
    },
    ,
    {
        id: 3,
        judul: "Divisi Kesehatan",
        deskripsi: `Divisi Kesehatan adalah bagian penting dari Program Beasiswa PUB yang bertanggung jawab untuk menjaga kesejahteraan mahasiswa dalam program beasiswa. Untuk mempermudah pengelolaan divisi ini, telah dibuat sebuah website khusus yang bertujuan untuk mengintegrasikan dan mengelola informasi terkait kesehatan mahasiswa dengan lebih efisien.`,
        url: "https://github.com/pasaribuputri/Divisi-Kesehatan"
    },
    {
      id:4,
      judul: "Logika Matematika",
      deskripsi: `Aplikasi Logika Matematika yang saya buat menggunakan bahasa pemrograman C memiliki fitur yang memungkinkan pengguna (user) untuk membuat, mengedit, dan menghapus akun, serta mengerjakan soal-soal logika. Setelah menyelesaikan soal, pengguna dapat melihat nilai mereka sendiri dan membandingkannya dengan peringkat tertinggi. Di sisi lain, administrator (admin) memiliki akses untuk mengelola pengguna dengan melihat daftar pengguna yang terdaftar, serta mengedit atau menghapus akun pengguna jika diperlukan. Dengan demikian, aplikasi ini memberikan pengalaman belajar logika yang interaktif dan memudahkan administrator dalam mengelola pengguna.`,
      url: "https://github.com/pasaribuputri/Logika-Matematika"
    },
    {
      id: 5,
      judul: "Piem store",
      deskripsi: `Piem Store adalah tampilan web HTML yang dirancang untuk menampilkan berbagai produk sepatu yang tersedia untuk penjualan. Website ini menampilkan produk-produk sepatu dengan gambar, deskripsi, harga, dan mungkin juga informasi lainnya seperti ukuran dan warna yang tersedia. Pengguna dapat menjelajahi berbagai pilihan sepatu dan, jika tertarik, dapat melakukan pembelian melalui tombol atau tautan yang disediakan.`,
      url: "https://github.com/pasaribuputri/piem-store"
    },
    {
      id: 6,
      judul: "SmileCare.id",
      deskripsi: "SmileCare.id adalah aplikasi berbasis web yang dirancang untuk memberikan kemudahan akses kepada pasien dalam melihat informasi klinik gigi SmileCare.id, dimana pengguna dapat menambahkan akun untuk melakukan janji temu. Aplikasi ini dibangun dengan menggunakan teknologi stack yang terdiri dari Express sebagai backend, PosgreeSQL sebagai basis data, dan React sebagai frontend.",
      url: "https://github.com/pasaribuputri/smile-care/"
    }

]

const Portfolio = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  const sect = `pt-36 pb-16 bg-slate-100 ${theme === 'dark' ? 'bg-slate-700' : 'bg-white'}`

  return (
    <section id='portfolio' className={sect}>
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