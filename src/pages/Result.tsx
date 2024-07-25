import { CLUBS, routes } from "@/constants";
import { useNavigate } from "react-router-dom";
import { getAllResult } from "@/api/api";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/utils/cn";
import Countdown from "react-countdown";
import BottomNavbar from "../components/DrawerNav/BottomNavbar";
// import minuteCountdown from "@/assets/minute-countdown.mp4";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
export const Result = () => {
    const next = CLUBS.map(({ time, place }) =>
        time.map((timestamp) => {
            return {
                place,
                time: new Date().setHours(
                    Number(timestamp.split(":")[0]),
                    Number(timestamp.split(":")[1]),
                    0,
                    0
                ),
            };
        })
    )
        .flat()
        .sort((a, b) => a.time - b.time)
        .find(({ time }) => time > Date.now());

    const navigate = useNavigate();
    const [results, setResults] = useState([]);
    const [selectedClub, setSelectedClub] = useState("Club Panther");
    console.log({ results });

    const resultToShow = useMemo(() => {
        return results.filter(({ place }) => place === selectedClub);
    }, [results, selectedClub]);

    const sumOfDigits = (number) => {
        return String(number)
            .split("")
            .reduce((sum, digit) => sum + parseInt(digit), 0);
    };

    useEffect(() => {
        (async () => {
            try {
                const results = await getAllResult();
                const sorted = results.data.sort((a, b) => a.time - b.time);
                setResults(sorted);
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
                    className="p-3 bg-gray-100 rounded-full shadow-sm"
                >
                <BiSolidLeftArrowAlt className="w-full"/>
                    {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
                </button>
                <span className="text-2xl oleo-script font-semibold text-white italic tracking-wide">
                    Result
                </span>
                <div />
            </div>
            <div className="border-1 w-[80dvw] border-green-600 rounded-lg text-center text-white">
                <div className="flex items-center justify-around">
                    <div className="flex flex-col items-center my-2 space-y-2 text-center">
                        {next ? (
                            <>
                                <span className="!text-2xl styled-text">{next.place} </span>
                                <Countdown
                                    date={next.time}
                                    renderer={({ hours, minutes, seconds }) => (
                                        <div className="flex justify-center gap-10 sm:gap-8 scale-75 md:scale-100">
                                            <div className="flex flex-col gap-5 relative">
                                                <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-green-600 rounded-lg">
                                                    <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#240700]"></div>
                                                    <span className="lg:text-7xl sm:text-6xl text-2xl font-semibold text-white">
                                                        {hours}
                                                    </span>
                                                    <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#240700]"></div>
                                                </div>
                                                <span className="text-green-600 text-xl sm:text-2xl text-center font-medium">
                                                    {hours == 1 ? "Hour" : "Hours"}
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-5 relative">
                                                <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-green-600 rounded-lg">
                                                    <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#240700]"></div>
                                                    <span className="lg:text-7xl sm:text-6xl text-2xl font-semibold text-white">
                                                        {minutes}
                                                    </span>
                                                    <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#240700]"></div>
                                                </div>
                                                <span className="text-green-600 text-xl sm:text-2xl text-center capitalize">
                                                    {minutes == 1 ? "Minute" : "Minutes"}
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-5 relative">
                                                <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-green-600 rounded-lg">
                                                    <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#240700]"></div>
                                                    <span className="lg:text-7xl sm:text-6xl text-2xl font-semibold text-white">
                                                        {seconds}
                                                    </span>
                                                    <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#240700]"></div>
                                                </div>
                                                <span className="text-green-600 text-xl sm:text-2xl text-center capitalize">
                                                    {seconds == 1 ? "Second" : "Seconds"}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                    autoStart
                                    className="text-xl styled-text"
                                />
                            </>
                        ) : (
                            <span className="text-xl styled-text">No Result to Publish</span>
                        )}
                    </div>
                </div>
            </div>
            {results.length > 0 && (
                <div className="border-1 p-3 w-[80dvw] border-orange-600 rounded-lg text-center text-white">
                    <div className="flex items-center justify-around">
                        <div className="space-y-2">
                            <p>Last Result</p>
                            <p className="styled-text">{results[0].place} </p>
                            <p>
                                {new Date(results[0].time).toLocaleString("default", {
                                    // year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}{" "}
                            </p>
                        </div>
                        <div className="flex flex-col items-center my-2 space-y-2 text-center">
                            <div className="flex gap-4 items-center justify-center">
                                {results[0]?.leftTicketNumber &&
                                    showVerticleNumber(results[0].leftTicketNumber.toString())}
                                <div className="flex">
                                    {results[0]?.leftTicketNumber
                                        ? showVerticleNumber(
                                              sumOfDigits(results[0].leftTicketNumber)
                                                  .toString()
                                                  [
                                                      sumOfDigits(
                                                          results[0].leftTicketNumber
                                                      ).toString().length - 1
                                                  ].toString()
                                          )
                                        : showVerticleNumber("*")}
                                    {results[0]?.rightTicketNumber
                                        ? showVerticleNumber(
                                              sumOfDigits(results[0].rightTicketNumber)
                                                  .toString()
                                                  [
                                                      sumOfDigits(
                                                          results[0].rightTicketNumber
                                                      ).toString().length - 1
                                                  ].toString()
                                          )
                                        : showVerticleNumber("*")}
                                </div>
                                {results[0]?.rightTicketNumber
                                    ? showVerticleNumber(results[0].rightTicketNumber.toString())
                                    : showVerticleNumber("***")}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* 
            <video
                src={minuteCountdown}
                loop
                autoPlay
                className="w-full max-w-[40rem] h-full rounded-3xl p-4"
            /> */}

            <div className="p-3 mb-[5rem] w-full">
                <div className=" flex flex-col justify-center items-center max-w-full">
                    <div className=" w-full">
                        {/* <p className="styled-text mt-5">All Result</p> */}
                        <div className="flex justify-around">
                            {CLUBS.map(({ place }) => (
                                <button
                                    className={`text-white outline-none mt-5 ${
                                        selectedClub === place && "styled-text"
                                    }`}
                                    onClick={() => setSelectedClub(place)}
                                >
                                    {place.split(" ")[1]}
                                </button>
                            ))}
                        </div>
                        <div className="w-full mt-5 border-1  rounded-xl border-red-800">
                            <table className="w-full table-sm">
                                <thead className="text-white py-5">
                                    <tr className="active">
                                        <th className="text-xl p-3 text-center leading-[14px] font-medium">
                                            Date
                                        </th>
                                        <th className="text-xl p-3 text-center leading-[14px] font-medium">
                                            Time
                                        </th>
                                        <th className="text-xl p-3 text-center leading-[14px] font-medium">
                                            Club
                                        </th>
                                        <th className="text-xl p-3 text-center leading-[14px] font-medium">
                                            Ticket
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-white text-center text-xl">
                                    {resultToShow.length > 0 ? (
                                        <>
                                            {resultToShow.map((result, index) => (
                                                <tr className="border-t border-red-700">
                                                    <td className="text-white text-sm leading-[14px]">
                                                        {
                                                            new Date(
                                                                result.time
                                                            ).toLocaleDateString("default", {
                                                                // year: "numeric",
                                                                month: "2-digit",
                                                                day: "2-digit",
                                                            })
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
                                                        <div className="flex gap-4 items-center justify-center">
                                                            {result?.leftTicketNumber &&
                                                                showVerticleNumber(
                                                                    result.leftTicketNumber.toString()
                                                                )}
                                                            <div className="flex">
                                                                {result?.leftTicketNumber &&
                                                                new Date(result.time).setMinutes(
                                                                    new Date(
                                                                        result.time
                                                                    ).getMinutes() + 15
                                                                )
                                                                    ? showVerticleNumber(
                                                                          sumOfDigits(
                                                                              result.leftTicketNumber
                                                                          )
                                                                              .toString()
                                                                              [
                                                                                  sumOfDigits(
                                                                                      result.leftTicketNumber
                                                                                  ).toString()
                                                                                      .length - 1
                                                                              ].toString()
                                                                      )
                                                                    : showVerticleNumber("*")}
                                                                {result?.rightTicketNumber &&
                                                                new Date(result.time).setMinutes(
                                                                    new Date(
                                                                        result.time
                                                                    ).getMinutes() +
                                                                        (1 * 60 + 15)
                                                                )
                                                                    ? showVerticleNumber(
                                                                          sumOfDigits(
                                                                              result.rightTicketNumber
                                                                          )
                                                                              .toString()
                                                                              [
                                                                                  sumOfDigits(
                                                                                      result.rightTicketNumber
                                                                                  ).toString()
                                                                                      .length - 1
                                                                              ].toString()
                                                                      )
                                                                    : showVerticleNumber("*")}
                                                            </div>
                                                            {result?.rightTicketNumber
                                                                ? showVerticleNumber(
                                                                      result.rightTicketNumber.toString()
                                                                  )
                                                                : showVerticleNumber("***")}
                                                        </div>
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
            </div>
            <BottomNavbar />
        </section>
    );
};

const showVerticleNumber = (val: string) => {
    const numArray = val.split("");
    return (
        <span>
            {numArray.map((num) => (
                <p className="text-lg font-extrabold">{num}</p>
            ))}
        </span>
    );
};
