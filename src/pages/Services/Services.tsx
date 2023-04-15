import React from 'react';

interface IServicesProps {
  children?: React.ReactNode;
}

const Services:React.FC<IServicesProps> = (props) => {
  return (
    <>
      <div className='w-full h-[100vh] flex items-center'>
        <div className='flex w-1/2 ' >
          <img src="../../../photos/building.jpeg" alt="" className='w-2/3 h-[65vh] object-cover' />
          <img src="../../../photos/building-2.jpg" alt="" className='ml-5 w-1/4 h-[65vh] object-cover' />
        </div>
        <div className='flex flex-col h-[65vh] justify-between px-20'>
          <div>

          <h1 className='uppercase text-5xl font-bold'>We build  your dream building</h1>
          <span className='text-xl text-zinc-300 '>why you should choose us, we have many advantages such as:</span>
          </div>
          <ul className='list-disc text-2xl h-1/2  flex flex-col justify-between ml-5'>
            <li>Affordable cost</li>
            <li>Highly experienced</li>
            <li>Time Management</li>
            <li>Modern Design</li>
            <li>Best Interior Choice</li>
          </ul>
          <button className='text-xl text-black w-[15vw] py-4  bg-white  hover:scale-105 hover:bg-black hover:border hover:border-white hover:text-white transition-all'>
            Show More
          </button>
        </div>
      </div>
    </>
  );
}

export default Services;
