import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "@/assets/image/logo.png";
import { register } from "@/api/api";
import toast from "react-hot-toast";
import { useProfileContext } from "@/App";
import { Button } from "@/components/button/Button";
import { routes } from "@/constants";

const Signup = () => {
    const {user, setUser} = useProfileContext()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [referCode, setReferCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e, changeFor: "email" | "phone" | "password" | "referCode") => {
        switch (changeFor) {
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "phone":
                setPhone(e.target.value);
                break;
            case "referCode":
                setReferCode(e.target.value);
                break;
            default:
                break;
        }
    };

    const saveLoginData = (tokens) => {
        localStorage.setItem("accessToken", tokens.access.token);
        localStorage.setItem("refreshToken", tokens.refresh.token);
    };

    const registerUser = async (): Promise<any> => {
        try {
            setIsLoading(true);
            const res = await register({
                email,
                phone,
                password,
                referCode,
            });
            saveLoginData(res.data?.tokens);
            toast.success(res.data?.message || "Success");
            setUser({
                amount: res.data?.user?.amount,
                email: res.data?.user?.email,
                name: res.data?.user?.email.split("@")[0],
                phone: res.data?.user?.phone,
                role: res.data?.user?.role,
            });
            return res;
        } catch (error) {
            console.log(`Error registering user: ${error}`);
            toast.error(error.response?.data?.message || "Unknown error");
            throw new Error(`Error registering user: ${error}`);
        } finally {
            setIsLoading(false);
        }
    };
   

    useEffect(() => {
        if(user)
        navigate(routes.PROFILE)
    }, [navigate, user])

    return (
        <section className="bg-[#000000] flex flex-col items-center justify-start gap-10 min-h-screen p-4">
            <NavLink to="/">
            <img src={Logo} alt="logo" />
            </NavLink>
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-between border max-w-xs border-[#FE480F] w-full mb-10 h-12 rounded-full bg-black">
                    <button className="bg-transparent text-white tracking-widest font-semibold py-2 px-10 rounded-full">
                        <NavLink to="/login">Login</NavLink>
                    </button>
                    <button className="bg-[#FE480F] text-white tracking-widest font-bold py-2 px-10 rounded-full">
                        Signup
                    </button>
                </div>
                <div className="w-full max-w-sm mx-auto rounded-2xl border border-gray-600 shadow-lg p-5 bg-[#0F0F0F]">
                    <div className="font-semibold tracking-widest text-white text-xl text-center">
                        Let's Get Started
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="email"
                            className="block text-white text-sm font-semibold tracking-widest mb-2"
                        >
                            User Email
                        </label>
                        <div className="flex items-center bg-white text-black rounded-xl mb-4">
                            <input
                                onChange={(e) => handleChange(e, "email")}
                                type="email"
                                id="email"
                                className="bg-transparent flex-1 p-3 rounded-l-full text-black leading-tight focus:outline-none"
                                placeholder="Enter your Email"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="phone"
                            className="block text-white text-sm font-semibold tracking-widest mb-2"
                        >
                            Phone Number
                        </label>
                        <div className="flex items-center bg-white text-black rounded-xl mb-4">
                            <input
                                onChange={(e) => handleChange(e, "phone")}
                                type="number"
                                id="phone"
                                className="bg-transparent flex-1 p-3 rounded-l-full text-black leading-tight focus:outline-none"
                                placeholder="Enter your Phone Number"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="referCode"
                            className="block text-white text-sm font-semibold tracking-widest mb-2"
                        >
                            Refer Code
                        </label>
                        <div className="flex items-center bg-white text-black rounded-xl mb-4">
                            <input
                                onChange={(e) => handleChange(e, "referCode")}
                                type="text"
                                id="referCode"
                                className="bg-transparent flex-1 p-3 rounded-l-full text-black leading-tight focus:outline-none"
                                placeholder="Enter your Refer Code"
                            />
                        </div>
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
                                onChange={(e) => handleChange(e, "password")}
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="bg-transparent flex-1 p-3 rounded-l-full text-black leading-tight focus:outline-none"
                                placeholder="••••••••"
                            />
                            <button
                                onClick={togglePasswordVisibility}
                                className="p-4 rounded-r-full text-black hover:text-white"
                            >
                                {showPassword ? <AiOutlineEye /> :<AiOutlineEyeInvisible />}
                            </button>
                        </div>
                        <Button isLoading={isLoading} text="Create Account" onAction={registerUser} disabled={isLoading} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
