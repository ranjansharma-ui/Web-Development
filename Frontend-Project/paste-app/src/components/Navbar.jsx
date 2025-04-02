import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
            <nav className='bg-gray-800 p-4'>
      <div className='flex flex-row gap-6 justify-center'>
        <NavLink
          to="/"
          className={({ isActive }) => 
            `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
            ${isActive 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pastes"
          className={({ isActive }) => 
            `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
            ${isActive 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
          }
        >
          Pastes
        </NavLink>
      </div>
    </nav>
    </div>

  )
}

export default Navbar