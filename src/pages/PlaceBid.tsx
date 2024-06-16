import { routes } from "@/constants";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BidModal from "./BidModal";
import { cn } from "@/utils/cn";
import { useProfileContext } from "@/App";
import { DoubleBet, SingleBet, TripleBet } from "@/constants/assets/Icons";
const places = [
    {
        place: "Club A",
        time: ["07:00", "11:00", "15:00", "18:00", "23:00"],
    },
    {
        place: "Club B",
        time: ["08:00", "11:00", "16:00", "19:00", "23:00"],
    },
    {
        place: "Club C",

        time: ["09:00", "12:00", "17:00", "20:00", "23:30"],
    },
    {
        place: "Club D",

        time: ["10:00", "12:00", "17:00", "21:00", "23:45"],
    },
    {
        place: "Club E",

        time: ["11:00", "12:00", "17:00", "21:00", "23:45"],
    },
];
export const PlaceBid = () => {
    const navigate = useNavigate();
    const { city } = useParams();
    const [isModalOpen, setIsModalOpen] = useState("double");
    const { user } = useProfileContext();
    const [selectedTime, setSelectedTime] = useState(null);
    const [position, setPosition] = useState(null);

    const handleCloseModal = () => {
        setIsModalOpen(null);
    };

    useEffect(() => {
        if (!user) navigate(routes.LOGIN);
    }, [navigate, user]);

    return (
        <>
            {isModalOpen ? (
                <BidModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    time={selectedTime}
                    position={position}
                    city={city}
                />
            ) : (
                <section className="text-white flex flex-col items-center justify-between py-8  min-h-screen ">
                    <div className="sticky top-1 px-4 grid grid-cols-5 justify-center place-items-center w-full">
                        <button onClick={() => navigate(routes.INDEX)}>
                            <svg
                                width="44"
                                height="44"
                                viewBox="0 0 44 44"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0.517039"
                                    y="0.517039"
                                    width="42.9659"
                                    height="42.9659"
                                    rx="21.483"
                                    fill="url(#paint0_linear_831_6513)"
                                />
                                <rect
                                    x="0.517039"
                                    y="0.517039"
                                    width="42.9659"
                                    height="42.9659"
                                    rx="21.483"
                                    stroke="url(#paint1_linear_831_6513)"
                                    stroke-width="1.03408"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M24.6379 15.0602C25.0225 15.3679 25.0849 15.9292 24.7772 16.3138L20.4662 21.7026L24.7772 27.0914C25.0849 27.476 25.0225 28.0373 24.6379 28.345C24.2533 28.6527 23.692 28.5904 23.3843 28.2057L18.6275 22.2598C18.3669 21.934 18.3669 21.4712 18.6275 21.1455L23.3843 15.1995C23.692 14.8149 24.2533 14.7525 24.6379 15.0602Z"
                                    fill="white"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_831_6513"
                                        x1="21.9999"
                                        y1="0"
                                        x2="21.9999"
                                        y2="41.0667"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#FF5301" />
                                        <stop offset="1" stop-color="#FFD901" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear_831_6513"
                                        x1="22"
                                        y1="0"
                                        x2="22"
                                        y2="44"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#571100" />
                                        <stop offset="1" stop-color="#CE2800" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button>
                        <span className="text-2xl font-sans font-semibold col-span-3 oleo-script">
                            {city}
                        </span>
                        <div />
                    </div>
                    <form className="flex flex-col w-full items-center gap-8 p-4">
                        <div className="px-3 w-full">
                            <span className="text-xl font-medium">Select time</span>
                            <div className="flex my-6 justify-between border-1 border-red-900 rounded-full">
                                {places
                                    .find((event) => event.place === city)
                                    .time.map((timestamp, index) => {
                                        const time = new Date().setHours(
                                            Number(timestamp.split(":")[0]),
                                            Number(timestamp.split(":")[1]),
                                            0,
                                            0
                                        );

                                        return (
                                            <>
                                                <input
                                                    onChange={(e) =>
                                                        setSelectedTime(Number(e.target.value))
                                                    }
                                                    className="btn-check"
                                                    type="radio"
                                                    name="betDate"
                                                    id={`betDate${index}`}
                                                    value={time}
                                                    autoComplete="off"
                                                    required
                                                />
                                                <label
                                                    className={cn(
                                                        "btn py-2 text-white text-[14px] rounded-full",
                                                        selectedTime == time &&
                                                            "text-white !bg-orange-500"
                                                    )}
                                                    htmlFor={`betDate${index}`}
                                                >
                                                    {new Date(time).toLocaleString("default", {
                                                        hour: "numeric",
                                                        minute: "numeric",
                                                    })}
                                                </label>
                                            </>
                                        );
                                    })}
                            </div>
                            <span className="text-xl font-medium">Select Position</span>
                            <div className="flex mt-6 justify-between w-[60%] border-1 border-red-800 rounded-full">
                                <input
                                    onChange={(e) => setPosition(e.target.value)}
                                    className="btn-check"
                                    type="radio"
                                    name="bet-position"
                                    id="bet-open"
                                    value="Open"
                                    autoComplete="off"
                                    required
                                />
                                <label
                                    className={cn(
                                        "btn py-2 text-lg px-8 text-white rounded-full",
                                        position === "Open" && "!bg-orange-500"
                                    )}
                                    htmlFor="bet-open"
                                >
                                    Open
                                </label>
                                <input
                                    onChange={(e) => setPosition(e.target.value)}
                                    className="btn-check"
                                    type="radio"
                                    name="bet-position"
                                    id="bet-close"
                                    value="Close"
                                    autoComplete="off"
                                    required
                                />
                                <label
                                    className={cn(
                                        "btn py-2 px-8 text-lg text-white rounded-full",
                                        position === "Close" && " !bg-orange-500"
                                    )}
                                    htmlFor="bet-close"
                                >
                                    Close
                                </label>
                            </div>
                        </div>
                    </form>
                    <div className="flex flex-wrap justify-center items-center w-full gap-5 my-5 p-5">
                        <button disabled={!selectedTime || !position} onClick={() => setIsModalOpen("single")} className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                            <SingleBet />
                        </button>
                        <button disabled={!selectedTime || !position} onClick={() => setIsModalOpen("double")} className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                            <DoubleBet />
                        </button>
                        <button disabled={!selectedTime || !position} onClick={() => setIsModalOpen("triple")} className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                            <TripleBet />
                        </button>
                    </div>
                    {/* <div className="bg-white flex flex-col items-center justify-center w-full min-h-full py-10">
                        <button
                            disabled={!selectedTime || !position}
                            onClick={handleOpenModal}
                            className="bg-orange-500 py-2 px-12 text-xl font-semibold rounded-full flex justify-center text-white w-[60%] disabled:opacity-45 disabled:cursor-not-allowed"
                        >
                            + Add Tickets
                        </button>
                        <button
                            disabled={!selectedTime || !position}
                            onClick={() =>
                                setTickets((prev) => ({
                                    ...prev,
                                    [777]: {
                                        amount: 500,
                                        ticket: 777,
                                        time: selectedTime,
                                        position,
                                    },
                                }))
                            }
                            className="bg-gradient-to-b from-sky-400 to-teal-600 my-4 py-2 px-12 text-xl font-semibold rounded-full flex justify-center text-white disabled:opacity-45 disabled:cursor-not-allowed"
                        >
                            Jackpot (777)
                            <br />
                            Win upto 10 Lakh
                        </button>

                        <table className="table mt-5 table-hover table-auto">
                            <thead className="border-b-[#F6571E]">
                                <tr className="active">
                                    <th className=" text-lg text-[#281F1D] font-medium">Ticket</th>
                                    <th className=" text-lg text-[#281F1D] font-medium">Amount</th>
                                    <th className=" text-lg text-[#281F1D] font-medium">Type</th>
                                    <th className=" text-lg text-[#281F1D] font-medium">Time</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {Object.values(tickets).length > 0 ? (
                                    <>
                                        {Object.values(tickets).map(
                                            ({
                                                amount,
                                                ticket,
                                                position,
                                                time,
                                            }: {
                                                amount: number;
                                                ticket: number;
                                                position: string;
                                                time: string;
                                            }) => (
                                                <tr>
                                                    <td className="text-[#281F1D] text-center leading-[14px]">
                                                        {ticket}
                                                    </td>
                                                    <td className="text-[#281F1D] text-center leading-[14px]">
                                                        {amount}
                                                    </td>
                                                    <td className="text-[#281F1D] text-center leading-[14px]">
                                                        {position}
                                                    </td>
                                                    <td className="text-[#281F1D] text-center leading-[14px]">
                                                        {new Date(time).toLocaleString("default", {
                                                            hour: "numeric",
                                                            minute: "numeric",
                                                        })}
                                                    </td>

                                                    <td
                                                        onClick={() => handleDelete(ticket)}
                                                        className="text-[#281F1D] cursor-pointer text-center leading-[14px]"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            className="bi bi-trash"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                        </svg>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </>
                                ) : (
                                    <tr>
                                        <td />
                                        <td
                                            aria-colspan={5}
                                            className="bg-white text-center text-orange-500"
                                        >
                                            No data found
                                        </td>

                                        <td />
                                        <td />
                                    </tr>
                                )}
                            </tbody>
                           
                        </table>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="py-2 text-[#281F1D] text-2xl font-semibold">
                            Total Amount:{" "}
                            <p className="text-[#FE480F] inline-flex items-center text-2xl font-semibold">
                                Rs {totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                        </span>
                        <Button
                            isLoading={isLoading}
                            text="Buy Tickets"
                            className="w-fit"
                            onAction={buyTicket}
                            disabled={isLoading || totalAmount > user?.amount}
                        />
                    </div> */}
                </section>
            )}
        </>
    );
};

