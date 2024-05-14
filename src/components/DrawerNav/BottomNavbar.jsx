import React from 'react';
import { NavLink } from 'react-router-dom';

function BottomNavbar() {

    return (
        <div>
            <div className="fixed w-full justify-center  bottom-0 z-10 left-0 right-0 bg-transparent backdrop-blur-lg md:hidden">
                <nav className="flex h-16 w-full justify-around items-center ">
                <NavLink className="flex justify-center h-[70px] w-[35px] flex-col hover:text-orange-500" to="/games">
                        <img className="" src= "./assets/img/games.png"/>
                        <p className='text-xs -mt-2 font-mono text-center'>Games</p>
                    </NavLink>

                    <NavLink className="flex justify-center h-[70px] w-[35px] flex-col hover:text-orange-500" to="/bid-history">
                        <img className="" src= "./assets/img/bids.png"/>
                        <p className='text-xs -mt-2 font-mono text-center'>Bids</p>
                    </NavLink>

                    <NavLink className=" flex justify-center h-[75px] items-center" to="https://wa.me/+971563664115">
                        <img className='h-[60px] w-[60px]' src= "./assets/img/contact.png"/>
                    </NavLink>

                    <NavLink className="flex justify-center h-[70px] w-[35px] flex-col hover:text-orange-500" to="/result">
                        <img className="" src= "./assets/img/result.png"/>
                        <p className='text-xs -mt-2 font-mono text-center'>Result</p>
                    </NavLink>

                    <NavLink className="flex justify-center h-[70px] w-[50px] flex-col  hover:text-orange-500" target='_blank' to="https://wa.me/+971563664115">
                        <img className=" w-[35px] justify-center ml-2" src= "./assets/img/support.png"/>
                        <p className='text-xs -mt-2 font-mono text-center'>Support</p>
                    </NavLink>
                </nav>
            </div>
        </div>
    );
}

export default BottomNavbar;
