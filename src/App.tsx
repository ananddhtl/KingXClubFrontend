import { Route, Routes, HashRouter } from "react-router-dom";
import "./App.scss";
import { routes } from "./constants";
import { Home } from "./pages/Home";
import { Master } from "./pages/Master";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Profile } from "@/pages/Profile";
import { BidHistory } from "@/pages/BidHistory";
import { Result } from "@/pages/Result";
import { PlaceBid } from "@/pages/PlaceBid";
import { createContext, useContext, useEffect, useState } from "react";
const ProfileContext = createContext(null);
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import { getUserDetail } from "./api/api";
import Agentform from "./pages/Agentform";
import ReferralCode from "./pages/ReferralCode";
import Notification from "./pages/Notification";
import { AgentOrAdmin } from "./pages/AgentOrAdmin";
// import BG from '@/assets/image/bg.png'

export interface IUser {
    amount: number;
    email: string;
    name: string;
    role: "user" | "agent" | "admin";
    phone: string;
}

function App() {
    const [user, setUser] = useState<null | IUser>(null);
    const [isLoading, setIsLoading] = useState(true);
    //for Production
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
    const fetchCurrentUser = async() =>{
        try {
            setIsLoading(true);
            const user = await getUserDetail();
            setUser({
                amount: user.data.amount,
                email: user.data.email,
                name: user.data.name || user.data.email.split("@")[0],
                phone: user.data.phone,
                role: user.data.role,
            });
        } catch (error) {
            console.log(`Error fetching user: ${error}`);
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchCurrentUser()
    }, []);
    return (
        <div className="relative flex bg-black justify-center items-center">
            <div className="min-h-screen w-full bg-gradient-to-br from-[#011d01] to-[#000e00] oleo-script">
                {isLoading ? (
                    <Loader />
                ) : (
                    <HashRouter>
                        <Toaster
                            toastOptions={{
                                className: "",
                                style: {
                                    border: "1px solid #fff",
                                    padding: "16px",
                                    color: "#fff",
                                    background: "#cb6b23",
                                },
                            }}
                            containerStyle={{
                                top: 20,
                                left: 20,
                                bottom: 20,
                                right: 20,
                            }}
                        />
                        <ProfileContext.Provider value={{ user, setUser, fetchCurrentUser }}>
                            <Routes>
                                <Route path={routes.INDEX} element={<Home />} />
                                <Route path={routes.LOGIN} element={<Login />} />
                                <Route path={routes.PROFILE} element={<Profile />} />
                                <Route path={routes.BID_HISTORY} element={<BidHistory />} />
                                <Route path={`${routes.PLACE_BID}/:city`} element={<PlaceBid />} />
                                <Route path={routes.RESULT} element={<Result />} />
                                <Route path={routes.SIGNUP} element={<Signup />} />
                                <Route path={`${routes.SIGNUP}/:referCode`} element={<Signup />} />
                                <Route path={routes.MASTER} element={<Master />} />
                                <Route path={routes.AGENT} element={<AgentOrAdmin />} />
                                <Route path={routes.ADMIN} element={<AgentOrAdmin />} />
                                <Route path={routes.AGENT_FORM} element={<Agentform />} />
                                <Route path={routes.REFERRAL} element={<ReferralCode />} />
                                <Route path={routes.NOTIFICATION} element={<Notification />} />
                                {/* <Route path="*" element={<Navigate to={routes.INDEX} replace />} /> */}
                            </Routes>
                        </ProfileContext.Provider>
                    </HashRouter>
                )}
            </div>
        </div>
    );
}

export const useProfileContext = () => {
    return useContext(ProfileContext);
};

export default App;
