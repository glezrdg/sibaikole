import React from 'react';

import {Header} from './';


interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout:React.FC<ILayoutProps> = ({children}) => {
  return (
    <>
     <div className='w-full h-full bg-black text-white'>
        <Header></Header>
        <div className='px-[7vw] w-full' >
          {children}
        </div>
     </div>
    </>
  );
}

export default Layout;
