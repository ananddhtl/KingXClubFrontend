import React from "react";
import { NavLink } from "react-router-dom";

function BottomNavbar() {
    return (
        <div className="fixed w-full bottom-0 z-10 left-0 right-0 bg-[#030e03] backdrop-blur-lg sm:hidden">
            <nav className="flex h-20 w-full justify-around items-center ">
                <NavLink
                    className="flex justify-center h-[70px] w-[35px] flex-col hover:text-orange-500"
                    to="/"
                >
                    <img className="" src="./assets/img/games.png" />
                    <p className="text-xs -mt-2 font-mono text-center oleo-script ">Games</p>
                </NavLink>

                <NavLink
                    className="flex justify-center h-[70px] w-[35px] flex-col hover:text-orange-500"
                    to="/bid-history"
                >
                    <img className="" src="./assets/img/bids.png" />
                    <p className="text-xs -mt-2 font-mono text-center oleo-script ">Bids</p>
                </NavLink>

                <NavLink
                    className=" flex justify-center h-[75px] items-center"
                    to="https://wa.me/+9779822798040?text=I%27m%20interested%20in%20your%20games"
                >
                    <img className="h-[60px] w-[60px]" src="./assets/img/contact.png" />
                </NavLink>

                <NavLink
                    className="flex justify-center h-[70px] w-[35px] flex-col hover:text-orange-500"
                    to="/result"
                >
                    <img className="" src="./assets/img/result.png" />
                    <p className="text-xs -mt-2 font-mono text-center oleo-script ">Result</p>
                </NavLink>

                <NavLink
                    className="flex justify-center h-[70px] w-[50px] flex-col  hover:text-orange-500"
                    target="_blank"
                    to="https://wa.me/+9779822798040"
                >
                    <img className=" w-[35px] justify-center ml-2" src="./assets/img/support.png" />
                    <p className="text-xs -mt-2 font-mono text-center oleo-script ">Support</p>
                </NavLink>
            </nav>
        </div>
    );
}

export default BottomNavbar;
