import React from 'react';

const Proyek = (props) => {
  return (
    <div className="mb-8 p-4 md:w-1/2 bg-slate-300 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-primary mb-4 text-center">{props.judul}</h2>
      <p className='font-medium text-base text-secondary mb-4'>{props.deskripsi}</p>
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-2 px-4 bg-primary text-white font-semibold text-center rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark transition duration-300 ease-in-out"
      >
        Kunjungi GitHub
      </a>
    </div>
  );
}

export default Proyek;
