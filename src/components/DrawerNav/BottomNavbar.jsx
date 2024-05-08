import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDice, faComments, faFootballBall, faBars, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function BottomNavbar() {
    const [activeButton, setActiveButton] = useState('home');

    return (
        <div>
            <div className="fixed w-full justify-center  bottom-0 z-10 left-0 right-0 bg-transparent backdrop-blur-lg md:hidden">
                <nav className="flex h-auto w-full justify-around items-center ">
                <NavLink className="flex justify-center h-[80px] w-[43px] flex-col hover:text-orange-500" to="/">
                        <img className="" src= "./assets/img/games.png"/>
                        <p className='text-sm -mt-2 text-center'>Games</p>
                    </NavLink>

                    <NavLink className="flex justify-center h-[80px] w-[43px] flex-col hover:text-orange-500" to="/">
                        <img className="" src= "./assets/img/bids.png"/>
                        <p className='text-sm  -mt-2 text-center'>Bids</p>
                    </NavLink>

                    <NavLink className=" flex justify-center h-[75px] items-start" to="/">
                        <img className='h-[75px] w-[75px]' src= "./assets/img/contact.png"/>
                    </NavLink>

                    <NavLink className="flex justify-center h-[80px] w-[43px] flex-col hover:text-orange-500" to="/">
                        <img className="" src= "./assets/img/result.png"/>
                        <p className='text-sm  -mt-2 text-center'>Result</p>
                    </NavLink>

                    <NavLink className="flex justify-center h-[80px] w-[43px] flex-col hover:text-orange-500" to="/">
                        <img className="" src= "./assets/img/support.png"/>
                        <p className='text-sm  -mt-2 text-center'>Support</p>
                    </NavLink>
                </nav>
            </div>
        </div>
    );
}

export default BottomNavbar;
