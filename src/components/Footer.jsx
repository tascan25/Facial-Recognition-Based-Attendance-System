import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="relative bottom-0 w-full flex flex-wrap justify-center items-center gap-4 bg-[#0b0b0b] p-4">
      <span className="gradient-text-main font-semibold font-font_pops w-full h-fit justify-start flex p-2">
        SmartAttend
      </span>
      <div className="w-full h-fit flex justify-center gap-5 items-center p-2">
        <Link to='/'><span className='text-slate-300 font-font_pops text-sm'>Home</span></Link>
        <span className='text-slate-300 font-font_pops text-base'>|</span>
        <Link to='/about'><span className='text-slate-300 font-font_pops text-sm'>About</span></Link>
        <span className='text-slate-300 font-font_pops text-base'>|</span>
        <a href='https://github.com/tascan25' target='_blank' rel='noopener noreferrer' className='text-slate-300 font-font_pops text-sm'>Github</a>
        <span className='text-slate-300 font-font_pops text-base'>|</span>
        <a href='https://www.linkedin.com/in/sakshamtyagi25' target='_blank' rel='noopener noreferrer' className='text-slate-300 font-font_pops text-sm'>LinkedIn</a>
      </div>
      <span className="text-base text-slate-200 font-font_pops font-medium">
        &copy; 2024 SmartAttend. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
