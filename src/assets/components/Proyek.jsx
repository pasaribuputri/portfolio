import React from 'react'

const proyek = (props) => {
  return (
    <div className="mb-12 p-4 md:w-1/2 bg-slate-300 rounded-lg">
        <h3 className='font-semibold text-xl text-dark mt-5 mb-3 text-center'>{props.judul}</h3>
        <a className='font-semibold text-md text-dark mt-5 mb-5 text-center' href={props.url}>{props.url}</a>
        <p className='font-medium text-base text-secondary mt-5'>{props.deskripsi}</p>
    </div>
  )
}

export default proyek