import { useState, useEffect, useRef } from "react";
import { BiBell } from "react-icons/bi";
import { FaBars, FaTimes, FaWallet } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useProfileContext } from "@/App";
import LogoCropped from "@/assets/image/logo_cropped.png";
import { logout } from "@/api/api";

const Navbar = () => {
    const { user, setUser } = useProfileContext();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const closeSidebarOnEscape = (e) => {
            if (e.key === "Escape") {
                setIsSidebarOpen(false);
            }
        };

        const closeSidebarOnClickOutside = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener("keydown", closeSidebarOnEscape);
        document.addEventListener("mousedown", closeSidebarOnClickOutside);

        return () => {
            document.removeEventListener("keydown", closeSidebarOnEscape);
            document.removeEventListener("mousedown", closeSidebarOnClickOutside);
        };
    }, []);

    return (
        <div className="w-full sticky top-0 bg-[#0A0706] py-4 shadow-xl">
            <div className="flex justify-between mx-5 items-center rounded-xl h-[50px]">
                <div
                    className="bg-[#0A0706] cursor-pointer h-[48px] flex items-center justify-center rounded-lg w-[48px]"
                    onClick={toggleSidebar}
                >
                    <FaBars />
                </div>
                <NavLink to="/">
                    <img src={LogoCropped} alt="logo" />
                </NavLink>
                <button>
                    <div className="bg-[#0A0706] h-[48px] flex items-center justify-center rounded-lg w-[48px]">
                        <BiBell />
                    </div>
                </button>
            </div>
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        ref={sidebarRef}
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="fixed z-20 top-0 left-0 h-full w-64 bg-[#110400] rounded-tr-lg rounded-br-lg text-white py-4"
                    >
                        <div className="flex justify-between items-stretch p-5">
                            {user ? (
                                <NavLink
                                    className="flex flex-col justify-start w-auto"
                                    to="/profile"
                                    onClick={toggleSidebar}
                                >
                                    <img
                                        className="w-24 h-24 rounded-full "
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0khaUcbpblqXKUuxIpxyGB9VqRKmENQZWjbk8uXGEIg&s"
                                        alt="profile image"
                                    />
                                    <p className="-mb-2 text-lg">{user?.name}</p>
                                    <p className="text-xs">{user?.email}</p>
                                    <div
                                        className="flex gap-4 items-center justify-start w-full"
                                        onClick={toggleSidebar}
                                    >
                                        <FaWallet className="text-orange-500"/>
                                        <p>Rs. {user?.amount}</p>
                                    </div>
                                </NavLink>
                            ) : (
                                <img src={LogoCropped} className="w-16" alt="logo" />
                            )}
                            <button className="mt-5 text-white" onClick={toggleSidebar}>
                                <FaTimes />
                            </button>
                        </div>
                        <hr className="border-[#410F08] border-2" />
                        <ul className="p-4 child:my-3">

                            <li className="group hover:text-orange-700">
                                <NavLink
                                    className="flex items-center justify-start w-full"
                                    to="/profile"
                                    onClick={toggleSidebar}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18.9998 21V19C18.9998 17.9391 18.5783 16.9217 17.8282 16.1716C17.078 15.4214 16.0606 15 14.9998 15H8.99976C7.93889 15 6.92147 15.4214 6.17133 16.1716C5.42118 16.9217 4.99976 17.9391 4.99976 19V21"
                                            stroke="#F6571E"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M11.9998 11C14.2089 11 15.9998 9.20914 15.9998 7C15.9998 4.79086 14.2089 3 11.9998 3C9.79062 3 7.99976 4.79086 7.99976 7C7.99976 9.20914 9.79062 11 11.9998 11Z"
                                            stroke="#F6571E"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <p>Profile</p>
                                </NavLink>
                            </li>
                            <li className="group hover:text-orange-700">
                                <NavLink
                                    to="https://wa.me/+971563664115"
                                    target="_blank"
                                    className="flex items-center justify-start w-full"
                                    onClick={toggleSidebar}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.6 19.167H2.4C1.1 19.167 0 18.067 0 16.767V12.167H2V16.367C2 16.967 2.4 17.167 3 17.167H17C17.6 17.167 18 16.767 18 16.167V12.167H20V16.767C20 18.067 18.9 19.167 17.6 19.167Z"
                                            fill="#F6571E"
                                        />
                                        <path
                                            d="M13.572 10.0775C13.4103 9.9919 13.2117 10.0218 13.0824 10.1511L11.4 11.8335V7.83349C11.4 5.8335 11.4 2.9335 13.8 0.833496C10.4 1.4335 8.7 4.0335 8.6 7.83349V11.8335L6.9176 10.1511C6.78826 10.0218 6.58968 9.9919 6.42802 10.0775L5.49859 10.5695C5.25083 10.7007 5.20069 11.0342 5.39891 11.2324L9.70537 15.5389C9.86809 15.7016 10.1319 15.7016 10.2946 15.5389L14.6011 11.2324C14.7993 11.0342 14.7492 10.7007 14.5014 10.5695L13.572 10.0775Z"
                                            fill="#F6571E"
                                        />
                                    </svg>

                                    <p>Deposit</p>
                                </NavLink>
                            </li>

                            <li className="group hover:text-orange-700">
                                <NavLink
                                    to="https://wa.me/+971563664115"
                                    target="_blank"
                                    className="flex items-center justify-start w-full"
                                    onClick={toggleSidebar}
                                >
                                    <svg
                                        width="20"
                                        height="18"
                                        viewBox="0 0 20 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.6 17.9998H2.4C1.1 17.9998 0 16.8998 0 15.5999V11H2V15.1999C2 15.7999 2.4 15.9999 3 15.9999H17C17.6 15.9999 18 15.5999 18 14.9999V11H20V15.5999C20 16.8998 18.9 17.9998 17.6 17.9998Z"
                                            fill="#F6571E"
                                        />
                                        <path
                                            d="M13.572 5.75578C13.4103 5.84136 13.2117 5.8115 13.0824 5.68217L11.4 3.99981V7.9997C11.4 9.99965 11.4 12.8996 13.8 14.9995C10.4 14.3995 8.7 11.7996 8.6 7.9997V3.99981L6.9176 5.68217C6.78826 5.8115 6.58969 5.84136 6.42803 5.75578L5.4986 5.26374C5.25084 5.13258 5.20069 4.79909 5.39892 4.60087L9.70538 0.294531C9.86809 0.131821 10.1319 0.13182 10.2946 0.294531L14.6011 4.60087C14.7993 4.79909 14.7492 5.13258 14.5014 5.26374L13.572 5.75578Z"
                                            fill="#F6571E"
                                        />
                                    </svg>

                                    <p>Withdraw</p>
                                </NavLink>
                            </li>
                            <li className="group hover:text-orange-700">
                                <NavLink
                                    to="/result"
                                    className="flex items-center justify-start w-full"
                                    onClick={toggleSidebar}
                                >
                                    <svg
                                        width="21"
                                        height="21"
                                        viewBox="0 0 21 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.2742 0.0498684C10.2086 0.0786011 10.1183 0.140171 10.0813 0.185323C10.0403 0.226369 9.82273 0.640941 9.59287 1.10477C9.36711 1.56449 9.17419 1.94623 9.17009 1.95444C9.16188 1.95854 8.75552 2.02011 8.25885 2.08989C7.69651 2.16788 7.29836 2.24587 7.19163 2.29512C6.91252 2.42647 6.78117 2.75895 6.88789 3.05859C6.91252 3.12016 7.245 3.47727 7.63083 3.85079L8.33273 4.52807L8.18086 5.41057C8.00846 6.40801 8.00025 6.55167 8.10698 6.73638C8.18907 6.87594 8.48461 7.05244 8.64469 7.05244C8.69394 7.05244 9.13725 6.84721 9.6216 6.59682C10.106 6.34644 10.5246 6.14941 10.5534 6.15762C10.5821 6.16583 10.9679 6.35875 11.4153 6.59272C11.8628 6.82668 12.2855 7.02781 12.3594 7.03602C12.5359 7.06475 12.8356 6.90878 12.9341 6.73638C13.0408 6.55167 13.0326 6.40801 12.8602 5.41057L12.7083 4.52807L13.4102 3.85079C13.7961 3.47727 14.1285 3.12016 14.1532 3.05859C14.2599 2.75895 14.1285 2.42647 13.8494 2.29512C13.7427 2.24587 13.3363 2.16788 12.7822 2.08989C12.2855 2.01601 11.8751 1.95444 11.871 1.95033C11.8669 1.94623 11.6739 1.56449 11.4441 1.10066C11.2142 0.636837 10.9967 0.226369 10.9597 0.181218C10.8037 0.00882171 10.5041 -0.0527484 10.2742 0.0498684ZM11.1403 3.03807C11.2101 3.07912 11.481 3.14479 11.7437 3.18173C12.0105 3.22278 12.224 3.26383 12.224 3.27614C12.224 3.28845 12.0598 3.46496 11.8545 3.66198C11.4153 4.09707 11.403 4.13812 11.5015 4.75382C11.5385 4.99189 11.5672 5.20534 11.5672 5.23407C11.5672 5.2628 11.3784 5.18481 11.1362 5.05757C10.5616 4.75382 10.4795 4.75382 9.90482 5.06167C9.64212 5.20123 9.47383 5.27101 9.47383 5.23817C9.47383 5.20944 9.50257 4.99189 9.53951 4.75382C9.64212 4.12991 9.62571 4.08476 9.18651 3.65788C8.98127 3.46085 8.81709 3.28845 8.81709 3.27614C8.81709 3.26383 9.03053 3.22278 9.29323 3.18584C9.55593 3.14479 9.82683 3.08322 9.89661 3.04217C9.99513 2.98471 10.0895 2.84925 10.2742 2.48804L10.5205 2.0078L10.7668 2.48804C10.9515 2.84515 11.0459 2.98471 11.1403 3.03807Z"
                                            fill="#FE480F"
                                        />
                                        <path
                                            d="M1.40815 6.69944C1.06746 6.78153 0.80887 6.9293 0.542066 7.192C-0.0284834 7.76255 -0.159833 8.59169 0.201378 9.32232C0.312204 9.54397 0.685729 9.93392 3.25936 12.5117L6.18599 15.4465L6.21062 19.9206L6.31734 20.1504C6.46921 20.4747 6.68676 20.6964 7.00282 20.8523L7.27783 20.9878H13.7222L13.9972 20.8523C14.3132 20.6964 14.5308 20.4747 14.6827 20.1504L14.7894 19.9206L14.814 15.4465L17.7406 12.5117C20.3143 9.93392 20.6878 9.54397 20.7986 9.32232C21.1598 8.59169 21.0285 7.76255 20.4579 7.192C20.0269 6.76101 19.4523 6.5763 18.8694 6.67481C18.2578 6.78153 18.3728 6.68302 15.4543 9.59323C12.8356 12.2038 12.7986 12.2407 12.9218 11.9739C13.1598 11.465 13.2255 10.878 13.1065 10.3157C12.9505 9.56039 12.384 8.83387 11.6904 8.49318C10.8982 8.10734 10.1018 8.10734 9.30964 8.49318C8.61596 8.83387 8.04951 9.56039 7.89353 10.3157C7.7745 10.878 7.84017 11.465 8.07824 11.9739C8.20138 12.2407 8.16444 12.2038 5.54566 9.59323C3.26757 7.31924 2.853 6.92519 2.66008 6.83489C2.2414 6.64608 1.81862 6.60092 1.40815 6.69944ZM2.09774 7.93905C2.17162 7.97599 3.43176 9.19918 4.89712 10.6604C7.22858 12.9878 7.59389 13.3326 7.79092 13.4188L8.01667 13.5173L10.4138 13.5296C13.0162 13.5419 13.0613 13.5378 13.4102 13.3121C13.4923 13.2587 14.7237 12.0519 16.1439 10.6235C17.5723 9.19097 18.7996 7.99651 18.8817 7.95136C19.0788 7.85285 19.2471 7.85285 19.4482 7.95547C19.6329 8.04987 19.7766 8.28384 19.7766 8.48907C19.7766 8.55885 19.7396 8.68199 19.6986 8.76819C19.6534 8.85439 18.303 10.2295 16.657 11.8754C14.9413 13.583 13.6688 14.8883 13.636 14.9621C13.5908 15.0689 13.5785 15.5081 13.5785 17.3716C13.5785 19.387 13.5703 19.6538 13.5128 19.7112C13.4554 19.7687 13.127 19.7769 10.5 19.7769C7.87301 19.7769 7.54464 19.7687 7.48717 19.7112C7.42971 19.6538 7.4215 19.387 7.4215 17.3716C7.4215 15.5081 7.40918 15.0689 7.36403 14.9621C7.33119 14.8883 6.05874 13.583 4.34299 11.8754C2.69702 10.2295 1.34658 8.85439 1.30143 8.76819C1.20292 8.57117 1.20292 8.40288 1.30553 8.20175C1.4492 7.91852 1.81451 7.79538 2.09774 7.93905ZM11.1321 9.59323C11.44 9.7451 11.6575 9.96676 11.8094 10.291C11.8997 10.4839 11.9161 10.5784 11.9161 10.8698C11.9161 11.1817 11.8997 11.2515 11.7807 11.4937C11.6247 11.8098 11.403 12.0273 11.0788 12.1792C10.8858 12.2695 10.7914 12.2859 10.5 12.2859C10.2086 12.2859 10.1142 12.2695 9.92535 12.1792C9.58876 12.0191 9.37121 11.8098 9.21934 11.4937C9.10031 11.2515 9.08389 11.1817 9.08389 10.8698C9.08389 10.5784 9.10031 10.4839 9.19061 10.2951C9.54772 9.53166 10.3933 9.22791 11.1321 9.59323Z"
                                            fill="#FE480F"
                                        />
                                    </svg>

                                    <p>Results</p>
                                </NavLink>
                            </li>
                            {user ? (
                                <>
                                    <li className="group hover:text-orange-700">
                                        <button
                                            className="flex items-center justify-start w-full"
                                            onClick={() => {
                                                logout({
                                                    refreshToken:
                                                        localStorage.getItem("refreshToken"),
                                                });
                                                localStorage.removeItem("accessToken");
                                                localStorage.removeItem("refreshToken");
                                                setUser(null);
                                                toggleSidebar();
                                            }}
                                        >
                                            <svg
                                                width="20"
                                                height="21"
                                                viewBox="0 0 20 21"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.8332 18.4878V16.8211C15.8332 15.9371 15.482 15.0892 14.8569 14.4641C14.2317 13.839 13.3839 13.4878 12.4998 13.4878H7.49984C6.61578 13.4878 5.76794 13.839 5.14281 14.4641C4.51769 15.0892 4.1665 15.9371 4.1665 16.8211V18.4878"
                                                    stroke="#F6571E"
                                                    strokeWidth="1.66667"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M9.99984 10.1545C11.8408 10.1545 13.3332 8.66208 13.3332 6.82113C13.3332 4.98018 11.8408 3.48779 9.99984 3.48779C8.15889 3.48779 6.6665 4.98018 6.6665 6.82113C6.6665 8.66208 8.15889 10.1545 9.99984 10.1545Z"
                                                    stroke="#F6571E"
                                                    strokeWidth="1.66667"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>

                                            <p>Logout</p>
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <li className="group hover:text-orange-700">
                                    <NavLink
                                        className="flex items-center justify-start w-full"
                                        to="/login"
                                        onClick={toggleSidebar}
                                    >
                                        <svg
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.8332 18.4878V16.8211C15.8332 15.9371 15.482 15.0892 14.8569 14.4641C14.2317 13.839 13.3839 13.4878 12.4998 13.4878H7.49984C6.61578 13.4878 5.76794 13.839 5.14281 14.4641C4.51769 15.0892 4.1665 15.9371 4.1665 16.8211V18.4878"
                                                stroke="#F6571E"
                                                strokeWidth="1.66667"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9.99984 10.1545C11.8408 10.1545 13.3332 8.66208 13.3332 6.82113C13.3332 4.98018 11.8408 3.48779 9.99984 3.48779C8.15889 3.48779 6.6665 4.98018 6.6665 6.82113C6.6665 8.66208 8.15889 10.1545 9.99984 10.1545Z"
                                                stroke="#F6571E"
                                                strokeWidth="1.66667"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>

                                        <p>Login / Register</p>
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
