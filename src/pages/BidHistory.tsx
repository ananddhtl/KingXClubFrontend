import { getPurchasedTicket } from "@/api/api";
import { routes } from "@/constants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useProfileContext } from "@/App";
import BottomNavbar from "../components/DrawerNav/BottomNavbar";
import { BiSolidLeftArrowAlt } from "react-icons/bi";

export const BidHistory = () => {
    const navigate = useNavigate();
    const [bidHistory, setBidHistory] = useState([]);
    const { user } = useProfileContext();

    useEffect(() => {
        if (!user) navigate(routes.LOGIN);
    }, [navigate, user]);

    const hasWon = (bid) => {
        if (bid.position === "Open" && new Date(bid?.time).getTime() > Date.now()) return null;
        else if (
            (bid.position === "Close" || bid.position === null) &&
            new Date(bid?.time).setMinutes(new Date(bid?.time).getHours() + 1) > Date.now()
        )
            return null;
        else return bid.won;
    };

    useEffect(() => {
        (async () => {
            try {
                const purchased = await getPurchasedTicket();
                console.log({ purchased });
                setBidHistory(purchased.data.data);
            } catch (error) {
                console.log(`Error fetching lucky winner: ${error}`);
                toast.error(error.response?.data?.message || "Unknown error", {
                    id: "token failed",
                });
            }
        })();
    }, []);
    return (
        <section className="flex flex-col items-center justify-start text-white gap-10 min-h-screen p-4">
            <div className="sticky top-5 flex justify-between items-center w-full">
                <button
                    onClick={() => navigate(routes.INDEX)}
                    className="p-3 bg-gray-100 rounded-full shadow-sm"
                >
                    <BiSolidLeftArrowAlt className="w-full text-black" />
                    {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
                </button>
                <span className="text-2xl font-sans font-semibold  oleo-script">Bid History</span>
                <div />
            </div>
            <div className="flex flex-col w-full items-center gap-8 child:max-w-fit">
                {bidHistory.length === 0 ? (
                    <span className="text-xl">No history found</span>
                ) : (
                    <>
                        {bidHistory.map((bid) => (
                            <div
                                className={`${
                                    hasWon(bid) === null
                                        ? "border-gray-500"
                                        : hasWon(bid)
                                        ? "border-green-800"
                                        : "border-red-800"
                                } border-2 relative flex flex-col gap-2 items-center p-1 w-full rounded-3xl`}
                            >
                                <span className=" rounded-tl-lg rounded-tr-lg text-white font-semibold text-lg py-2 w-full text-center">
                                    {bid.place}
                                </span>
                                <div className="flex flex-wrap gap-5 px-5 text-white">
                                    <span className="text-xs text-center font-medium ">
                                        BID ID
                                        <p className="text-center text-sm">{bid._id.slice(-5)}</p>
                                    </span>
                                    <span className="text-xs text-center font-medium ">
                                        GAME TYPE
                                        <p className="text-center text-sm">
                                            {bid.ticket.toString().length === 1
                                                ? "SINGLE"
                                                : bid.ticket.toString().length === 2
                                                ? "DOUBLE"
                                                : "TRIPLE"}
                                        </p>
                                    </span>
                                    <span className="text-xs text-center font-medium ">
                                        DIGIT<p className="text-center text-sm">{bid.ticket}</p>
                                    </span>

                                    <span className="text-xs text-center font-medium ">
                                        POSITION
                                        <p className="text-center text-sm">{bid.position}</p>
                                    </span>
                                    <span className="text-xs text-center font-semibold text-red-500">
                                        AMOUNT<p className="text-center text-sm">{bid.amount}</p>
                                    </span>
                                    <span className="text-xs text-center font-medium ">
                                        BID DATE
                                        <p className="text-center text-sm">
                                            {new Date(bid.time).toLocaleDateString("default", {
                                                day: "2-digit",
                                                month: "short",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </p>
                                    </span>
                                    {hasWon(bid) === true && (
                                        <span className="text-xs text-center font-semibold text-green-600">
                                            RETURNS
                                            <p className="text-center text-sm">{bid.returns}</p>
                                        </span>
                                    )}
                                    <br />
                                    {hasWon(bid) !== null && (
                                            <span
                                                className={`text-xl w-full text-center font-semibold ${
                                                    hasWon(bid) ? "text-green-600" : "text-red-600"
                                                }`}
                                            >
                                                {hasWon(bid)
                                                    ? "WIN, Congratulation !!!"
                                                    : "LOSS, Better Luck next time"}
                                            </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
            <BottomNavbar />
        </section>
    );
};
