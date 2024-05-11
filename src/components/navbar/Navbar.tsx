import React, { useState, useEffect, useRef } from 'react';
import { BiBell } from 'react-icons/bi';
import { FaBars, FaTimes, FaWallet } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const closeSidebarOnEscape = (e) => {
      if (e.key === 'Escape') {
        setIsSidebarOpen(false);
      }
    };

    const closeSidebarOnClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('keydown', closeSidebarOnEscape);
    document.addEventListener('mousedown', closeSidebarOnClickOutside);

    return () => {
      document.removeEventListener('keydown', closeSidebarOnEscape);
      document.removeEventListener('mousedown', closeSidebarOnClickOutside);
    };
  }, []);

  return (
    <div className='w-full sticky top-0 bg-[#0A0706] py-4 shadow-xl'>
      <div className='flex justify-between mx-5 items-center rounded-xl h-[50px]'>
        <div className='bg-[#0A0706] cursor-pointer h-[48px] flex items-center justify-center rounded-lg w-[48px]' onClick={toggleSidebar}>
          <FaBars />
        </div>
        <NavLink to="/">
          <img src="./assets/img/logo1.png" alt="logo1" />
        </NavLink>
        <button>
          <div className='bg-[#0A0706] h-[48px] flex items-center justify-center rounded-lg w-[48px]'>
            <BiBell />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            ref={sidebarRef}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className='fixed z-20 top-0 left-0 h-full w-64 bg-[#110400] rounded-tr-lg rounded-br-lg text-white py-4'
          >
            <button className="absolute top-2 right-2 text-white" onClick={toggleSidebar}>
              <FaTimes />
            </button>
            <ul className='p-4 tracking-wider'>
              <li className='group '>
                <NavLink className="flex mb-4 flex-col justify-start w-auto" to="/profile" onClick={toggleSidebar}>
                  <img className="w-24 h-24 rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0khaUcbpblqXKUuxIpxyGB9VqRKmENQZWjbk8uXGEIg&s" alt="profile image" />
                  <p className='-mb-2'>Bibek Jha</p>
                  <p className='text-sm'>user@gmail.com</p>
                  <li className='hover:text-orange-700'>
                    <NavLink className="flex -mt-2 gap-4 items-center justify-start w-full" to="/wallet" onClick={toggleSidebar}>
                      <FaWallet />
                      <p>Rs. 2000</p>
                    </NavLink>
                  </li>
                </NavLink>
              </li>
              <div className='w-full my-3 h-[1px] bg-orange-400'></div>

              <li className='group hover:text-orange-700'>
                <NavLink className="flex items-center justify-start w-full" to="/profile" onClick={toggleSidebar}>
                  <img className="w-8 h-8 mr-2" src="./assets/img/sprofile.png" alt="profile icon" />
                  <p>Profile</p>
                </NavLink>
              </li>
              <div className='w-full my-3 h-[1px] bg-orange-400'></div>
              <li className='group hover:text-orange-700'>
                <NavLink to="https://wa.me/+971563664115" className="flex items-center justify-start w-full"  onClick={toggleSidebar}>
                  <img className="w-8 h-8 mr-2" src="./assets/img/pdeposit.png" alt="deposit icon" />
                  <p>Deposit</p>
                </NavLink>
              </li>
              <div className='w-full my-3 h-[1px] bg-orange-400'></div>

              <li className='group hover:text-orange-700'>
                <NavLink to="https://wa.me/+971563664115" className="flex items-center justify-start w-full"  onClick={toggleSidebar}>
                  <img className="w-8 h-8 mr-2" src="./assets/img/pwithdraw.png" alt="withdraw icon" />
                  <p>Withdraw</p>
                </NavLink>
              </li>
              <div className='w-full my-3 h-[1px] bg-orange-400'></div>

              <li className='group hover:text-orange-700'>
                <NavLink className="flex items-center justify-start w-full" to="/login" onClick={toggleSidebar}>
                  <img className="w-8 h-8 mr-2" src="./assets/img/sprofile.png" alt="profile icon" />
                  <p>Login</p>
                </NavLink>
              </li>
              <div className='w-full my-3 h-[1px] bg-orange-400'></div>

              <li className='group hover:text-orange-700'>
                <NavLink className="flex items-center justify-start w-full" to="/signup" onClick={toggleSidebar}>
                  <img className="w-8 h-8 mr-2" src="./assets/img/sprofile.png" alt="profile icon" />
                  <p>Signup</p>
                </NavLink>
              </li>
              <div className='w-full my-3 h-[1px] bg-orange-400'></div>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
