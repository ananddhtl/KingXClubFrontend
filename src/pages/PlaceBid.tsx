import { CLUBS, routes } from "@/constants";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BidModal from "./BidModal";
import { cn } from "@/utils/cn";
import { useProfileContext } from "@/App";
import {
    DoubleBet,
    FullKing,
    HalfKing,
    JackpotPlay,
    SingleBet,
    TripleBet,
} from "@/constants/assets/Icons";
import { BiSolidLeftArrowAlt } from "react-icons/bi";

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
                <section className=" flex flex-col items-center py-8 min-h-screen ">
                    <div className="sticky top-1 px-4 grid grid-cols-5 justify-center place-items-center w-full">
                        <button
                        onClick={() => navigate(routes.INDEX)}
                    className="p-3 bg-gray-100 rounded-full shadow-sm"
                >
                <BiSolidLeftArrowAlt className="w-full text-black"/>
                    {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
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
                                {CLUBS.find((event) => event.place === city).time.map(
                                    (timestamp, index) => {
                                        const time = new Date().setHours(
                                            Number(timestamp.split(":")[0]) * 24 + Number(timestamp.split(":")[1]),
                                            Number(timestamp.split(":")[2]),
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
                                                    disabled={
                                                        new Date(time).setMinutes(
                                                            new Date(time).getMinutes() +
                                                                (1 * 60 - 15)
                                                        ) < Date.now()
                                                    }
                                                />
                                                <label
                                                    aria-disabled
                                                    className={cn(
                                                        "btn py-2 text-white text-[14px] rounded-full",
                                                        selectedTime == time &&
                                                            "text-white !bg-orange-500",
                                                        new Date(time).setMinutes(
                                                            new Date(time).getMinutes() - 15
                                                        ) < Date.now() &&
                                                            new Date(time).setMinutes(
                                                                new Date(time).getMinutes() +
                                                                    (1 * 60 - 15)
                                                            ) > Date.now() &&
                                                            "text-yellow-400"
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
                                    }
                                )}
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
                                    disabled={
                                        !selectedTime ||
                                        new Date(selectedTime).setMinutes(
                                            new Date(selectedTime).getMinutes() - 15
                                        ) < Date.now()
                                    }
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
                        <button
                            disabled={!selectedTime || !position}
                            onClick={() => setIsModalOpen("jackpot")}
                            className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <JackpotPlay />
                        </button>
                        <button
                            disabled={!selectedTime || !position}
                            onClick={() => setIsModalOpen("single")}
                            className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <SingleBet />
                        </button>
                        <button
                            disabled={!selectedTime || !position || position === "Close"}
                            onClick={() => setIsModalOpen("double")}
                            className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <DoubleBet />
                        </button>
                        <button
                            disabled={!selectedTime || !position}
                            onClick={() => setIsModalOpen("triple")}
                            className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <TripleBet />
                        </button>

                        <button
                            disabled={!selectedTime || !position}
                            onClick={() => setIsModalOpen('half-king')}
                            className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <HalfKing />
                        </button>
                        <button
                            disabled={!selectedTime || !position}
                            onClick={() => setIsModalOpen('full-king')}
                            className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <FullKing />
                        </button>
                    </div>
                </section>
            )}
        </>
    );
};
