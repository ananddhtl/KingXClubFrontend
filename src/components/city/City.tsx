import { CLUBS, routes } from "@/constants";
import { Jackpot } from "@/constants/assets/Icons";
import { NavLink } from "react-router-dom";

const City = () => {
    return (
        <div className="flex flex-wrap justify-center items-center w-full gap-5 pb-[8rem]">
            {CLUBS.map((event) => (
                <NavLink
                    to={`${routes.PLACE_BID}/${event.place}`}
                    key={event.place}
                    className="cursor-pointer"
                >
                    {event.icon}
                </NavLink>
            ))}
            <Jackpot />
        </div>
    );
};

export default City;
