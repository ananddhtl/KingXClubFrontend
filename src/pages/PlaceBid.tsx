import { CLUBS, routes } from "@/constants";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BidModal from "./BidModal";
import { cn } from "@/utils/cn";
import { useProfileContext } from "@/App";
import { DoubleBet, FullKing, HalfKing, SingleBet, TripleBet } from "@/constants/assets/Icons";

export const PlaceBid = () => {
    const navigate = useNavigate();
    const { city } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(null);
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
                <section className="text-white flex flex-col items-center py-8 min-h-screen ">
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
                                {CLUBS
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
                                                    disabled={new Date(time).setMinutes(new Date(time).getMinutes() + (2 * 60 - 15)) < Date.now()}
                                                />
                                                <label
                                                aria-disabled
                                                    className={cn(
                                                        "btn py-2 text-white text-[14px] rounded-full",
                                                        selectedTime == time &&
                                                            "text-white !bg-orange-500",
                                                        (new Date(time).setMinutes(new Date(time).getMinutes() - 15) < Date.now() && new Date(time).setMinutes(new Date(time).getMinutes() + (2 * 60 - 15)) > Date.now()) && "text-yellow-400",
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
                                    disabled={!selectedTime || new Date(selectedTime).setMinutes(new Date(selectedTime).getMinutes() - 15) < Date.now()}
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
                                    disabled={!selectedTime}
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
                        <button disabled={true} onClick={() => setIsModalOpen(null)} className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                            <HalfKing />
                        </button>
                        <button disabled={true} onClick={() => setIsModalOpen(null)} className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                            <FullKing />
                        </button>
                    </div>
                </section>
            )}
        </>
    );
};

