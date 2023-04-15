import React from 'react';

interface IAboutProps {
  children?: React.ReactNode;
}

const About:React.FC<IAboutProps> = (props) => {
  return (
    <>
      <div className='w-full h-[100vh] flex items-center'>
        <div className='flex flex-col justify-between h-[50vh]'>
          <h1 className='uppercase text-5xl font-bold'>about us</h1>
          <p className='w-3/5 text-xl text-zinc-200'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, libero laudantium earum dolor tempore voluptatem doloribus maiores id laboriosam nostrum necessitatibus veniam sit qui vero, distinctio accusantium voluptatibus, a sunt!
            Commodi eum nihil ad adipisci in. Omnis reprehenderit assumenda et quis corporis commodi totam molestiae ducimus, doloribus nihil dignissimos, quod quisquam nostrum exercitationem dolorem non! Ratione obcaecati explicabo asperiores iusto?
          
          </p>
          <button className='text-xl text-black w-[15vw] py-4  bg-white  hover:scale-105 hover:bg-black hover:border hover:border-white hover:text-white transition-all'>Read More</button>
        </div>
        <img src="../../../photos/people.jpg" alt="" className='h-[50vh]' />
      </div>
    </>
  );
}

export default About;
