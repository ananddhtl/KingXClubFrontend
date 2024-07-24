import { useProfileContext } from "@/App"
import { AgentOrAdminDataInfo } from "@/components/data-info/AgentOrAdminDataInfo"
import Navbar from "@/components/navbar/Navbar"
import { ROLE, routes } from "@/constants"
import { useEffect } from "react"
// import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export const AgentOrAdmin = () => {
  const { user } = useProfileContext();
  const navigate = useNavigate()


  useEffect(() => {
    console.log({user});
    
    if (!user || (user?.role !== ROLE.ADMIN && user?.role !== ROLE.AGENT)) {
      // toast.error("Unauthorized !!! Not Admin", {id: 'not-admin'});
      navigate(routes.INDEX);
    }
}, [navigate, user]);

return (
  <>
  <Navbar />
    <AgentOrAdminDataInfo />
    </>
)}