import { Contacts } from "@/components/contacts/Contacts"
import { Game } from "@/components/game/Game"
import { Hero } from "@/components/hero/Hero"
import { Notification } from "@/components/notification/Notification"
import { Results } from "@/components/results/Results"
import { UserPopup } from "@/components/user-popup/UserPopup"
import { Winners } from "@/components/winners/Winners"
import { HelmetProvider } from "react-helmet-async"
import { Toaster } from "react-hot-toast"
import BottomNavbar from '../components/DrawerNav/BottomNavbar'
import Layout from "@/components/layout"
import City from "../components/city/City"
import Navbar from "@/components/navbar/Navbar"

export const Home = () => {
return (
  // <Layout>
    <HelmetProvider>
      <Navbar/>
      <div className="w-full flex justify-center items-center my-4">
      <img src="./assets/img/homebanner.png" alt = "herobanner"/>

      </div>
      <City/>
    {/* <Notification />
    <UserPopup /> */}
    {/* <Hero /> */}
    {/* <Game /> */}
    {/* <Results /> */}
    {/* <Winners /> */}
    {/* <Contacts /> */}
      <BottomNavbar/>
    </HelmetProvider>
    // </Layout>
)}