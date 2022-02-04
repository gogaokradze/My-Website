import React from 'react';
import Projects from './Projects';

const HomePage = () => {
  return (
    <>
    <div className='w-2/3 mx-auto mb-96'>
    <div className='w-2/5 pt-10'>
      <p className='text-4xl leading-relaxed'>Hi, I'm <span className='font-semibold'>Goga Okradze</span>. Web developer. I have deep interest in creating web apps.</p>
    </div>
    </div>
    <Projects/>
    </>
  );
};

export default HomePage;
