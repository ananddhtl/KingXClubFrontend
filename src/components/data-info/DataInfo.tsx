import { FC, useEffect, useMemo, useState } from "react";
import { Table } from "../table";
import { getTodaysTicket, publishResultAPI } from "@/api/api";
import toast from "react-hot-toast";
import { SelectColumnFilter } from "../table/filters";
import { Button } from "../button/Button";

export const Data = () => {
    const [tickets, setTickets] = useState<any[]>([]);
    const [summary, setSummary] = useState<any[]>([]);
    const [dataLoading, setDataLoading] = useState(false);

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
                Header: "User",
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
                Header: "Count",
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
        ],
        []
    );

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
                toast(error.response?.data?.message || "Unknown error");
            } finally {
                setDataLoading(false);
            }
        })();
    }, []);

    return (
        <section className="bg-neutral-900 min-h-screen -z-20 w-full py-10 px-3 sm:px-10">
            <PublishResult />
            {dataLoading ? (
                <svg
                    className="spinner animate-spin"
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
                    <TopSection
                        text="Today's Ticket Purchase Information"
                        description="* This data has been shown according to purchase from the website"
                    />

                    <Table columns={columns} data={tickets} />
                    <TopSection 
                    text="Today's Ticket Summary Information"
                    description="* This data has been shown according to purchase from the website"
                    />

                    <Table columns={summaryColumns} data={summary} />
                </>
            ) : (
                <span className="text-center py-20 text-2xl w-full flex justify-center text-red-500">No data found</span>
            )}
        </section>
    );
};

interface ITopSection {
    text: string,
    description: string
}

const TopSection: FC<ITopSection> = ({ text, description }) => {
    return (
        <div className="bg-black/40 rounded-xl p-5 my-5 mx-10 relative">
            <div className="text-rose-400 font-semibold text-lg">{text}</div>
            {description}
            <p className="text-gray-500"></p>
        </div>
    );
};

const PublishResult: FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const events = [
        {
            place: "Pokhara",
            time: ["09:00", "12:00", "15:00", "21:00"],
        },
        {
            place: "Kathmandu",
            time: ["09:00", "12:00", "15:00", "21:00"],
        },
        {
            place: "Dhangadi",
            time: ["09:00", "12:00", "15:00", "21:00"],
        },
        {
            place: "Nepalgunj",
            time: ["09:00", "12:00", "15:00", "21:00"],
        },
    ];
    const [data, setData] = useState({
        leftTicketNumber: null,
        rightTicketNumber: null,
        place: "Pokhara",
        time: null,
    });
    function handleChange(e: any, dataFor: string) {
        setData({
            ...data,
            [dataFor]: dataFor === "place" ? e.target.value : Number(e.target.value),
        });
    }

    const publishResult = async (): Promise<any> => {
        if (!data.leftTicketNumber) return toast("Please enter left ticket number");
        if (!data.rightTicketNumber) return toast("Please enter right ticket number");
        if (!data.time) return toast("Please select from above time");
        if (!data.place) return toast("Please choose a place");
        try {
            setIsLoading(true);
            const res = await publishResultAPI(data);
            console.log(res);

            toast(res.data?.message || "Unknown error");
            return res;
        } catch (error) {
            console.log(`Error logging user: ${error}`);
            toast(error.response?.data?.message || "Unknown error");
            throw new Error(`Error logging user: ${error}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-black/40 flex flex-col rounded-xl p-5 my-5 relative">
            <div className="text-orange-600 text-center font-semibold text-lg">Publish Result</div>

            <p className="text-gray-500 my-1">* Fill the below form to release the result</p>
            <form className="flex flex-wrap gap-10">
                <div className="flex items-center bg-black/60 rounded-lg w-full justify-around">
                    <label htmlFor="place" className="text-white text-lg mx-2">
                        Place
                    </label>

                    <select
                        id="place"
                        onChange={(e) => handleChange(e, "place")}
                        className="ticket-dropdown my-4 px-4 w-36 border bg-black/40 rounded-md outline-none text-orange-600"
                    >
                        <option value={null}>Select Place</option>
                        {events.map(({ place }) => (
                            <option value={place}>{place}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center gap-4 bg-black/60 rounded-lg w-full justify-around p-2">
                    <label htmlFor="place" className="text-white text-lg mx-2">
                        Time
                    </label>

                    <select
                        id="place"
                        onChange={(e) => handleChange(e, "time")}
                        className="ticket-dropdown px-4 w-36 my-2 border bg-black/40 rounded-md outline-none text-orange-600"
                    >
                        <option value={null} className="text-black/50 ">
                            Select Date
                        </option>
                        {events
                            .find(({ place }) => place === data.place)
                            .time.map((timestamp) => {
                                const time = new Date().setHours(
                                    Number(timestamp.split(":")[0]),
                                    Number(timestamp.split(":")[1]),
                                    0,
                                    0
                                );
                                return (
                                    <option value={time}>
                                        {new Date(time).toLocaleString("default", {
                                            month: "long",
                                            hour: "numeric",
                                            minute: "numeric",
                                            day: "2-digit",
                                        })}
                                    </option>
                                );
                            })}
                    </select>
                </div>
                <div className="flex bg-black/60 p-2 pb-6 rounded-lg flex-col justify-center w-full items-center gap-3">
                    <label className="text-white text-lg ">Ticket Number</label>
                    <div className="flex w-full justify-around">
                    <input
                        type="number"
                        className="form-control w-32 placeholder:opacity-50"
                        id="betAmount"
                        name="betAmount"
                        placeholder="Left Number"
                        min="100"
                        max="999"
                        onChange={(e) => handleChange(e, "leftTicketNumber")}
                        required
                    />
                    <input
                        type="number"
                        className="form-control w-32 placeholder:opacity-50"
                        id="betAmount"
                        name="betAmount"
                        placeholder="Right Number"
                        min="100"
                        max="999"
                        onChange={(e) => handleChange(e, "rightTicketNumber")}
                        required
                    />
                    </div>
                </div>
                <Button
                    disabled={
                        !data.leftTicketNumber ||
                        !data.rightTicketNumber ||
                        !data.place ||
                        !data.time
                    }
                    text="Publish result"
                    onAction={publishResult}
                    isLoading={isLoading}
                />
            </form>
        </div>
    );
};
