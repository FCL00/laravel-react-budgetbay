import React from 'react'
import { NavLink } from 'react-router'
const Header = () => {
  return (
    <header className='header bg-[#181818] shadow-xl fixed w-full z-10 p-4'>
        <nav className='flex justify-between text-white'>
            <NavLink to="/" className='text-2xl font-bold' href="">Foodies</NavLink>
            <div className="nav-links space-x-4">
                <NavLink to="/community">Community</NavLink>
                <NavLink to="/">Login</NavLink>
            </div>
        </nav>
    </header>
  )
}

export default Header