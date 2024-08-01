import { useProfileContext } from "@/App";
import { buyTicketAPI } from "@/api/api";
import { Button } from "@/components/button/Button";
import { routes } from "@/constants";
import { cn } from "@/utils/cn";
import { useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BidModal = ({ isOpen, onClose, time, position, city }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [firstNumber, setFirstNumber] = useState(null);
    const [secondNumber, setSecondNumber] = useState(null);
    const { user, setUser } = useProfileContext();
    const [tickets, setTickets] = useState(
        isOpen === "jackpot"
            ? {
                  [777]: {
                      amount: 500,
                      ticket: "777",
                      time,
                      position,
                  },
              }
            : {}
    );
    const navigate = useNavigate();

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

    const findPana = (value: string) => {
      if (value.split('-').length !== 1) return 0;

        // Create an object to store digit counts
        const digitCounts = {};

        // Iterate through each digit in the string
        for (const digit of value) {
            // Check if the digit is already present in the object
            if (digitCounts[digit]) {
                digitCounts[digit]++; // Increment the count if found
            } else {
                digitCounts[digit] = 1; // Initialize the count to 1 if not found
            }
        }
        return Math.max(...(Object.values(digitCounts) as number[]));
    };

    const findKing = (value: string) => {
        const numbers = value.split('-');
        if (numbers.length !== 2) return 0;
        if (numbers.every(number => number.length === 3)) return 10000;
        return 1000;
      };

    const totalAmount = useMemo(
        () =>
            Object.values(tickets).reduce(
                (accumulator: number, currentValue: { amount: number }) =>
                    accumulator + currentValue.amount,
                0
            ),
        [tickets]
    ) as number;

    // const totalReturnAmount = useMemo(
    //     () =>
    //         Object.values(tickets).reduce(
    //             (accumulator: number, currentValue: { amount: number; ticket: string }) => {
    //                 const currentReturn =
    //                     currentValue.ticket === "777"
    //                         ? 1000000
    //                         : isOpen === "single"
    //                         ? currentValue.amount * 9
    //                         : isOpen === "double"
    //                         ? currentValue.amount * 90
    //                         : findPana(currentValue.ticket) === 1
    //                         ? currentValue.amount * 150
    //                         : findPana(currentValue.ticket) === 2
    //                         ? currentValue.amount * 250
    //                         : findPana(currentValue.ticket) === 3 
    //                         ? currentValue.amount * 490
    //                         : currentValue.amount * findKing(currentValue.ticket);
    //                 return accumulator + currentReturn;
    //             },
    //             0
    //         ),
    //     [isOpen, tickets]
    // ) as number;

    return (
        <>
            {isOpen && (
                <section className="pt-5 z-10 flex flex-col items-center justify-start text-white gap-10 min-h-screen">
                    <div className="sticky  py-4  grid grid-cols-5 justify-center place-items-center w-full">
                        <button
                            onClick={onClose}
                            className="p-3 bg-gray-100 rounded-full shadow-sm"
                        >
                            <BiSolidLeftArrowAlt className="w-full text-black" />
                            {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
                        </button>
                        <span className="text-2xl tracking-wide font-sans font-semibold col-span-3 oleo-script">
                            Select Tickets
                        </span>
                        <div />
                    </div>
                    <div className="flex flex-col items-center justify-between pb-20 w-full h-full">
                        {isOpen === "half-king" ? (
                            <>
                                <RenderNumbers
                                   text={`Choose HalfKing Number`}
                                    disabled={firstNumber?.length === 1}
                                    isOpen={"single"}
                                    tickets={tickets}
                                    setTickets={setTickets}
                                    otherCall={(num: string) => {
                                        if (firstNumber === null) {
                                            setFirstNumber(num);
                                        } else {
                                            setTickets({
                                                ...tickets,
                                                [`${firstNumber}-${num}`]: {
                                                    amount: 50,
                                                    ticket: `${firstNumber}-${num}`,
                                                    time,
                                                    position,
                                                },
                                            });
                                            setFirstNumber(null);
                                        }
                                    }}
                                    time={time}
                                    firstNumber={firstNumber}
                                    position={position}
                                />
                                <div className="w-full border-b-2 border-red-700 my-5" />
                                <RenderNumbers
                                   text={`Choose HalfKing Number`}
                                    disabled={firstNumber?.length === 3}
                                    isOpen={"triple"}
                                    tickets={tickets}
                                    setTickets={setTickets}
                                    otherCall={(num: string) => {
                                        if (firstNumber === null) {
                                            setFirstNumber(num);
                                        } else {
                                            setTickets({
                                                ...tickets,
                                                [`${firstNumber}-${num}`]: {
                                                    amount: 50,
                                                    ticket: `${firstNumber}-${num}`,
                                                    time,
                                                    position,
                                                },
                                            });
                                            setFirstNumber(null);
                                        }
                                    }}
                                    time={time}
                                    firstNumber={firstNumber}
                                    position={position}
                                />
                            </>
                        ) :
                        isOpen === "full-king" ? (
                            <>
                                <RenderNumbers
                                   text={`Open FullKing Number`}
                                    disabled={firstNumber}
                                    isOpen={"triple"}
                                    tickets={tickets}
                                    setTickets={setTickets}
                                    otherCall={(num: string) => {
                                        if (secondNumber === null) {
                                            setFirstNumber(num);
                                        } else {
                                            setTickets({
                                                ...tickets,
                                                [`${num}-${secondNumber}`]: {
                                                    amount: 50,
                                                    ticket: `${num}-${secondNumber}`,
                                                    time,
                                                    position,
                                                },
                                            });
                                            setFirstNumber(null);
                                            setSecondNumber(null);
                                        }
                                    }}
                                    time={time}
                                    firstNumber={firstNumber}
                                    position={position}
                                />
                                <div className="w-full border-b-2 border-red-700 my-5" />
                                <RenderNumbers
                                   text={`Close FullKing Number`}
                                    disabled={secondNumber}
                                    isOpen={"triple"}
                                    tickets={tickets}
                                    setTickets={setTickets}
                                    otherCall={(num: string) => {
                                        if (firstNumber === null) {
                                            setSecondNumber(num);
                                        } else {
                                            setTickets({
                                                ...tickets,
                                                [`${firstNumber}-${num}`]: {
                                                    amount: 50,
                                                    ticket: `${firstNumber}-${num}`,
                                                    time,
                                                    position,
                                                },
                                            });
                                            setFirstNumber(null);
                                            setSecondNumber(null);
                                        }
                                    }}
                                    time={time}
                                    firstNumber={secondNumber}
                                    position={position}
                                />
                            </>
                        )
                        :(
                            <RenderNumbers
                            text={`${isOpen} Number`}
                                isOpen={isOpen}
                                tickets={tickets}
                                setTickets={setTickets}
                                time={time}
                                firstNumber={firstNumber}
                                position={position}
                            />
                        )}
                        <div className="p-3 w-full">
                            <div className="flex flex-col justify-center items-center max-w-full">
                                <div className="w-[85dvw] max-w-full">
                                    <p className="styled-text pt-5 ">Your Bidding Summary</p>

                                    <div className="w-full mt-5 border-1 rounded-xl border-red-800">
                                        <table className="w-full table-sm">
                                            <thead className=" text-white ">
                                                <tr className="active text-center">
                                                    <th className="text-lg  font-medium">Ticket</th>
                                                    <th className=" text-lg  font-medium">
                                                        Amount
                                                    </th>
                                                    <th className=" text-lg  font-medium">Odds</th>
                                                    <th className=" text-lg  font-medium">
                                                        Returns
                                                    </th>
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
                                                                ticket: string;
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
                                                                                setTickets({
                                                                                    ...tickets,
                                                                                    [ticket]: {
                                                                                        amount: Number(
                                                                                            e.target
                                                                                                .value
                                                                                        ),
                                                                                        ticket,
                                                                                        time,
                                                                                        position,
                                                                                    },
                                                                                });
                                                                            }}
                                                                            defaultValue={amount}
                                                                            disabled={
                                                                                ticket === "777"
                                                                            }
                                                                            min={10}
                                                                            placeholder="Amount"
                                                                            className={cn(
                                                                                "py-2 outline-none bg-transparent rounded-full text-center w-20 text-orange-500 font-semibold placeholder:font-medium text-lg"
                                                                            )}
                                                                        />
                                                                    </td>
                                                                    <td className="text-center leading-[14px]">
                                                                        {ticket === "777"
                                                                            ? 2000
                                                                            : isOpen === "single"
                                                                            ? "x9"
                                                                            : isOpen === "double"
                                                                            ? "x90"
                                                                            : findPana(ticket) === 1
                                                                            ? "x150"
                                                                            : findPana(ticket) === 2
                                                                            ? "x250"
                                                                            : findPana(ticket) === 3 
                                                                            ? "x490"
                                                                            : findKing(ticket) === 10000
                                                                            ? "x10000"
                                                                            : "x1000"
                                                                            }
                                                                    </td>
                                                                    <td className="text-center leading-[14px]">
                                                                        Rs.{" "}
                                                                        {ticket === "777"
                                                                            ? 1000000
                                                                            : isOpen === "single"
                                                                            ? amount * 9
                                                                            : isOpen === "double"
                                                                            ? amount * 90
                                                                            : findPana(ticket) === 1
                                                                            ? amount * 150
                                                                            : findPana(ticket) === 2
                                                                            ? amount * 250
                                                                            : findPana(ticket) === 3 
                                                                            ? amount * 490
                                                                            : amount * findKing(ticket)
                                                                            }
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
                                        </div>
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
                                        ? "x90"
                                        : "x150, x250, x490"}
                                </p>
                            </span>
                            <span className="py-2 text-white text-lg font-semibold">
                                Wallet Balance:{" "}
                                <p className="styled-text inline-flex items-center font-semibold">
                                    {user?.amount ? (
                                        <>
                                            Rs{" "}
                                            {user.amount
                                                .toString()
                                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        </>
                                    ) : (
                                        "Insufficient Balance"
                                    )}
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
                                        ({ amount }: { amount: number }) => amount < 10
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

const isIncreasingNumber = (num: number) => {
    const numberString = num.toString();
    for (let i = 0; i < numberString.length - 1; i++) {
        if (numberString.charAt(i) > numberString.charAt(i + 1)) {
            return false;
        }
    }
    return true;
};

export const RenderNumbers = ({
    text,
    isOpen,
    tickets,
    setTickets,
    time,
    position,
    firstNumber,
    otherCall = null,
    disabled = false,
}) => {
    const [selectedInitial, setSelectedInitial] = useState(0);

    const numberToRender = () => {
        if (isOpen === "single") {
            return Array.from({ length: 10 }, (_, i) => i).map((num) => (
                <button
                disabled={disabled}
                    className={cn(
                        " w-12 h-12 outline-none flex justify-center items-center text-white border-1 border-orange-500 rounded-full disabled:opacity-40",
                        (Object.prototype.hasOwnProperty.call(tickets, num.toString()) || firstNumber === num.toString()) &&
                            "bg-orange-400 text-white"
                    )}
                    onClick={() => {
                        otherCall ? otherCall(num.toString()) :
                        setTickets((prev) => ({
                            ...prev,
                            [num.toString()]: {
                                amount: 100,
                                ticket: num.toString(),
                                time,
                                position,
                            },
                        }));
                        // setTimeout(
                        //     () => document.getElementById(`input-${num.toString()}`).focus(),
                        //     1000
                        // );
                    }}
                >
                    <p className="font-medium text-xl">{num.toString()}</p>
                </button>
            ));
        } else if (isOpen === "double") {
            return Array.from({ length: 10 }, (_, i) => i + 10 * selectedInitial).map((num) => (
                <button
                disabled={disabled}
                    className={cn(
                        " w-12 h-12 outline-none flex disabled:opacity-40 justify-center items-center text-white border-1 border-orange-500 rounded-full",
                        (Object.prototype.hasOwnProperty.call(
                            tickets,
                            num.toLocaleString("en-US", { minimumIntegerDigits: 2 })
                        ) || firstNumber ===  num.toLocaleString("en-US", { minimumIntegerDigits: 2 })) && "bg-orange-400 text-white"
                    )}
                    onClick={() => {
                        otherCall ? otherCall(num.toLocaleString("en-US", { minimumIntegerDigits: 2 })) :
                        setTickets((prev) => ({
                            ...prev,
                            [num.toLocaleString("en-US", { minimumIntegerDigits: 2 })]: {
                                amount: 100,
                                ticket: num.toLocaleString("en-US", { minimumIntegerDigits: 2 }),
                                time,
                                position,
                            },
                        }));
                        // setTimeout(
                        //     () =>
                        //         document
                        //             .getElementById(
                        //                 `input-${num.toLocaleString("en-US", {
                        //                     minimumIntegerDigits: 2,
                        //                 })}`
                        //             )
                        //             .focus(),
                        //     1000
                        // );
                    }}
                >
                    <p className="font-medium text-xl">
                        {num.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
                    </p>
                </button>
            ));
        } else if (isOpen === "triple") {
            return Array.from({ length: 100 }, (_, i) => {
                const num = i + 100 * selectedInitial;
                if (num === 777) return;
                if (num.toString()[1] === "0" && num.toString()[2] === "0") {
                    return num;
                }
                if (
                    num.toString()[2] === "0" &&
                    isIncreasingNumber(Number(num.toString().slice(0, 2)))
                ) {
                    return num;
                }
                if (isIncreasingNumber(num)) return num;
                return;
            })
                .filter((value) => value)
                .map((num) => (
                    <button
                    disabled={disabled}
                        className={cn(
                            " w-12 h-12 outline-none flex  disabled:opacity-40 justify-center items-center text-white border-1 border-orange-500 rounded-full",
                            (Object.prototype.hasOwnProperty.call(
                                tickets,
                                num.toLocaleString("en-US", { minimumIntegerDigits: 3 })
                            ) || firstNumber === num.toLocaleString("en-US", { minimumIntegerDigits: 3 })) && "bg-orange-400 text-white"
                        )}
                        onClick={() => {
                            otherCall ? otherCall(num.toLocaleString("en-US", { minimumIntegerDigits: 3 })) :
                            setTickets((prev) => ({
                                ...prev,
                                [num.toLocaleString("en-US", { minimumIntegerDigits: 3 })]: {
                                    amount: 50,
                                    ticket: num.toLocaleString("en-US", {
                                        minimumIntegerDigits: 3,
                                    }),
                                    time,
                                    position,
                                },
                            }));
                            // setTimeout(
                            //     () =>
                            //         document
                            //             .getElementById(
                            //                 `input-${num.toLocaleString("en-US", {
                            //                     minimumIntegerDigits: 3,
                            //                 })}`
                            //             )
                            //             .focus(),
                            //     1000
                            // );
                        }}
                    >
                        <p className="font-medium text-xl">
                            {num.toLocaleString("en-US", { minimumIntegerDigits: 3 })}
                        </p>
                    </button>
                ));
        } else {
            return <p className="text-center my-4 font-semibold">Choose your Lucky Number</p>;
        }
    };

    return (
        <>
            <span className="text-xl capitalize">{text}</span>
            {!(isOpen === "single" || isOpen === "jackpot") && (
                <div className="flex flex-wrap justify-center m-2 gap-2 border-1 border-red-800 p-2 rounded-2xl">
                    {Array.from({ length: 10 }, (_, i) => i).map((num) => (
                        <button
                            disabled={disabled}
                            onClick={() => setSelectedInitial(num)}
                            className={cn(
                                "w-8 h-8 flex justify-center items-center text-white border-1 border-orange-500 rounded-full disabled:opacity-40",
                                selectedInitial === num && "bg-orange-400 text-white"
                            )}
                        >
                            {num}
                        </button>
                    ))}
                </div>
            )}
            <div className="text-center flex items-center flex-col gap-5 pt-5">
                {isOpen !== "jackpot" && (
                    <div className="p-5 flex justify-around items-center flex-wrap gap-5 w-full">
                        {numberToRender()}
                    </div>
                )}
            </div>
        </>
    );
};

export default BidModal;
