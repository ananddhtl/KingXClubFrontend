import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import { routes } from "./constants";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {Profile} from "@/pages/Profile";
import {BidHistory} from "@/pages/BidHistory";
import {Result} from "@/pages/Result";
import {PlaceBid} from "@/pages/PlaceBid";
import { createContext, useContext, useState } from "react";
const ProfileContext = createContext(null);

export interface IUser {
    amount: number,
    email: string, 
    name: string, 
    phone: string
} 

function App() {
    const [user, setUser] = useState<null | IUser>(null);

    return (
        <Router>
        <ProfileContext.Provider value={{user, setUser}}>
                <Routes>
                    <Route path={routes.INDEX} element={<Home />} />
                    <Route path={routes.LOGIN} element={<Login user={user} setUser={setUser} />} />
                    <Route path={routes.PROFILE} element={<Profile  user={user} setUser={setUser} />} />
                    <Route path={routes.BID_HISTORY} element={<BidHistory />} />
                    <Route path={`${routes.PLACE_BID}/:city`} element={<PlaceBid />} />
                    <Route path={routes.RESULT} element={<Result />} />
                    <Route path={routes.SIGNUP} element={<Signup user={user} setUser={setUser} />} />
                    <Route path={routes.ADMIN} element={<Admin />} />
                    <Route path="*" element={<Navigate to={routes.INDEX} replace />} />
                </Routes>
        </ProfileContext.Provider>


        </Router>
    );
}


export const useProfileContext = () => {
    return useContext(ProfileContext);
};


export default App;
