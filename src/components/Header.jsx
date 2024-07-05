import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header>
      <nav className='w-full p-4 flex justify-between bg-[#0b0b0b]  '>
        <div>
            <Link to='/'><span className='text-lg text-slate-50 cursor-pointer'>SmartAttend</span></Link>
        </div>
        <div className='flex justify-center items-center gap-5'>
          <Link to='/'><span className='text-lg text-slate-50 cursor-pointer hover:scale-[0.9] transform transition-all ease-in-out duration-300 hover:text-slate-400'>Home</span></Link>
            <Link to='/about'><span className='text-lg text-slate-50 cursor-pointer hover:scale-[0.9] transform transition-all ease-in-out duration-300 hover:text-slate-400'>About</span></Link>
            
        </div>
      </nav>
    </header>
  )
}

export default Header
