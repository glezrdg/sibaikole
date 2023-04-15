import React from 'react';

interface IPortfolioProps {
  children?: React.ReactNode;
}

const Portfolio:React.FC<IPortfolioProps> = (props) => {
  return (
    <>
      <div className='w-full h-[100vh] flex flex-col justify-center  '>
        <div className='flex flex-col h-1/5 justify-between py-5'>
          <h1 className='uppercase text-5xl font-bold'>Historial de Proyectos </h1>
          <span className='text-xl text-zinc-300 '>La mejor inversion es una segura</span>
          <div className='w-full flex justify-between'>
            <ul className='flex text-xl mb-2   overflow-hidden'>
              <li className='px-4 border-b border-white '>2023</li>
              <li className='px-4 border-b border-zinc-400 text-zinc-400 '>2022</li>
              <li className='px-4 border-b border-zinc-400 text-zinc-400 '>2021</li>
              <li className='px-4 border-b border-zinc-400 text-zinc-400 '>2020</li>
            </ul>
            <span>See all Projects</span>
          </div>
        </div>
        <div className='w-full h-1/2 grid grid-rows-2 grid-flow-col gap-5 '>
          <img src="../../../photos/house.jpg" alt="" className='row-span-2 h-full object-cover object-center' />
          <img src="../../../photos/house-2.jpg" alt="" className='col-span-2  h-full ' />
          <img src="../../../photos/house-3.jpg" alt="" className='col-span-2 h-full' />
          <img src="../../../photos/house-4.jpg" alt="" className='row-span-2  h-full' />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
