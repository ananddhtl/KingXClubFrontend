import { HelmetProvider } from "react-helmet-async";
import BottomNavbar from "../components/DrawerNav/BottomNavbar";
import City from "../components/city/City";
import Navbar from "@/components/navbar/Navbar";

export const Home = () => {
    return (
        <HelmetProvider>
            <Navbar />
            <div className="w-full flex justify-center items-center my-4">
                <img src="./assets/img/homebanner.png" alt="herobanner" />
            </div>
            <City />
            <BottomNavbar />
        </HelmetProvider>
    );
};
