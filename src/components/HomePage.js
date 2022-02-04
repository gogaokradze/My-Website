import React from 'react';
import Projects from './Projects';

const HomePage = () => {
  return (
    <>
    <div className='w-2/3 mx-auto mb-96'>
    <div className='lg:w-2/5 pt-10 w-full'>
      <p className='lg:text-4xl text-xl leading-relaxed'>Hi, I'm <span className='font-semibold'>Goga Okradze</span>. Web developer. I have deep interest in creating web apps.</p>
    </div>
    </div>
    <Projects/>
    </>
  );
};

export default HomePage;
