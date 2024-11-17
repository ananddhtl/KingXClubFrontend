import { CLUBS, routes } from "@/constants";
import { NavLink, useNavigate } from "react-router-dom";
import { useProfileContext } from "@/App"; // Ensure you import the context if using context
import { encodeUserId } from "@/utils/encode"; // Import an encoding function

const City = () => {
    const { user } = useProfileContext();
    const navigate = useNavigate();

    const handleLudoClick = () => {
        if (user) {
            const encodedUserId = encodeUserId(user.id);
            const form = document.createElement('form');
            form.method = 'GET'; 
            form.action = `http://localhost:3000/?userId=${encodedUserId}`;
            form.target = '_blank'; 
    
            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
        } else {
            navigate(routes.LOGIN);
        }
    };
    

    return (
        <div className="flex flex-wrap justify-center items-center w-full gap-5 py-5">
            {CLUBS.map((event) => (
                <NavLink
                    to={`${routes.PLACE_BID}/${event.place}`}
                    key={event.place}
                    className="cursor-pointer"
                >
                    {event.icon}
                </NavLink>
            ))}

            {}
            <NavLink to="#" onClick={handleLudoClick} className="cursor-pointer">
                <span>Club Ludo</span>
            </NavLink>
        </div>
    );
};

export default City;
