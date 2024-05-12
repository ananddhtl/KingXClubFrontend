import { useProfileContext } from "@/App"
import { Data } from "@/components/data-info/DataInfo"
import Navbar from "@/components/navbar/Navbar"
import { Notification } from "@/components/notification/Notification"
import { UserPopup } from "@/components/user-popup/UserPopup"
import { routes } from "@/constants"
import { useEffect } from "react"
import { HelmetProvider } from "react-helmet-async"
import { Toaster, toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export const Admin = () => {
  const { user } = useProfileContext();
  const navigate = useNavigate()


  useEffect(() => {
    console.log({user});
    
    if (!user || user?.role !== 'admin') {
      toast.error("Unauthorized !!! Not Admin", {id: 'not-admin'});
      navigate(routes.INDEX);
    }
}, [navigate, user]);

return (
  // <Layout>
    <HelmetProvider>
      <Navbar/>
    <Notification />
    <UserPopup />
    {/* <Hero />   */}
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
            // </Layout>

)}