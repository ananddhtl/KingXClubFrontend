import { useProfileContext } from "@/App";
import { cn } from "@/utils/cn";
import { useState } from "react";
// import { toast } from "react-toastify";
import { toast } from "react-hot-toast";

const BidModal = ({ isOpen, onClose, time, position, tickets, setTickets, totalAmount }) => {
    const [selectedType, setSelectedType] = useState("single");
    const [selectedInitial, setSelectedInitial] = useState(1);
    const { user } = useProfileContext();

    const handlePlaceBid = () => {
        if (Object.values(tickets).length > 0) {
            onClose();
        } else {
            // Show error toast if number or price is not selected
            toast.error("Please select a number and enter a price");
        }
    };

    const renderNumbers = () => {
        if (selectedType === "single") {
            return Array.from({ length: 10 }, (_, i) => i ).map((num) => (
                <div
                    key={num}
                    className={cn(
                        "flex justify-center items-center bg-white w-fit text-black rounded-lg mb-4"
                    )}
                >
                    <button
                        className={cn(
                            "bg-white px-2 border-r-2 border-stone-500 text-stone-500",
                            Object.prototype.hasOwnProperty.call(tickets, num) &&
                                "!text-orange-500 !border-orange-600"
                        )}
                    >
                        <p className="font-medium text-lg">{num}</p>
                    </button>
                    <input
                        type="number"
                        onChange={(e) =>
                            setTickets((prev) => ({
                                ...prev,
                                [num]: {
                                    amount: Number(e.target.value),
                                    ticket: num,
                                    time,
                                    position,
                                },
                            }))
                        }
                        defaultValue={tickets[num]?.amount}
                        placeholder="Amount"
                        className={cn(
                            "px-3 py-2 outline-none rounded-r-full w-28 text-black font-semibold placeholder:font-medium text-lg",
                            Object.prototype.hasOwnProperty.call(tickets, num) && "!text-orange-500"
                        )}
                    />
                </div>
            ));
        } else if (selectedType === "double") {
            return Array.from({ length: 10 }, (_, i) => i + (10 * selectedInitial)).map((num) => (
                <div
                    key={num}
                    className={cn(
                        "flex justify-center items-center bg-white w-fit text-black rounded-lg mb-4"
                    )}
                >
                    <button
                        className={cn(
                            "bg-white px-2 border-r-2 border-stone-500 text-stone-500",
                            Object.prototype.hasOwnProperty.call(tickets, num) &&
                                "!text-orange-500 !border-orange-600"
                        )}
                    >
                        <p className="font-medium text-lg">{num}</p>
                    </button>
                    <input
                        type="number"
                        onChange={(e) =>
                            setTickets((prev) => ({
                                ...prev,
                                [num]: {
                                    amount: Number(e.target.value),
                                    ticket: num,
                                    time,
                                    position,
                                },
                            }))
                        }
                        defaultValue={tickets[num]?.amount}
                        placeholder="Amount"
                        className={cn(
                            "px-3 py-2 outline-none rounded-r-full w-28 text-black font-semibold placeholder:font-medium text-lg",
                            Object.prototype.hasOwnProperty.call(tickets, num) && "!text-orange-500"
                        )}
                    />
                </div>
            ));
        } else if (selectedType === "triple") {
            return Array.from({ length: 100 }, (_, i) => i + (100 * selectedInitial)).map((num) => (
                <div
                    key={num}
                    className={cn(
                        "flex justify-center items-center bg-white w-fit text-black rounded-lg mb-4"
                    )}
                >
                    <button
                        className={cn(
                            "bg-white px-2 border-r-2 border-stone-500 text-stone-500",
                            Object.prototype.hasOwnProperty.call(tickets, num) &&
                                "!text-orange-500 !border-orange-600"
                        )}
                    >
                        <p className="font-medium text-lg">{num}</p>
                    </button>
                    <input
                        type="number"
                        onChange={(e) =>
                            setTickets((prev) => ({
                                ...prev,
                                [num]: {
                                    amount: Number(e.target.value),
                                    ticket: num,
                                    time,
                                    position,
                                },
                            }))
                        }
                        defaultValue={tickets[num]?.amount}
                        placeholder="Amount"
                        className={cn(
                            "px-3 py-2 outline-none rounded-r-full w-28 text-black font-semibold placeholder:font-medium text-lg",
                            Object.prototype.hasOwnProperty.call(tickets, num) && "!text-orange-500"
                        )}
                    />
                </div>
            ));
        } else {
            return <p className="text-center my-4 font-semibold">Choose your Lucky Number</p>;
        }
    };

    return (
        <>
            {isOpen && (
                <section className="bg-[#F4F4F4] pt-5 fixed inset-0 z-10 flex flex-col items-center justify-start text-black gap-10 min-h-screen">
                    <div className="sticky top-1 grid grid-cols-5 justify-center place-items-center w-full">
                        <button
                            onClick={onClose}
                            className="p-4 w-fit bg-white rounded-lg shadow-sm"
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
                        <span className="text-2xl tracking-wide font-sans font-semibold col-span-3">
                            Select Tickets
                        </span>
                        <div />
                    </div>
                    <div className="flex flex-col items-center justify-between pb-20 bg-gradient-to-b to-[rgba(254,72,15,0.81)] from-[#FE480F] w-full h-full rounded-t-3xl">
                        <form className="flex justify-center w-full">
                            <div className="flex my-6 justify-between bg-white/20 border-2 p-1 border-white/50 w-[80%] rounded-full">
                                <input
                                    onClick={() => setSelectedType("single")}
                                    className="btn-check"
                                    type="radio"
                                    name="digit"
                                    id="single"
                                    value="Single"
                                    autoComplete="off"
                                    required
                                />
                                <label
                                    className={cn(
                                        "btn py-2 text-lg text-white font-semibold px-5 rounded-full",
                                        selectedType === "single" && "bg-white !text-orange-500"
                                    )}
                                    htmlFor="single"
                                >
                                    Single
                                </label>
                                <input
                                    onClick={() => setSelectedType("double")}
                                    className="btn-check"
                                    type="radio"
                                    name="digit"
                                    id="double"
                                    value="Double"
                                    autoComplete="off"
                                    required
                                />
                                <label
                                    className={cn(
                                        "btn py-2 text-lg text-white font-semibold px-5 rounded-full",
                                        selectedType === "double" && "bg-white !text-orange-500"
                                    )}
                                    htmlFor="double"
                                >
                                    Double
                                </label>
                                <input
                                    onClick={() => setSelectedType("triple")}
                                    className="btn-check"
                                    type="radio"
                                    name="digit"
                                    id="triple"
                                    value="Triple"
                                    autoComplete="off"
                                    required
                                />
                                <label
                                    className={cn(
                                        "btn py-2 text-lg text-white font-semibold px-5 rounded-full",
                                        selectedType === "triple" && "bg-white !text-orange-500"
                                    )}
                                    htmlFor="triple"
                                >
                                    Triple
                                </label>
                            </div>
                        </form>
                        {selectedType !== "single" && (
                            <div className="flex gap-2">
                                {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                                    <p
                                        onClick={() => setSelectedInitial(num)}
                                        className={cn(
                                            "w-6 h-6 text-center bg-white text-orange-500 rounded-md",
                                            selectedInitial === num && "bg-orange-400 text-white"
                                        )}
                                    >
                                        {num}
                                    </p>
                                ))}
                            </div>
                        )}
                        <div className="grid grid-cols-2 justify-center place-items-center gap-2 scrollbar overflow-y-scroll w-full h-[40dvh]">
                            {renderNumbers()}
                        </div>
                        <span className="py-2 text-white text-xl font-semibold">
                            Winning Odds:{" "}
                            <p className="text-black/50 inline-flex items-center text-xl font-semibold">
                                {selectedType === "single"
                                    ? "x9"
                                    : selectedType === "double"
                                    ? "x99"
                                    : "x499"}
                            </p>
                        </span>
                        <div className="flex flex-col items-center justify-center">
                            <span className="py-2 text-white text-lg font-semibold">
                                Wallet Balance:{" "}
                                <p className="text-black/50 inline-flex items-center  font-semibold">
                                    Rs
                                    {` ${(user?.amount || 0)
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} `}
                                </p>
                            </span>
                            <button
                                disabled={totalAmount > user?.amount}
                                onClick={handlePlaceBid}
                                className="bg-white hover:bg-white text-[#FE480F] hover:text-[#FE480F] w-fit outline-none flex justify-center py-3 px-4 rounded-xl font-semibold disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default BidModal;
