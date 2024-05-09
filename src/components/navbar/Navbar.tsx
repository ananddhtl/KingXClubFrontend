import React from 'react'
import { BiBell } from 'react-icons/bi'
import { FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full my-4 flex '>
        <div className='flex justify-between items-center rounded-xl w-[342px] h-[50px]  mx-3'>
            <NavLink to ="/">
            <div className='bg-[#0A0706] h-[48px] flex items-center justify-center rounded-lg w-[48px]'><FaBars/></div>
            </NavLink>
            <NavLink to="/">
                <img src="./assets/img/logo1.png" alt="logo1"/>
            </NavLink>
            <button>
            <div className='bg-[#0A0706] h-[48px] flex items-center justify-center rounded-lg w-[48px]'><BiBell/></div>
            </button>
      </div>
    </div>
  )
}

export default Navbar
