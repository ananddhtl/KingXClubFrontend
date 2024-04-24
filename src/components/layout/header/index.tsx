import { logIn, register } from "@/api/api";
import { Modal } from "@/components/modal/Modal";
import { cn } from "@/utils/cn";
import { FC, useState } from "react";
import toast from "react-hot-toast";

interface IHeader {
    classname?: string;
}
interface IUser {
    amount: number,
    email: string, 
    name: string, 
    phone: string

} 
const Header: FC<IHeader> = ({ classname }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [user, setUser] = useState<null | IUser>(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const saveLoginData = (tokens) => {
        localStorage.setItem('accessToken', tokens.access.token)
        localStorage.setItem('refreshToken', tokens.refresh.token)
    }
 
    const loginUser = async (): Promise<any> => {
        try {
            setIsLoading(true);
            const res = await logIn({
                email,
                password,
            });
            console.log(res);
            
            saveLoginData(res.data?.tokens)
            toast(res.data?.message || 'Unknown error')
            setUser({amount: res.data?.user?.amount, email: res.data?.user?.email, name: res.data?.user?.email.split('@')[0], phone: res.data?.user?.phone})
            setIsLoggedIn(true)
            return res;
        } catch (error) {
            console.log(`Error logging user: ${error}`);
            toast(error.response?.data?.message || 'Unknown error')
            throw new Error(`Error logging user: ${error}`);
        } finally {
            setIsLoading(false);
            setShowLoginModal(false)
        }
    };

    const registerUser = async (): Promise<any> => {
        try {
            setIsLoading(true);
            const res = await register({
                email,
                phone,
                password,
            });
            saveLoginData(res.data?.tokens)
            toast(res.data?.message || 'Unknown error')
            setUser({amount: res.data?.user?.amount, email: res.data?.user?.email, name: res.data?.user?.email.split('@')[0], phone: res.data?.user?.phone})
            setIsLoggedIn(true)
            return res;
        } catch (error) {
            console.log(`Error registering user: ${error}`);
            toast(error.response?.data?.message || 'Unknown error')
            throw new Error(`Error registering user: ${error}`);
        } finally {
            setIsLoading(false);
            setShowSignupModal(false)
        }
    };

    return (
        <>
            <header className={cn("header-section w-100", classname)}>
                <div className="py-sm-6 py-3 mx-xxl-20 mx-md-15 mx-3">
                    <div className="d-flex align-items-center justify-content-between gap-xxl-10 gap-lg-8 w-100">
                        <nav className="navbar-custom d-flex gap-lg-6 align-items-center flex-column flex-lg-row justify-content-start justify-content-lg-between w-100">
                            <div className="top-bar w-100 d-flex align-items-center gap-lg-0 gap-6">
                                <button
                                    className="navbar-toggle-btn d-block d-lg-none"
                                    type="button"
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <a
                                    className="navbar-brand d-flex align-items-center gap-4"
                                    href="#"
                                >
                                    <img
                                        className="w-100 logo2"
                                        src="assets/img/logo.png"
                                        alt="logo"
                                    />
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
                                        <a href="#">Game</a>
                                    </li>
                                    <li className="menu-link">
                                        <a href="#">24/7 Supprot</a>
                                    </li>
                                    <li className="menu-link">
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li className="menu-link">
                                        <a href="#">Result Time</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="header-btn-area d-flex align-items-center gap-sm-6 gap-3">
                            <button className="ntf-btn box-style fs-2xl">
                                <i className="ti ti-brand-whatsapp"></i>
                            </button>
                            {!isLoggedIn ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => setShowLoginModal(true)}
                                        className="login-button rounded-full bg-[#F6471C] text-white border-none py-2 px-5"
                                        data-toggle="modal"
                                        data-target="#loginModal"
                                    >
                                        Login
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowSignupModal(true)}
                                        className="signup-button rounded-full bg-[#F6471C] text-white border-none py-2 px-5"
                                    >
                                        Sign up
                                    </button>
                                </>
                            ) : (
                                <div className="header-profile pointer">
                                    <div className="profile-wrapper d-flex align-items-center gap-3">
                                        <div className="img-area overflow-hidden">
                                            <img
                                                className="w-100"
                                                src="assets/img/profile.png"
                                                alt="profile"
                                            />
                                        </div>
                                        <div className="flex-col">
                            <span id="user-name" className="user-name d-none d-xxl-block text-nowrap">{user.name}</span>
                            <span id="user-amount" className="user-balance d-none d-xxl-block text-nowrap">Rs. {user.amount}</span>
                            </div>
                                        <i className="ti ti-chevron-down d-none d-xxl-block"></i>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            {showLoginModal && (
                <Modal
                    isLoading={isLoading}
                    title="Login Form"
                    setShowModal={setShowLoginModal}
                    action="Login"
                    onAction={loginUser}
                >
                    <form className="login-form d-flex flex-column gap-4">
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </form>
                </Modal>
            )}
            {showSignupModal && (
                <Modal
                    isLoading={isLoading}
                    title="Signup Form"
                    setShowModal={setShowSignupModal}
                    action="SignUp"
                    onAction={registerUser}
                >
                    <form className="lsignup-form d-flex flex-column gap-4">
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="phone"
                                name="phone"
                                className="form-control"
                                id="phone"
                                placeholder="Enter your number"
                                onChange={handlePhoneChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </form>
                </Modal>
            )}
        </>
    );
};

export default Header;
