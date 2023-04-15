import React from 'react';

interface IContactProps {
  children?: React.ReactNode;
}

const Contact:React.FC<IContactProps> = (props) => {
  return (
    <>
      <div className='w-full h-[100vh] flex flex-col   relative '>
        <div className="h-[50vh] bg-image flex items-center justify-center absolute top-[15vh] -left-[7vw] -right-[7vw]">
            <h1 className='text-6xl'>
              Envianos un mensaje sobre tu proyecto 
            </h1> 
        </div>
        <div className='w-[99.1vw] absolute bottom-[26vh] z-50 -left-[7vw] -right-[7vw] h-1  bg-zinc-300'>

        </div>
        <div className='w-full h-1/4   flex justify-between absolute  bottom-0 left-0 right-0 '>
          <div className=' flex flex-col justify-between py-10'>
              <div>
                <div>
                  <h1 className='text-4xl'>Sibaikole</h1>
                  <span className=''> Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Corrupti veritat</span>
                </div>
              </div>
              <span>2023 C Sibaikole </span>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col'>
              <h3>Menu</h3>
              <ul className='flex'>
                <li className='mx-2'>Inicio</li>
                <li className='mx-2'>Servicios</li>
                <li className='mx-2'>Trabajos</li>
                <li className='mx-2'>Historia</li>
              </ul>
            </div>
            <div className='flex flex-col'>
              <h3>Social</h3>
              <ul className='flex'>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
