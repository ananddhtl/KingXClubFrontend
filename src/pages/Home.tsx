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


export const Home = () => {
return (
    <HelmetProvider>
    <Notification />
    <UserPopup />
    <Hero />
    <Game />
    <Winners />
    <Results />
    <Contacts />
    <Toaster 
    toastOptions={{
        className: '',
        style: {
          border: '1px solid #fff',
          padding: '16px',
          color: '#fff',
          background: '#cb6b23'
        },
      }}
    containerStyle={{
        top: 20,
        left: 20,
        bottom: 20,
        right: 20,
      }}/>
      <BottomNavbar/>
    </HelmetProvider>
)}