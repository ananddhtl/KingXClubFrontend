import { routes } from "@/constants";
import { useNavigate } from "react-router-dom";
import { getAllResult } from "@/api/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { cn } from "@/utils/cn";

export const Result = () => {
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
                toast(error.response?.data?.message || "Unknown error");
            }
        })();
    }, []);
    return (
        <section className="bg-[#F4F4F4] flex flex-col items-center justify-start text-black gap-4 min-h-screen">
            <div className="sticky top-0 flex justify-between items-center w-full  p-4">
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
                            stroke-width="1.3125"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
                <span className="text-2xl font-sans font-semibold text-[#281F1D] tracking-wide">
                    Result
                </span>
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
            <div className="bg-white shadow-sm w-full flex flex-col gap-5 pt-5">
            <span className="text-2xl ml-10">All Results</span>
                <table className="table table-auto max-w-fit self-center">
                    <thead className="border-b-[#F6571E]">
                        <tr className="active">
                            <th className=" text-sm leading-[14px] text-[#281F1D] font-medium">Date</th>
                            <th className=" text-sm leading-[14px] text-[#281F1D] font-medium">Time</th>
                            <th className=" text-sm leading-[14px] text-[#281F1D] font-medium">Place</th>
                            <th className=" text-sm leading-[14px] text-[#281F1D] font-medium">Ticket</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.length > 0 ? (
                            <>
                                {results.map((result, index) => (
                                    <tr>
                                        <td className="text-[#281F1D] text-sm leading-[14px]">
                                            {new Date(result.time).toLocaleDateString('default', {
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit'
                                            }).replace('/', '-').replace('/', '-')}
                                        </td>
                                        <td className="text-[#281F1D] text-sm leading-[14px]">
                                            {new Date(result.time).toLocaleTimeString('default', {
                                                hour: 'numeric',
                                                minute: 'numeric'
                                            })}
                                        </td>
                                        <td className="text-[#281F1D] text-sm leading-[14px]">{result.place}</td>
                                        <td className={cn('text-[#281F1D] text-sm leading-[14px]', index === 0 && '!text-[#F6571E]')}>
                                            {`${result.leftTicketNumber} - ${
                                                sumOfDigits(result.leftTicketNumber).toString()[
                                                    sumOfDigits(result.leftTicketNumber).toString()
                                                        .length - 1
                                                ]
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
                                <td />
                                <td />
                                <td />
                                <td />
                                <td aria-colspan={5} className="bg-white text-orange-500">
                                    No data found
                                </td>
                                <td />
                                <td />
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
