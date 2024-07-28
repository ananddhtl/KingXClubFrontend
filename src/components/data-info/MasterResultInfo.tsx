import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { Table } from "../table";
import { getTodaysTicket, publishResultAPI } from "@/api/api";
import toast from "react-hot-toast";
import { SelectColumnFilter } from "../table/filters";
import { Button } from "../button/Button";
import { cn } from "@/utils/cn";
import { CLUBS } from "@/constants";

function sumOfDigits(value: string) {
    return value.split("").reduce((sum, digit) => sum + parseInt(digit), 0);
}

export const MasterResultInfo = () => {
    const [tickets, setTickets] = useState<any[]>([]);
    const [summary, setSummary] = useState<any[]>([]);
    const [dataLoading, setDataLoading] = useState(false);
    const [digit, setDigit] = useState("all");
    const [singleNumber, setSingleNumber] = useState(null);

    const columns = useMemo(
        () => [
            {
                Header: "Ticket Number",
                accessor: "ticket" || "",
            },
            {
                Header: "Purchase Time",
                accessor: (values) => {
                    return values?.createdAt || "N/A";
                },
                Filter: SelectColumnFilter,
                filter: "equals",
                Cell: ({ cell }: any) => {
                    const { value } = cell;
                    return (
                        <div style={{ textAlign: "center", fontWeight: "600", fontSize: 15 }}>
                            {new Date(value).toLocaleString("default", {
                                month: "long",
                                year: "numeric",
                                day: "2-digit",
                                hour: "numeric",
                                minute: "numeric",
                            })}
                        </div>
                    );
                },
            },
            {
                Header: "Result Time",
                accessor: (values) => {
                    return values?.time || "N/A";
                },
                Filter: SelectColumnFilter,
                filter: "equals",
                Cell: ({ cell }: any) => {
                    const { value } = cell;
                    return (
                        <div style={{ textAlign: "center", fontWeight: "600", fontSize: 15 }}>
                            {new Date(value).toLocaleString("default", {
                                month: "long",
                                year: "numeric",
                                day: "2-digit",
                                hour: "numeric",
                                minute: "numeric",
                            })}
                        </div>
                    );
                },
            },
            {
                Header: "Amount",
                accessor: "amount" || "",
            },
            {
                Header: "Position",
                accessor: "position" || "",
            },
            {
                Header: "Returns",
                accessor: "returns" || "",
            },
            {
                Header: "Place",
                accessor: "place" || "",
            },
            {
                Header: "Won",
                accessor: (values) => {
                    return String(values?.won) || "N/A";
                },
                // Filter: SelectColumnFilter,
                filter: "equals",
                Cell: ({ cell }: any) => {
                    const { value } = cell;

                    return (
                        <div style={{ textAlign: "center", fontWeight: "600", fontSize: 15 }}>
                            {value}
                        </div>
                    );
                },
            },
            {
                Header: "User Id",
                accessor: "user" || "",
            },
        ],
        []
    );

    const summaryColumns = useMemo(
        () => [
            {
                Header: "Ticket Number",
                accessor: "_id.ticket" || "",
            },
            {
                Header: "Result Time",
                accessor: (values) => {
                    return values?.time || "N/A";
                },
                Filter: SelectColumnFilter,
                filter: "equals",
                Cell: ({ cell }: any) => {
                    const { value } = cell;
                    return (
                        <div style={{ textAlign: "center", fontWeight: "600", fontSize: 15 }}>
                            {new Date(value).toLocaleString("default", {
                                month: "long",
                                year: "numeric",
                                day: "2-digit",
                                hour: "numeric",
                                minute: "numeric",
                            })}
                        </div>
                    );
                },
            },
            {
                Header: "Place",
                accessor: "_id.place" || "",
            },
            {
                Header: "Position",
                accessor: "_id.position" || "",
            },
            {
                Header: "Customers",
                accessor: "count" || "",
            },
            {
                Header: "Amount",
                accessor: "totalAmount" || "",
            },
            {
                Header: "Returns",
                accessor: "returnAmount" || "",
            },
            {
                Header: "Possibility",
                accessor: "possibility" || "",
            },
        ],
        []
    );

    const filteredSummaryData = useMemo(() => {
        let data = [];
        if (digit === "all")
            data = summary.map((data) => ({
                ...data,
                possibility: data.count / data.returnAmount,
            }));
        else if (digit === "single")
            data = summary
                .filter((data) => data._id.ticket.length === 1)
                .map((data) => ({
                    ...data,
                    possibility: (data.count / data.returnAmount).toFixed(5),
                }));
        else if (digit === "double")
            data = summary.map((data) => {
                if (data._id.ticket.length !== 2) return;
                if (singleNumber) {
                    if (
                        Number(data._id.ticket[0]) !== singleNumber &&
                        Number(data._id.ticket[1]) !== singleNumber
                    )
                        return;
                }
                return { ...data, possibility: data.count / data.returnAmount };
            });
        else if (digit === "triple")
            data = summary.map((data) => {
                if (data._id.ticket.length !== 3) return;
                if (singleNumber) {
                    if (
                        Number(
                            sumOfDigits(data._id.ticket).toString()[
                                sumOfDigits(data._id.ticket).toString().length - 1
                            ]
                        ) !== singleNumber
                    )
                        return;
                }
                return { ...data, possibility: data.count / data.returnAmount };
            });
        return data
            .filter((value) => value)
            .sort((a, b) => a.possibility - b.possibility)
            .map((data, index) => ({ ...data, possibility: index + 1 }))
            .filter((value) => value)
            .sort((a, b) => b.possibility - a.possibility)
            .map((data, index) => ({ ...data, possibility: index + 1 }));
    }, [digit, singleNumber, summary]);

    console.log({ filteredSummaryData });

    useEffect(() => {
        (async () => {
            try {
                setDataLoading(true);
                const buyers = await getTodaysTicket();
                console.log({ buyers });
                setTickets(buyers.data.data);
                setSummary(buyers.data.summary);
            } catch (error) {
                console.log(`Error fetching lucky winner: ${error}`);
            } finally {
                setDataLoading(false);
            }
        })();
    }, []);

    return (
        // <div className="w-full flex justify-center">
        <section className="bg-neutral-900 min-h-screen w-full lg:w-screen flex-col flex">
            <PublishResult summary={summary} />
            {dataLoading ? (
                <svg
                    className="spinner text-center animate-spin"
                    id="spinner"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                </svg>
            ) : tickets.length > 0 ? (
                <>
                <div className="bg-black/60 p-2 my-10">
                        <TopSection
                            text="Today's Ticket Summary Information"
                            description="* This data has been shown according to purchase from the website"
                        >
                            <div className="flex justify-center w-full my-5">
                                <div className="flex w-[80%] justify-center mt-6 border-1 border-red-800 rounded-full">
                                    <input
                                        onChange={() => setDigit("all")}
                                        className="btn-check"
                                        type="radio"
                                        name="bet-position"
                                        id="bet-all"
                                        value="all"
                                        autoComplete="off"
                                        required
                                    />
                                    <label
                                        className={cn(
                                            "btn py-2 text-lg px-5 text-white rounded-full",
                                            digit === "all" && "!bg-orange-500"
                                        )}
                                        htmlFor="bet-all"
                                    >
                                        All
                                    </label>
                                    <input
                                        onChange={() => setDigit("single")}
                                        className="btn-check"
                                        type="radio"
                                        name="bet-position"
                                        id="bet-single"
                                        value="single"
                                        autoComplete="off"
                                        required
                                    />
                                    <label
                                        className={cn(
                                            "btn py-2 px-5 text-lg text-white rounded-full",
                                            digit === "single" && " !bg-orange-500"
                                        )}
                                        htmlFor="bet-single"
                                    >
                                        Single
                                    </label>
                                    <input
                                        onChange={() => setDigit("double")}
                                        className="btn-check"
                                        type="radio"
                                        name="bet-position"
                                        id="bet-double"
                                        value="double"
                                        autoComplete="off"
                                        required
                                    />
                                    <label
                                        className={cn(
                                            "btn py-2 px-5 text-lg text-white rounded-full",
                                            digit === "double" && " !bg-orange-500"
                                        )}
                                        htmlFor="bet-double"
                                    >
                                        Double
                                    </label>
                                    <input
                                        onChange={() => setDigit("triple")}
                                        className="btn-check"
                                        type="radio"
                                        name="bet-position"
                                        id="bet-triple"
                                        value="triple"
                                        autoComplete="off"
                                        required
                                    />
                                    <label
                                        className={cn(
                                            "btn py-2 px-5 text-lg text-white rounded-full",
                                            digit === "triple" && " !bg-orange-500"
                                        )}
                                        htmlFor="bet-triple"
                                    >
                                        Triple
                                    </label>
                                </div>
                            </div>
                            {(digit === "triple" || digit === "double") && (
                                <div className="flex justify-center">
                                    <label
                                        className={cn(" py-2 px-5 text-lg text-white")}
                                        htmlFor="single-number"
                                    >
                                        Single Number
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            if (e.target.value.length > 1) return;
                                            if (e.target.value.length === 0) {
                                                setSingleNumber(null);
                                                return;
                                            }
                                            setSingleNumber(Number(e.target.value));
                                        }}
                                        className="bg-white/90 w-20 rounded-3xl text-black pl-10"
                                        type="number"
                                        name="bet-position"
                                        id="single-number"
                                        max={1}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                            )}
                            <Table columns={summaryColumns} data={filteredSummaryData} />
                        </TopSection>
                    </div>
                    <div className=" bg-black/60 p-2 my-10">
                        <TopSection
                            text="Today's Ticket Purchase Information"
                            description="* This data has been shown according to purchase from the website"
                        >
                            <Table columns={columns} data={tickets} />
                        </TopSection>
                    </div>
                    
                </>
            ) : (
                <span className="text-center py-20 text-2xl w-full flex justify-center text-red-500">
                    No data found
                </span>
            )}
        </section>
        // </div>
    );
};

interface ITopSection {
    text: string;
    description: string;
    children: ReactNode;
}

const TopSection: FC<ITopSection> = ({ text, description, children }) => {
    return (
        <div className="flex text-center flex-col rounded-xl my-5 relative">
            <div className="text-orange-600 text-center font-semibold text-lg">{text}</div>

            <p className="text-gray-500 my-1">{description}</p>
            {children}
        </div>
    );
};

interface IPublishSection {
    summary: any[];
}

const PublishResult: FC<IPublishSection> = ({ summary }) => {
    console.log(summary);

    const [isLoading, setIsLoading] = useState(false);
    // const [position, setPosition] = useState(null);
    const [data, setData] = useState({
        ticketNumber: null,
        place: null,
        time: null,
        position: null,
    });
    function handleChange(e: any, dataFor: string) {
        setData({
            ...data,
            [dataFor]: dataFor === "time" ? Number(e.target.value) : e.target.value,
        });
    }

    const filteredData = useMemo(() => {
        if (data.time && data.place && data.position) {
            return summary.filter(
                (value) =>
                    new Date(value.time).getTime() === new Date(data.time).getTime() &&
                    value._id.position === data.position &&
                    value._id.place === data.place
            );
        } else return [];
    }, [data.place, data.position, data.time, summary]);

    const publishResult = async (): Promise<any> => {
        if (!data.ticketNumber) return toast("Please enter ticket number");
        if (!data.time) return toast("Please select from above time");
        if (!data.place) return toast("Please choose a place");
        try {
            setIsLoading(true);
            const res = await publishResultAPI(data);
            console.log(res);

            toast.success(res.data?.message || "result Published");
            return res;
        } catch (error) {
            console.log(`Error logging user: ${error}`);
            toast.error(error.response?.data?.message || "Unknown error", { id: "unknown-error" });
            throw new Error(`Error logging user: ${error}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex  justify-center">
            <div className="max-w-5xl bg-black/60 flex flex-col rounded-xl p-5 my-5 relative">
                <div className="text-orange-600 text-center font-semibold text-lg">
                    Publish Result
                </div>

                <p className="text-gray-500 my-1 text-center">
                    * Fill the below form to release the result
                </p>
                <form className="flex flex-wrap gap-10 p-20 rounded-lg">
                    <div className="flex justify-center w-full">
                        <div className="flex justify-center mt-6 border-1 border-red-800 rounded-full">
                            <input
                                onChange={(e) => handleChange(e, "position")}
                                className="btn-check"
                                type="radio"
                                name="bet-position"
                                id="bet-open"
                                value="Open"
                                autoComplete="off"
                                required
                            />
                            <label
                                className={cn(
                                    "btn py-2 text-lg px-8 text-white rounded-full",
                                    data.position === "Open" && "!bg-orange-500"
                                )}
                                htmlFor="bet-open"
                            >
                                Open
                            </label>
                            <input
                                onChange={(e) => handleChange(e, "position")}
                                className="btn-check"
                                type="radio"
                                name="bet-position"
                                id="bet-close"
                                value="Close"
                                autoComplete="off"
                                required
                            />
                            <label
                                className={cn(
                                    "btn py-2 px-8 text-lg text-white rounded-full",
                                    data.position === "Close" && " !bg-orange-500"
                                )}
                                htmlFor="bet-close"
                            >
                                Close
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center  rounded-lg w-full justify-around">
                        <label htmlFor="place" className="text-white text-lg mx-2">
                            Place
                        </label>

                        <select
                            id="place"
                            onChange={(e) => handleChange(e, "place")}
                            className="ticket-dropdown my-4 px-4 w-52 border bg-black/60 rounded-md outline-none text-orange-600"
                        >
                            <option hidden value={null}>
                                Select Place
                            </option>
                            {CLUBS.map(({ place }) => (
                                <option value={place} className="bg-black">
                                    {place}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center gap-4  rounded-lg w-full justify-around p-2">
                        <label htmlFor="place" className="text-white text-lg mx-2">
                            Time
                        </label>

                        <select
                            id="time"
                            onChange={(e) => handleChange(e, "time")}
                            className="ticket-dropdown px-4 w-52 my-2 border bg-black/60 rounded-md outline-none text-orange-600"
                        >
                            <option value={null} hidden>
                                Select Time
                            </option>
                            {(CLUBS.find(({ place }) => place === data.place)?.time || []).map(
                                (timestamp) => {
                                    const time = new Date().setHours(
                                        Number(timestamp.split(":")[0]) * 24 + Number(timestamp.split(":")[1]),
                                        Number(timestamp.split(":")[2]),
                                        0,
                                        0
                                    );
                                    return (
                                        <option value={time} className="bg-black">
                                            {new Date(time).toLocaleString("default", {
                                                month: "long",
                                                hour: "numeric",
                                                minute: "numeric",
                                                day: "2-digit",
                                            })}
                                        </option>
                                    );
                                }
                            )}
                        </select>
                    </div>
                    <div className="flex py-4  rounded-lg justify-center w-full items-center gap-3">
                        <label className="text-white text-lg ">Ticket Number</label>
                        {/* <div className="flex w-full justify-around"> */}
                        <input
                            type="text"
                            className="form-control w-32 placeholder:opacity-50"
                            id="betAmount"
                            name="betAmount"
                            placeholder="Number"
                            onChange={(e) => handleChange(e, "ticketNumber")}
                            required
                        />
                        {/* <input
                            type="text"
                            className="form-control w-32 placeholder:opacity-50"
                            id="betAmount"
                            name="betAmount"
                            placeholder="Right Number"
                            onChange={(e) => handleChange(e, "rightTicketNumber")}
                            required
                        /> */}
                        {/* </div> */}
                    </div>
                    {data.time && data.place && data.position && (
                        <div className="flex w-full justify-center gap-5 flex-wrap">
                            <p className="styled-text text-xl">
                                Total Collection :{" "}
                                {filteredData.reduce(
                                    (sum, current) => sum + parseInt(current.totalAmount),
                                    0
                                )}
                            </p>
                            {data.ticketNumber && (
                                <>
                                    <p className="styled-text text-xl">
                                        Total Return :{" "}
                                        {filteredData
                                            .filter(
                                                (value) =>
                                                    value._id.ticket === data.ticketNumber ||
                                                    sumOfDigits(data.ticketNumber).toString()[
                                                        sumOfDigits(data.ticketNumber).toString()
                                                            .length - 1
                                                    ] === value._id.ticket
                                            )
                                            .reduce(
                                                (sum, current) =>
                                                    sum + parseInt(current.returnAmount),
                                                0
                                            )}
                                    </p>
                                    <p className="styled-text text-xl">
                                        Profit :{" "}
                                        {filteredData.reduce(
                                            (sum, current) => sum + parseInt(current.totalAmount),
                                            0
                                        ) -
                                            filteredData
                                                .filter(
                                                    (value) =>
                                                        value._id.ticket === data.ticketNumber ||
                                                        sumOfDigits(data.ticketNumber).toString()[
                                                            sumOfDigits(
                                                                data.ticketNumber
                                                            ).toString().length - 1
                                                        ] === value._id.ticket
                                                )
                                                .reduce(
                                                    (sum, current) =>
                                                        sum + parseInt(current.returnAmount),
                                                    0
                                                )}
                                    </p>
                                </>
                            )}
                        </div>
                    )}
                    <Button
                        disabled={!data.ticketNumber || !data.place || !data.time || !data.position}
                        text="Publish result"
                        onAction={publishResult}
                        isLoading={isLoading}
                    />
                </form>
            </div>
        </div>
    );
};
