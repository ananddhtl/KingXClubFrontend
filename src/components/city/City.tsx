// import { getTodayTicketStatus } from "@/api/api";
import { routes } from "@/constants";
import { ClubA, ClubB, ClubC, ClubD, ClubE, Jackpot } from "@/constants/assets/Icons";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const events = [
    {
        place: "Club A",
        icon: <ClubA />,
        time: ["07:00", "11:00", "15:00", "18:00", "23:00"],
    },
    {
        place: "Club B",
        icon: <ClubB />,
        time: ["08:00", "11:00", "16:00", "19:00", "23:00"],
    },
    {
        place: "Club C",
        icon: <ClubC />,

        time: ["09:00", "12:00", "17:00", "20:00", "23:30"],
    },
    {
        place: "Club D",
        icon: <ClubD />,

        time: ["10:00", "12:00", "17:00", "21:00", "23:45"],
    },
    {
        place: "Club E",
        icon: <ClubE />,

        time: ["11:00", "13:00", "15:00", "18:00", "22:00"],
    },
];
const City = () => {
    // const [events, setEvents] = useState([
    //     {
    //         place: "Club A",
    //         totalAmount: 0,
    //         totalPlayers: 0,
    //         time: ["07:00", "11:00", "15:00", "18:00", "23:00"],
    //     },
    //     {
    //         place: "Club B",
    //         totalAmount: 0,
    //         totalPlayers: 0,
    //         time: ["08:00", "11:00", "16:00", "19:00", "23:00"],
    //     },
    //     {
    //         place: "Club C",
    //         totalAmount: 0,
    //         totalPlayers: 0,
    //         time: ["09:00", "12:00", "17:00", "20:00", "23:30"],
    //     },
    //     {
    //         place: "Club D",
    //         totalAmount: 0,
    //         totalPlayers: 0,
    //         time: ["09:00", "12:00", "17:00", "21:00", "23:45"],
    //     },
    // ]);

    //     useEffect(() => {
    //       (async () => {
    //           try {
    //               const status = await getTodayTicketStatus();
    //               setEvents((prevItems) =>
    //                   prevItems.map((item) => {
    //                       const stat = status.data?.find(({ _id }) => _id === item.place);

    //                       return {
    //                           ...item,
    //                           totalAmount: stat?.totalAmount || 0,
    //                           totalPlayers: stat?.count || 0,
    //                       };
    //                   })
    //               );
    //           } catch (error) {
    //               console.log(`Error logging user: ${error}`);
    //               toast(error.response?.data?.message || "Unknown error", {id: 'unknown-error'});
    //           }
    //       })();
    //   }, []);
    return (
        <div className="flex flex-wrap justify-center items-center w-full gap-5 pb-[8rem]">
            {events.map((event) => (
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
