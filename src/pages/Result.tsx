import { routes } from "@/constants";
import { useNavigate } from "react-router-dom";
import { getAllResult } from "@/api/api";
import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
import { cn } from "@/utils/cn";
import Countdown from "react-countdown";
import BottomNavbar from "../components/DrawerNav/BottomNavbar";

const events = [
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

        time: ["11:00", "13:00", "15:00", "18:00", "22:00"],
    },
];

export const Result = () => {
    const time = events
        .map(({ time }) =>
            time.map((timestamp) =>
                new Date().setHours(
                    Number(timestamp.split(":")[0]),
                    Number(timestamp.split(":")[1]),
                    0,
                    0
                )
            )
        )
        .flat()
        .sort()
        .find((time) => time > Date.now());
    console.log({ time });

    const navigate = useNavigate();
    const [results, setResults] = useState([]);
    console.log({ results });

    const sumOfDigits = (number) => {
        return String(number)
            .split("")
            .reduce((sum, digit) => sum + parseInt(digit), 0);
    };

    useEffect(() => {
        (async () => {
            try {
                const results = await getAllResult();
                console.log({ results });
                setResults(results.data);
            } catch (error) {
                console.log(`Error fetching lucky winner: ${error}`);
                // toast.error(error.response?.data?.message || "Unknown error", {id: 'unknown-error'});
            }
        })();
    }, []);
    return (
        <section className=" flex flex-col items-center justify-start text-black gap-4 min-h-screen">
            <div className="sticky top-0 flex justify-between items-center w-full  p-4">
                <button
                    onClick={() => navigate(routes.PROFILE)}
                    className="p-4 bg-gradient-to-b from-[#FF5F01] to-[#FFD401] rounded-full shadow-sm"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 1L1 8L8 15"
                            stroke="white"
                            stroke-width="2.3125"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
                <span className="text-2xl oleo-script font-semibold text-white italic tracking-wide">
                    Result
                </span>
                <button className="p-4 rounded-lg ">
                    {/* <svg
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
                    </svg> */}
                </button>
            </div>

            <div className=" border-2 w-[90dvw] border-yellow-500 p-3 rounded-lg text-center text-white max-w-lg mx-auto">
                <div className="flex items-center justify-around mb-4">
                    <img src="assets/img/logo.png" alt="crown icon" className="rounded-ful w-16" />
                    <span className="ml-2 text-xl mx-2 font-bold h-12 w-1 bg-gradient-to-b rounded-lg from-yellow-500 to-red-500"></span>

                    <div className="flex flex-col items-center space-y-4 text-center">
                        <span className="text-xl">Next result in : </span>
                        <Countdown
                            date={time}
                            renderer={({ days, hours, minutes, seconds }) => (
                                <span>
                                    {days > 0 && `${days} d `}
                                    {hours < 10 ? "0" + hours : hours} hr{" "}
                                    {minutes < 10 ? "0" + minutes : minutes} min{" "}
                                    {seconds < 10 ? "0" + seconds : seconds} sec
                                </span>
                            )}
                            autoStart
                            className="text-xl styled-text"
                        />
                    </div>
                </div>
            </div>

            <div className="">
                <img src="./assets/img/matkaking.png" />
            </div>

            <div className="p-3 mb-[5rem] w-full">
                <div className="bg-[url('assets/image/border-image.png')] bg-cover p-6 flex flex-col justify-center items-center bg-no-repeat max-w-full">
                    <p className="styled-text mt-5">All Result</p>
                    <div className="w-full mt-5 border-1  rounded-xl border-red-800 bg-transparent ">
                        <table className="w-full table-sm">
                            <thead className="text-white py-5">
                                <tr className="active">
                                    <th className="text-lg text-center leading-[14px] font-medium">
                                        Date
                                    </th>
                                    <th className="text-lg text-center leading-[14px] font-medium">
                                        Time
                                    </th>
                                    <th className="text-lg text-center leading-[14px] font-medium">
                                        Club
                                    </th>
                                    <th className="text-lg text-center leading-[14px] font-medium">
                                        Ticket
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-white text-center text-xl">
                                {results.length > 0 ? (
                                    <>
                                        {results.map((result, index) => (
                                            <tr>
                                                <td className="text-white text-sm leading-[14px]">
                                                    {
                                                        new Date(result.time).toLocaleDateString(
                                                            "default",
                                                            {
                                                                // year: "numeric",
                                                                month: "2-digit",
                                                                day: "2-digit",
                                                            }
                                                        )
                                                        // .replace("/", "-")
                                                        // .replace("/", "-")
                                                    }
                                                </td>
                                                <td className="text-white text-sm leading-[14px]">
                                                    {new Date(result.time).toLocaleTimeString(
                                                        "default",
                                                        {
                                                            hour: "numeric",
                                                            minute: "numeric",
                                                        }
                                                    )}
                                                </td>
                                                <td className="text-white text-sm leading-[14px]">
                                                    {result.place}
                                                </td>
                                                <td
                                                    className={cn(
                                                        "text-white text-sm leading-[14px]",
                                                        index === 0 && "!text-[#F6571E]"
                                                    )}
                                                >
                                                    {`${
                                                        result?.leftTicketNumber
                                                            ? `${result.leftTicketNumber} - ${
                                                                  sumOfDigits(
                                                                      result.leftTicketNumber
                                                                  ).toString()[
                                                                      sumOfDigits(
                                                                          result.leftTicketNumber
                                                                      ).toString().length - 1
                                                                  ]
                                                              }`
                                                            : "*** - *"
                                                    }${
                                                        result?.rightTicketNumber
                                                            ? `${
                                                                  sumOfDigits(
                                                                      result.rightTicketNumber
                                                                  ).toString()[
                                                                      sumOfDigits(
                                                                          result.rightTicketNumber
                                                                      ).toString().length - 1
                                                                  ]
                                                              } - ${result.rightTicketNumber}`
                                                            : "* - ***"
                                                    }`}
                                                </td>
                                            </tr>
                                        ))}
                                    </>
                                ) : (
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <BottomNavbar />
        </section>
    );
};
