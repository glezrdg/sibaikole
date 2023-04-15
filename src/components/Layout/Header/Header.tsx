import React from 'react';

interface IHeaderProps {
  children?: React.ReactNode;
}

const Header:React.FC<IHeaderProps> = (props) => {
  return (
    <>
      <div className='w-full h-[12vh] fixed bg-black px-[7vw] flex items-center justify-between border-b border-zinc-600 cursor-pointer z-50'>
        <h1 className='text-3xl font-bold'>SIBAIKOLE</h1>
          <ul className='flex w-1/4 justify-between items-center font-bold '>
            <li className='mx-2 underline underline-offset-8 '>Inicio</li>
            <li className='mx-2 text-zinc-300  hover:text-white transition-all'>Servicios</li>
            <li className='mx-2 text-zinc-200'>Trabajos</li>
            <li className='mx-2 text-zinc-200'>Historia</li>
          </ul>
       
        <button className='bg-white text-black font-semibold text-lg px-10 py-3 hover:scale-105 hover:bg-black hover:border hover:border-white hover:text-white transition-all'>Escribenos</button>
      </div>
    </>
  );
}

export default Header;
