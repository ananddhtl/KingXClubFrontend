import { getTodayTicketStatus } from "@/api/api";
import { routes } from "@/constants";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

const City = () => {
  const navigate = useNavigate()
    const [events, setEvents] = useState([
        {
            place: "Pokhara",
            image: "assets/img/pok.jpg",
            totalAmount: 0,
            totalPlayers: 0,
            time: ["09:00", "12:00", "15:00", "21:00"],
        },
        {
            place: "Kathmandu",
            image: "assets/img/ktm.jpg",
            totalAmount: 0,
            totalPlayers: 0,
            time: ["09:00", "12:00", "15:00", "21:00"],
        },
        {
            place: "Dhangadi",
            image: "assets/img/Dhangadi.jpeg",
            totalAmount: 0,
            totalPlayers: 0,
            time: ["09:00", "12:00", "15:00", "21:00"],
        },
        {
            place: "Nepalgunj",
            image: "assets/img/Nepalgunj.jpg",
            totalAmount: 0,
            totalPlayers: 0,
            time: ["09:00", "12:00", "15:00", "21:00"],
        },
    ]);

    useEffect(() => {
      (async () => {
          try {
              const status = await getTodayTicketStatus();
              console.log({ status });
              setEvents((prevItems) =>
                  prevItems.map((item) => {
                      const stat = status.data?.find(({ _id }) => _id === item.place);

                      return {
                          ...item,
                          totalAmount: stat?.totalAmount || 0,
                          totalPlayers: stat?.count || 0,
                      };
                  })
              );
          } catch (error) {
              console.log(`Error logging user: ${error}`);
              toast(error.response?.data?.message || "Unknown error");
          }
      })();
  }, []);
    return (
        <div className="flex pb-28 flex-col justify-center items-center w-full min-h-screen">
          {events.map((event) => (

            <div onClick={() => navigate(`${routes.PLACE_BID}/${event.place}`)} role="button" className=" mb-8 w-[340px] h-[180px] bg-[#110400] border rounded-tl-xl rounded-tr-3xl rounded-br-3xl ">
                <div className="h-auto flex justify-between p-2">
                    <div className="w-[240px] bg-[#FE480F] rounded-br-3xl  rounded-tr-md rounded-tl-2xl rounded-bl-lg flex items-center pl-2 font-semibold tracking-wider">
                        {event.place}
                    </div>
                    <div className="h-[45px]">
                        <img
                            className="aspect-square w-16 object-cover rounded-full border border-orange-600"
                            src={event.image}
                            alt="cityImage"
                        />
                    </div>
                </div>

                <div className="flex text-sm justify-between mt-2 p-4">
                    <div className="gap-y-2 flex flex-col">
                        <p className="text-xs">OPEN BIDS</p>
                        <p className="text-xs text-start">6:00 AM</p>
                    </div>
                    <div className="gap-y-2 flex flex-col">
                        <p className="text-xs">CLOSE BIDS</p>
                        <p className="text-xs text-start">10:00 PM</p>
                    </div>

                    <div className="gap-y-2 flex flex-col">
                        <p className="text-xs">NUMBER OF PLAYERS</p>
                        <p className="text-xs text-start">{event.totalPlayers}</p>
                    </div>
                </div>
                <div className="text-xs p- pl-4 pr-4">Total Bids Rs. {event.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>

                <div className=" bottom-0 right-0 flex w-full justify-end">
                    <NavLink
                        className="bg-[#110400] px-5 py-2 rounded-3xl border hover:bg-orange-700 mr-3"
                        to={`${routes.PLACE_BID}/${event.place}`}
                    >
                        Play
                    </NavLink>
                </div>
            </div>
          ))}

        </div>
    );
};

export default City;
