import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "@/assets/image/logo.png";
import { useProfileContext } from "@/App";
import { logIn } from "@/api/api";
import toast from "react-hot-toast";
import { Button } from "@/components/button/Button";
import { routes } from "@/constants";

const Login = () => {
    const navigate = useNavigate();
    const {user, setUser} = useProfileContext()
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const saveLoginData = (tokens) => {
        localStorage.setItem("accessToken", tokens.access.token);
        localStorage.setItem("refreshToken", tokens.refresh.token);
    };

    const loginUser = async (): Promise<any> => {
        try {
            setIsLoading(true);
            console.log(email, password);

            const res = await logIn({
                email,
                password,
            });
            console.log(res);

            saveLoginData(res.data?.tokens);
            toast(res.data?.message || "Unknown error");
            setUser({
                amount: res.data?.user?.amount,
                email: res.data?.user?.email,
                name: res.data?.user?.email.split("@")[0],
                phone: res.data?.user?.phone,
                role: res.data?.user?.role,
            });
            return res;
        } catch (error) {
            console.log(`Error logging user: ${error}`);
            toast(error.response?.data?.message || "Unknown error");
            throw new Error(`Error logging user: ${error}`);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (user) navigate(routes.PROFILE);
    }, [navigate, user]);

    return (
        <section className="bg-[#000000] flex flex-col items-center justify-start gap-10 min-h-screen p-4">
            <NavLink to="/">
            <img src={Logo} alt="logo" />
            </NavLink>
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-between max-w-xs border border-[#FE480F] w-full mb-10 h-12 rounded-full bg-black">
                    <button className="bg-[#FE480F] text-white tracking-widest font-bold py-2 px-10 rounded-full">
                        Login
                    </button>
                    <button className="bg-transparent text-white tracking-widest font-semibold py-2 px-10 rounded-full">
                        <NavLink to="/signup">Signup</NavLink>
                    </button>
                </div>
                <div className="w-full max-w-sm mx-auto rounded-2xl border border-gray-600 shadow-lg p-5 bg-[#0F0F0F]">
                    <div className="text-center">
                        <div className="mb-4">
                            <img
                                className="w-24 h-24 rounded-full mx-auto"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0khaUcbpblqXKUuxIpxyGB9VqRKmENQZWjbk8uXGEIg&s"
                                alt="profile image"
                            />
                        </div>
                        {/* <h2 className="text-white text-xl font-semibold">Jane Dow</h2>
                        <p className="text-zinc-400">janedow071@gmail.com</p> */}
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="email"
                            className="block text-white text-sm font-semibold tracking-widest mb-2"
                        >
                            Email
                        </label>
                        <input
                            onChange={handleEmailChange}
                            type="email"
                            id="email"
                            className="bg-white text-black mb-4 p-3 rounded-xl w-full leading-tight focus:outline-none"
                            placeholder="Email"
                        />
                        <label
                            htmlFor="password"
                            className="block text-white text-sm font-semibold tracking-widest mb-2"
                        >
                            Password
                        </label>
                        <div className="flex items-center bg-white text-black rounded-xl mb-4">
                            <input
                                onChange={handlePasswordChange}
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="bg-transparent flex-1 p-3 rounded-l-full text-black leading-tight focus:outline-none"
                                placeholder="••••••••"
                            />
                            <button
                                onClick={togglePasswordVisibility}
                                className="p-4 outline-none rounded-r-full text-black hover:text-white"
                            >
                                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </button>
                        </div>
                        <Button
                            isLoading={isLoading}
                            text="Login"
                            onAction={loginUser}
                            disabled={isLoading}
                        />
                    </div>
                    <div className="text-start mt-4">
                        <a href="#" className="text-[#FE480F] hover:text-[#fe3f0f] text-sm">
                            Forgot password?
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
