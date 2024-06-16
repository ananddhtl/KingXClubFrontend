import { useProfileContext } from "@/App";
import { buyTicketAPI } from "@/api/api";
import { Button } from "@/components/button/Button";
import { routes } from "@/constants";
import { cn } from "@/utils/cn";
import { useMemo, useState } from "react";
// import { toast } from "react-toastify";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BidModal = ({ isOpen, onClose, time, position, city }) => {
    // const [isOpen, setisOpen] = useState("single");
    console.log({ isOpen });

    const [selectedInitial, setSelectedInitial] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const { user, setUser } = useProfileContext();
    const [tickets, setTickets] = useState({});
    const navigate = useNavigate();

    const totalAmount = useMemo(
        () =>
            Object.values(tickets).reduce(
                (accumulator: number, currentValue: { amount: number }) =>
                    accumulator + currentValue.amount,
                0
            ),
        [tickets]
    ) as number;
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
    const isIncreasingNumber = (num: number) => {
        const numberString = num.toString();
        for (let i = 0; i < numberString.length - 1; i++) {
            if (numberString.charAt(i) > numberString.charAt(i + 1)) {
                return false;
            }
        }
        return true;
    };

    const renderNumbers = () => {
        if (isOpen === "single") {
            return Array.from({ length: 10 }, (_, i) => i).map((num) => (
                <button
                    className={cn(
                        " w-12 h-12 outline-none flex justify-center items-center text-white border-1 border-orange-500 rounded-full",
                        Object.prototype.hasOwnProperty.call(tickets, num) &&
                            "bg-orange-400 text-white"
                    )}
                    onClick={() => {
                        setTickets((prev) => ({
                            ...prev,
                            [num]: {
                                amount: 100,
                                ticket: num,
                                time,
                                position,
                            },
                        }));
                        setTimeout(() => document.getElementById(`input-${num}`).focus(), 1000);

                    }}
                >
                    <p className="font-medium text-xl">{num}</p>
                </button>
            ));
        } else if (isOpen === "double") {
            return Array.from({ length: 10 }, (_, i) => i + 10 * selectedInitial).map((num) => (
                <button
                    className={cn(
                        " w-12 h-12 outline-none flex justify-center items-center text-white border-1 border-orange-500 rounded-full",
                        Object.prototype.hasOwnProperty.call(tickets, num) &&
                            "bg-orange-400 text-white"
                    )}
                    onClick={() => {
                        setTickets((prev) => ({
                            ...prev,
                            [num]: {
                                amount: 100,
                                ticket: num,
                                time,
                                position,
                            },
                        }));
                        setTimeout(() => document.getElementById(`input-${num}`).focus(), 1000);

                    }}
                >
                    <p className="font-medium text-xl">{num}</p>
                </button>
            ));
        } else if (isOpen === "triple") {
            return Array.from({ length: 100 }, (_, i) => {
                const num = i + 100 * selectedInitial;
                if (isIncreasingNumber(num)) return num;
                return;
            })
                .filter((value) => value)
                .map((num) => (
                    <button
                        className={cn(
                            " w-12 h-12 outline-none flex justify-center items-center text-white border-1 border-orange-500 rounded-full",
                            Object.prototype.hasOwnProperty.call(tickets, num) &&
                                "bg-orange-400 text-white"
                        )}
                        onClick={() => {
                            setTickets((prev) => ({
                                ...prev,
                                [num]: {
                                    amount: 100,
                                    ticket: num,
                                    time,
                                    position,
                                },
                            }));
                            setTimeout(() => document.getElementById(`input-${num}`).focus(), 1000);
                        }}
                    >
                        <p className="font-medium text-xl">{num}</p>
                    </button>
                ));
        } else {
            return <p className="text-center my-4 font-semibold">Choose your Lucky Number</p>;
        }
    };

    return (
        <>
            {isOpen && (
                <section className="scrollable-section pt-5 fixed inset-0 z-10 flex flex-col items-center justify-start text-white gap-10 min-h-screen">
                    <div className="sticky  py-4  grid grid-cols-5 justify-center place-items-center w-full">
                        <button onClick={onClose}>
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
                        <span className="text-2xl tracking-wide font-sans font-semibold col-span-3 oleo-script">
                            Select Tickets
                        </span>
                        <div />
                    </div>
                    <div className="flex flex-col items-center justify-between pb-20 w-full h-full">
                        {isOpen !== "single" && (
                            <div className="flex gap-2 border-1 border-red-800 p-2 rounded-2xl">
                                {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                                    <p
                                        onClick={() => setSelectedInitial(num)}
                                        className={cn(
                                            "w-8 h-8 flex justify-center items-center text-white border-1 border-orange-500 rounded-full",
                                            selectedInitial === num && "bg-orange-400 text-white"
                                        )}
                                    >
                                        {num}
                                    </p>
                                ))}
                            </div>
                        )}
                        <div className="text-center pt-5">
                            <span className="text-xl">Try Your Luck</span>
                            <div className="p-5 flex justify-around items-center flex-wrap gap-5 w-full">
                                {renderNumbers()}
                            </div>
                        </div>
                        <div className="p-3 w-full">
                            <div className="bg-[url('assets/image/border-image.png')] bg-cover p-6 flex flex-col justify-center items-center bg-no-repeat h-auto">
                                <p className="styled-text mt-5">Your Bidding Summary</p>
                                <div className="w-full mt-5 border-1  rounded-xl border-red-800 bg-transparent ">
                                    <table className="w-full table-sm">
                                        <thead className=" text-white ">
                                            <tr className="active text-center">
                                                <th className="text-lg  font-medium">Ticket</th>
                                                <th className=" text-lg  font-medium">Amount</th>
                                                {/* <th className=" text-lg  font-medium">Type</th>
                                                <th className=" text-lg  font-medium">Time</th> */}
                                                <th className=" text-lg  font-medium">Returns</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.values(tickets).length > 0 && (
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
                                                            <tr className="border-t-[1px] border-t-[#F6571E]">
                                                                <td className=" text-center leading-[14px]">
                                                                    {ticket}
                                                                </td>
                                                                <td className=" text-center leading-[14px]">
                                                                    <input
                                                                        type="number"
                                                                        id={`input-${ticket}`}
                                                                        onChange={(e) => {
                                                                            if (
                                                                                Number(
                                                                                    e.target.value
                                                                                ) < 100
                                                                            )
                                                                                handleDelete(
                                                                                    ticket
                                                                                );
                                                                            setTickets((prev) => ({
                                                                                ...prev,
                                                                                [ticket]: {
                                                                                    amount: Number(
                                                                                        e.target
                                                                                            .value
                                                                                    ),
                                                                                    ticket,
                                                                                    time,
                                                                                    position,
                                                                                },
                                                                            }));
                                                                        }}
                                                                        defaultValue={amount}
                                                                        min={100}
                                                                        placeholder="Amount"
                                                                        className={cn(
                                                                            "px-3 py-2 outline-none bg-transparent rounded-full text-center w-28 text-orange-500 font-semibold placeholder:font-medium text-lg"
                                                                        )}
                                                                    />
                                                                </td>
                                                                {/* <td className=" text-center leading-[14px]">
                                                                    {position}
                                                                </td>
                                                                <td className=" text-center leading-[14px]">
                                                                    {new Date(time).toLocaleString(
                                                                        "default",
                                                                        {
                                                                            hour: "numeric",
                                                                            minute: "numeric",
                                                                        }
                                                                    )}
                                                                </td> */}

                                                                <td className="text-center leading-[14px]">
                                                                    Rs.{" "}
                                                                    {isOpen === "single"
                                                                        ? amount * 9
                                                                        : isOpen === "double"
                                                                        ? amount * 99
                                                                        : amount * 499}
                                                                </td>
                                                                <td
                                                                    onClick={() =>
                                                                        handleDelete(ticket)
                                                                    }
                                                                    className="text-orange-500 scale-110 rounded-full !px-4  cursor-pointer"
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
                                            )}
                                        </tbody>
                                    </table>
                                    <div className="text-xl border-t-[1px] border-t-[#F6571E] p-2 mx-auto w-full flex justify-between">
                                        <p>Total Bids</p>
                                        <p>{Object.values(tickets).length}</p>
                                    </div>
                                    <div className="text-xl p-2 mx-auto w-full flex justify-between">
                                        <p>Total Bid Amount</p>
                                        <p>{totalAmount}</p>
                                    </div>{" "}
                                    <div className="text-xl p-2 mx-auto w-full flex justify-between">
                                        <p>Total Winning Amount</p>
                                        <p>
                                            {isOpen === "single"
                                                ? totalAmount * 9
                                                : isOpen === "double"
                                                ? totalAmount * 99
                                                : totalAmount * 499}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <span className="py-2 text-white text-xl font-semibold">
                                Winning Odds:{" "}
                                <p className="styled-text inline-flex items-center text-xl font-semibold">
                                    {isOpen === "single"
                                        ? "x9"
                                        : isOpen === "double"
                                        ? "x99"
                                        : "x499"}
                                </p>
                            </span>
                            <span className="py-2 text-white text-lg font-semibold">
                                Wallet Balance:{" "}
                                <p className="styled-text inline-flex items-center  font-semibold">
                                    Rs
                                    {` ${(user?.amount || 0)
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} `}
                                </p>
                            </span>
                            <Button
                                isLoading={isLoading}
                                text="Buy Tickets"
                                className="w-fit"
                                onAction={buyTicket}
                                disabled={
                                    isLoading ||
                                    totalAmount > user?.amount ||
                                    Object.values(tickets).length === 0 ||
                                    Object.values(tickets).some(
                                        ({ amount }: { amount: number }) => amount < 100
                                    )
                                }
                            />
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default BidModal;
