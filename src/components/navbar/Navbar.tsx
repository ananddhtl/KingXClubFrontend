import { BiBell } from 'react-icons/bi'
import { FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full sticky -top-1 bg-[#0A0706] py-4 shadow-xl flex '>
        <div className='flex justify-between mx-5 items-center rounded-xl w-full h-[50px]'>
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
