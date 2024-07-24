import { useProfileContext } from "@/App"
import { MasterDataInfo } from "@/components/data-info/MasterDataInfo"
import Navbar from "@/components/navbar/Navbar"
import { ROLE, routes } from "@/constants"
import { useEffect } from "react"
// import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export const Master = () => {
  const { user } = useProfileContext();
  const navigate = useNavigate()


  useEffect(() => {
    console.log({user});
    
    if (!user || user?.role !== ROLE.MASTER) {
      // toast.error("Unauthorized !!! Not Admin", {id: 'not-admin'});
      navigate(routes.INDEX);
    }
}, [navigate, user]);

return (
  <div className="bg-[#000e00] ">
  <Navbar />
    <MasterDataInfo />
    </div>
)}