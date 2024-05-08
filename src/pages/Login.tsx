import React, { FC, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/image/logo.png";
import { IUser } from "@/App";
import { logIn } from "@/api/api";
import toast from "react-hot-toast";

interface ILogin {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

const Login: FC<ILogin> = ({ user, setUser }) => {
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

    return (
        <section className="bg-[#000000] flex flex-col items-center justify-start gap-10 min-h-screen p-4">
            <img src={Logo} alt="logo" />
            <div>
                <div className="flex justify-between max-w-sm border border-[#FE480F] w-full mb-10 h-12 rounded-full bg-black">
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
                        <h2 className="text-white text-xl font-semibold">Jane Dow</h2>
                        <p className="text-zinc-400">janedow071@gmail.com</p>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="password"
                            className="block text-white text-sm font-semibold tracking-widest mb-2"
                        >
                            Password
                        </label>
                        <div className="flex items-center bg-white text-black rounded-xl mb-4">
                            <input
                                type={showPassword ? "text" : "password"}
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
                    <button className="w-full bg-[#FE480F] flex justify-center text-white font-bold py-3 px-4 rounded-xl hover:bg-[#fe3f0f]">
                        Continue
                    </button>
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
