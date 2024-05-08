import { routes } from "@/constants";
import { cn } from "@/utils/cn";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IHeader {
    classname?: string;
}
const Header: FC<IHeader> = ({ classname }) => {
    const navigate = useNavigate()
    return (
        <header className={cn("header-section w-100 z-30", classname)}>
            <div className="py-sm-6 py-3 mx-xxl-20 mx-md-15 mx-3">
                <div className="d-flex align-items-center justify-content-between gap-xxl-10 gap-lg-8 w-100">
                    <nav className="navbar-custom d-flex gap-lg-6 align-items-center flex-column flex-lg-row justify-content-start justify-content-lg-between w-100">
                        <div className="top-bar w-100 d-flex align-items-center gap-lg-0 gap-6">
                            <button className="navbar-toggle-btn d-block d-lg-none" type="button">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <a className="navbar-brand d-flex align-items-center gap-4" href="#">
                                <img className="w-100 logo2" src="assets/img/logo.png" alt="logo" />
                                {/* <h1>MatkaKing</h1>  */}
                            </a>
                        </div>
                        <div className="navbar-toggle-item w-100 position-lg-relative">
                            <ul
                                className="custom-nav gap-lg-7 gap-3 cursor-scale growDown2 ms-xxl-10"
                                data-lenis-prevent
                            >
                                <li className="menu-link">
                                    <a href="#">Home</a>
                                </li>
                                <li className="menu-link">
                                    <a href="#game">Game</a>
                                </li>
                                <li className="menu-link">
                                    <a href="#lucky-winner">Lucky Winners</a>
                                </li>
                                <li className="menu-link">
                                    <a href="#results">Result</a>
                                </li>
                                <li className="menu-link">
                                    <a href="#contactus">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="header-btn-area d-flex align-items-center gap-sm-6 gap-3">
                        <button className="ntf-btn box-style fs-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="bi bi-whatsapp p-1 max-w-9"
                                viewBox="0 0 16 16"
                            >
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate(routes.LOGIN)}
                            className="login-button rounded-full bg-[#F6471C] text-white border-none py-2 px-5"
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate(routes.SIGNUP)}
                            className="signup-button rounded-full bg-[#F6471C] text-white border-none py-2 px-5 w-[104px]"
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
