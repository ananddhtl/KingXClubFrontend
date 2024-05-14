import { routes } from "@/constants";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import BidModal from "./BidModal";
// import { useProfileContext } from "@/App";
import { cn } from "@/utils/cn";
import { toast } from "react-hot-toast";
import { Button } from "@/components/button/Button";
import { buyTicketAPI } from "@/api/api";
import { useProfileContext } from "@/App";
const places = [
    {
        place: "Pashupatinath",
        time: ["07:00", "11:00", "15:00", "18:00", "23:00"],
    },
    {
        place: "Rara",
        time: ["08:00", "11:00", "16:00", "19:00", "23:00"],
    },
    {
        place: "Durbar Square",
        time: ["09:00", "12:00", "17:00", "20:00", "23:30"],
    },
    {
        place: "Swoyambhunath",
        time: ["09:00", "12:00", "17:00", "21:00", "23:45"],
    },
];
export const PlaceBid = () => {
    const navigate = useNavigate();
    const { city } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { user, setUser } = useProfileContext();
    const [selectedTime, setSelectedTime] = useState(null);
    const [position, setPosition] = useState(null);
    const [tickets, setTickets] = useState({});

    const totalAmount = useMemo(
        () =>
            Object.values(tickets)
                .reduce(
                    (accumulator: number, currentValue: { amount: number }) =>
                        accumulator + currentValue.amount,
                    0
                )
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        [tickets]
    );

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = (ticketToDelete) => {
        const updatedTickets = { ...tickets };
        delete updatedTickets[ticketToDelete];
        setTickets(updatedTickets);
    };

    const buyTicket = async (): Promise<any> => {
        try {
            setIsLoading(true);
            const res = await buyTicketAPI({ tickets: Object.values(tickets), place: city });
            console.log(res);

            toast.success(res.data?.message || "Purchase Successful");
            setUser({ ...user, amount: user.amount - res.data?.amount });
            return res;
        } catch (error) {
            console.log(`Error logging user: ${error}`);
            toast.error(error.response?.data?.message || "Unknown error", { id: "unknown-error" });
            throw new Error(`Error logging user: ${error}`);
        } finally {
            setIsLoading(false);
            navigate(routes.INDEX);
        }
    };
    console.log({ tickets });

    useEffect(() => {
        if (!user) navigate(routes.LOGIN);
    }, [navigate, user]);

    return (
        <>
            {isModalOpen ? (
                <BidModal
                    tickets={tickets}
                    setTickets={setTickets}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    time={selectedTime}
                    position={position}
                    totalAmount={totalAmount}
                />
            ) : (
                <section className="bg-[#F4F4F4] flex flex-col items-center justify-between py-8 text-black min-h-screen ">
                    <div className="sticky top-1 px-4 grid grid-cols-5 justify-center place-items-center w-full">
                        <button
                            onClick={() => navigate(routes.INDEX)}
                            className="p-4 bg-white rounded-lg shadow-sm"
                        >
                            <svg
                                width="9"
                                height="16"
                                viewBox="0 0 9 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 1L1 8L8 15"
                                    stroke="black"
                                    stroke-width="1.3125"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                        <span className="text-2xl font-sans font-semibold col-span-3">{city}</span>
                        <div />
                    </div>
                    <form className="flex flex-col w-full items-center gap-8 p-4">
                        <div className="bg-white p-3 w-full rounded-3xl">
                            <span className="text-xl font-medium">Select time</span>
                            <div className="flex my-6 justify-between border-2 border-[#eceaea] rounded-full">
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
                                                        "btn py-2 text-black text-[14px] rounded-full",
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
                            <div className="flex mt-6 justify-between w-[60%] border-2 border-[#eceaea] rounded-full">
                                <input
                                    onChange={(e) => setPosition(e.target.value)}
                                    className="btn-check"
                                    type="radio"
                                    name="bet-position"
                                    id="bet-left"
                                    value="Left"
                                    autoComplete="off"
                                    required
                                />
                                <label
                                    className={cn(
                                        "btn py-2 text-lg px-8 text-black rounded-full",
                                        position === "Left" && "text-white !bg-orange-500"
                                    )}
                                    htmlFor="bet-left"
                                >
                                    Left
                                </label>
                                <input
                                    onChange={(e) => setPosition(e.target.value)}
                                    className="btn-check"
                                    type="radio"
                                    name="bet-position"
                                    id="bet-right"
                                    value="Right"
                                    autoComplete="off"
                                    required
                                />
                                <label
                                    className={cn(
                                        "btn py-2 px-8 text-lg text-black rounded-full",
                                        position === "Right" && "text-white !bg-orange-500"
                                    )}
                                    htmlFor="bet-right"
                                >
                                    Right
                                </label>
                            </div>
                        </div>
                    </form>
                    <div className="bg-white flex flex-col items-center justify-center w-full min-h-full py-10">
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
                            {/* <tbody>
                        {tickets}
                        <tr>
                            <td className="text-center text-[#281F1D]">123</td>
                            <td className="text-center text-[#281F1D]">100</td>
                            <td className="text-center text-[#281F1D]">Right</td>
                        </tr>
                    </tbody> */}
                        </table>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="py-2 text-[#281F1D] text-2xl font-semibold">
                            Total Amount:{" "}
                            <p className="text-[#FE480F] inline-flex items-center text-2xl font-semibold">
                                Rs{' '}
                                {totalAmount.toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                        </span>
                        <Button
                            isLoading={isLoading}
                            text="Buy Tickets"
                            className="w-fit"
                            onAction={buyTicket}
                            disabled={isLoading || totalAmount > user?.amount}
                        />
                    </div>
                </section>
            )}
        </>
    );
};
