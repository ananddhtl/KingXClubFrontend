import { useProfileContext } from "@/App"
import { Data } from "@/components/data-info/DataInfo"
import { routes } from "@/constants"
import { useEffect } from "react"
import { toast } from "react-hot-toast"
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
    <Data />
    
)}