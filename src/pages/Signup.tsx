import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <body className="bg-[#000000] flex flex-col items-center justify-center min-h-screen p-4">
        <div className="flex justify-between border max-w-sm border-orange-600 w-full mb-10 h-12 rounded-full bg-black">
        <button className="bg-transparent text-white tracking-widest font-semibold py-2 px-10 rounded-full"><NavLink to="/login">Login</NavLink></button>
          <button className="bg-orange-500 text-white tracking-widest font-bold py-2 px-10 rounded-full">Signup</button>
        </div>
      <div className="w-full max-w-sm mx-auto rounded-2xl border border-gray-600 shadow-lg p-5 bg-[#0F0F0F]">
        
       <div className='font-semibold tracking-widest text-white text-xl text-center'>Let's Get Started</div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-white text-sm font-semibold tracking-widest mb-2">User Email</label>
          <div className="flex items-center bg-white text-black rounded-xl mb-4">
            <input
              type='text'
              id="text"
              className="bg-transparent flex-1 p-3 rounded-l-full text-black leading-tight focus:outline-none"
              placeholder="Enter your Email"
            />
            
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="block text-white text-sm font-semibold tracking-widest mb-2">Phone Number</label>
          <div className="flex items-center bg-white text-black rounded-xl mb-4">
            <input
              type='text'
              id="text"
              className="bg-transparent flex-1 p-3 rounded-l-full text-black leading-tight focus:outline-none"
              placeholder="Enter your Phone Number"
            />
            
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="block text-white text-sm font-semibold tracking-widest mb-2">Refer Code</label>
          <div className="flex items-center bg-white text-black rounded-xl mb-4">
            <input
              type='text'
              id="text"
              className="bg-transparent flex-1 p-3 rounded-l-full text-black leading-tight focus:outline-none"
              placeholder="Enter your Refer Code"
            />
            
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="block text-white text-sm font-semibold tracking-widest mb-2">Password</label>
          <div className="flex items-center bg-white text-black rounded-xl mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="bg-transparent flex-1 p-3 rounded-l-full text-black leading-tight focus:outline-none"
              placeholder="••••••••"
            />
            <button
              onClick={togglePasswordVisibility}
              className="p-4 rounded-r-full text-black hover:text-white"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>
        <button className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-orange-600">Create Account</button>
        
      </div>

      
    </body>
  );
}

export default Signup;


