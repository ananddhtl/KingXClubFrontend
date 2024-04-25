import { Data } from "@/components/data-info/DataInfo"
import { Hero } from "@/components/hero/Hero"
import { Notification } from "@/components/notification/Notification"
import { UserPopup } from "@/components/user-popup/UserPopup"
import { HelmetProvider } from "react-helmet-async"
import { Toaster } from "react-hot-toast"


export const Admin = () => {
return (
    <HelmetProvider>
    <Notification />
    <UserPopup />
    <Hero />
    <Data />
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
    </HelmetProvider>
)}