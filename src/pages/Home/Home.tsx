import React from 'react';

interface IHomeProps {
  children?: React.ReactNode;
}

const Home:React.FC<IHomeProps> = (props) => {
  return (
    <>
      <div className='w-full h-[100vh] pt-[12vh] flex flex-col '>
        <div className='w-full flex justify-between py-10 h-[28vh] '>
          <h1 className='text-8xl font-semibold  uppercase  '>Magnificent <br></br> Architecture Design</h1>
          <h3 className='self-end w-[14vw] text-right text-xl text-zinc-300'>Un diseño que te haga sentir en tu lugar seguro</h3>
        </div>
        <img src="../../../photos/landing.jpg" alt="" className='h-[48vh] ' />
        <div className='h-[12vh] relative'>
          <div className='bg-zinc-800   flex items-center justify-evenly absolute top-0 bottom-0 -right-[7vw] -left-[7vw]'>
          <div><h1>layluck</h1></div>
          <div><h1>layluck</h1></div>
          <div><h1>layluck</h1></div>
          <div><h1>layluck</h1></div>
          <div><h1>layluck</h1></div>
          <div><h1>layluck</h1></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
