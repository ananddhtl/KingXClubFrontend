import { getPurchasedTicket } from "@/api/api";
import { routes } from "@/constants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const BidHistory = () => {
    const navigate = useNavigate();
    const [bidHistory, setBidHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const purchased = await getPurchasedTicket();
                console.log({ purchased });
                setBidHistory(purchased.data.data);
            } catch (error) {
                console.log(`Error fetching lucky winner: ${error}`);
                toast.error(error.response?.data?.message || "Unknown error");
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);
    return (
        <section className="bg-[#F4F4F4] flex flex-col items-center justify-start text-black gap-10 min-h-screen p-4">
            <div className="sticky top-1 flex justify-between items-center w-full">
                <button
                    onClick={() => navigate(routes.PROFILE)}
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
                            strokeWidth="1.3125"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <span className="text-2xl font-sans font-semibold">Bid History</span>
                <button className="p-4 bg-white rounded-lg shadow-sm">
                    <svg
                        width="15"
                        height="18"
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.26131 14.3008C9.26131 14.7586 8.96109 15.3588 8.57842 15.5914L7.52051 16.2742C6.53756 16.882 5.17191 16.1992 5.17191 14.9837V10.9693C5.17191 10.4366 4.87177 9.75376 4.56413 9.37859L1.68279 6.34721C1.30011 5.96453 1 5.28923 1 4.83152V3.09072C1 2.1828 1.68283 1.5 2.51571 1.5H12.5252C13.3581 1.5 14.041 2.1828 14.041 3.01569V4.68145C14.041 5.28922 13.6583 6.04708 13.2831 6.42225"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10.5744 12.3875C11.9005 12.3875 12.9755 11.3124 12.9755 9.98636C12.9755 8.66028 11.9005 7.58527 10.5744 7.58527C9.24836 7.58527 8.17334 8.66028 8.17334 9.98636C8.17334 11.3124 9.24836 12.3875 10.5744 12.3875Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.4256 12.8376L12.6753 12.0873"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col w-full items-center gap-8 child:max-w-fit">
                {bidHistory.length === 0 ? (
                    <span className="text-xl">No history found</span>
                ) : (
                    <>
                        {bidHistory.map((bid) => (
                            <div className="bg-white relative flex flex-col gap-2 items-center p-1 w-full rounded-3xl">
                                <span className="bg-orange-600 rounded-tl-lg rounded-tr-lg text-white font-semibold text-lg py-2 w-full text-center">
                                    {bid.place}
                                </span>
                                <div className="flex flex-wrap gap-5 px-5 ">
                                    <span className="text-xs text-center font-medium text-[#281F1D]">
                                        BID ID<p className="text-center text-sm">{bid._id.slice(-5)}</p>
                                    </span>
                                    <span className="text-xs text-center font-medium text-[#281F1D]">
                                        GAME TYPE
                                        <p className="text-center text-sm">
                                            {bid.ticket.toString().length === 1
                                                ? "SINGLE"
                                                : bid.ticket.toString().length === 2
                                                ? "DOUBLE"
                                                : "TRIPLE"}
                                        </p>
                                    </span>
                                    <span className="text-xs text-center font-medium text-[#281F1D]">
                                        DIGIT<p className="text-center text-sm">{bid.ticket}</p>
                                    </span>
                                   
                                    <span className="text-xs text-center font-medium text-[#281F1D]">
                                        POSITION<p className="text-center text-sm">{bid.position}</p>
                                    </span>
                                    <span className="text-xs text-center font-semibold text-red-500">
                                        AMOUNT<p className="text-center text-sm">{bid.amount}</p>
                                    </span>
                                    <span className="text-xs text-center font-medium text-[#281F1D]">
                                        BID DATE
                                        <p className="text-center text-sm">
                                            {new Date(bid.time).toLocaleDateString()}
                                        </p>
                                    </span>
                                    <span className="text-xs text-center font-medium text-[#281F1D]">
                                        BID TIME
                                        <p className="text-center text-sm">
                                            {new Date(bid.time).toLocaleTimeString()}
                                        </p>
                                    </span>
                                    <span className="text-xs text-center font-medium text-[#281F1D]">
                                        TRANSACTION
                                        <p className="text-center text-sm">
                                            {new Date(bid.createdAt).toLocaleString()}
                                        </p>
                                    </span>
                                    {bid.won === true && (
                                        <span className="text-xs text-center font-semibold text-green-600">
                                            RETURNS<p className="text-center text-sm">{bid.returns}</p>
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </section>
    )
};
