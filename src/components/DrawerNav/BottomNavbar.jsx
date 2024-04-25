import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDice, faComments, faFootballBall, faBars, faTrophy } from '@fortawesome/free-solid-svg-icons';

function BottomNavbar() {
    const [activeButton, setActiveButton] = useState('home');

    return (
        <div>
            <div className="fixed bottom-0 z-10 left-0 right-0 bg-[#0D0F12] md:hidden">
                <nav className="flex justify-between items-center ">
                    <button>
                    <a href="#"
                        className={`btn ${activeButton === 'home' ? 'text-orange-600' : 'text-white'}`}
                        onMouseEnter={() => setActiveButton('home')}
                    >
                        <div className="mb-1">
                            <FontAwesomeIcon icon={faHome} size="lg" />
                        </div>
                        Home
                    </a>
                    </button>
                    <button>
                    <a href="#game"
                        className={`btn ${activeButton === 'casinos' ? 'text-orange-600' : 'text-white'}`}
                        onMouseEnter={() => setActiveButton('casinos')}
                    >
                        <div className="mb-1">
                            <FontAwesomeIcon icon={faDice} size="lg" />
                        </div>
                        Game
                    </a>
                    </button>
                    <button>
                    <a href="#contactus"
                        className={`btn ${activeButton === 'chat' ? 'text-orange-600' : 'text-white'}`}
                        onMouseEnter={() => setActiveButton('chat')}
                    >
                        <div className="mb-1">
                            <FontAwesomeIcon icon={faComments} size="lg" />
                        </div>
                        Contact
                    </a>
                    </button>
                   <button>
                   <a href="#lucky-winner"
                        className={`btn ${activeButton === 'sports' ? 'text-orange-600' : 'text-white'}`}
                        onMouseEnter={() => setActiveButton('sports')}
                    >
                        <div className="mb-1">
                            <FontAwesomeIcon icon={faTrophy} size="lg" />
                        </div>
                        Winner
                    </a>
                   </button>
                   <button>
                   <a href="#result"
                        className={`btn ${activeButton === 'menu' ? 'text-orange-600' : 'text-white'}`}
                        onMouseEnter={() => setActiveButton('menu')}
                    >
                        <div className="mb-1">
                            <FontAwesomeIcon icon={faBars} size="lg" />
                        </div>
                        Result
                    </a>
                   </button>
                </nav>
            </div>
        </div>
    );
}

export default BottomNavbar;
