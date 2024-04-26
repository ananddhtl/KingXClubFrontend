import { FC, useEffect, useMemo, useState } from "react";
import { Table } from "../table";
import { getTodaysTicket, publishResultAPI } from "@/api/api";
import toast from "react-hot-toast";
import { SelectColumnFilter } from "../table/filters";
import { Button } from "../button/Button";

export const Data= () => {
    const [tickets, setTickets] = useState<any[]>([]);
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

    useEffect(() => {
        (async () => {
            try {
                setDataLoading(true);
                const buyers = await getTodaysTicket();
                console.log({ buyers });
                setTickets(buyers.data);
            } catch (error) {
                console.log(`Error fetching lucky winner: ${error}`);
                toast(error.response?.data?.message || "Unknown error");
            } finally {
                setDataLoading(false);
            }
        })();
    }, []);

    return (
        <section className="bg-neutral-900 w-full py-10 px-3 sm:px-10">
            <TopSection />
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
                <Table columns={columns} data={tickets} />
            ) : (
                <span>No data found</span>
            )}
        </section>
    );
};

const TopSection: FC = () => {
    return (
        <div className="bg-black/40 rounded-xl p-5 my-5 mx-10 relative">
            <div className="text-rose-400 font-semibold text-lg">Ticket Purchase Information</div>

            <p className="text-gray-500">
                * This data has been shown according to purchase from the website
            </p>
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
        result: null,
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
        if (!data.result) return toast("Please entery ticket number");
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
        <div className="bg-black/40 rounded-xl p-5 my-5 mx-10 relative">
            <div className="text-rose-400 font-semibold text-lg">Publish Result</div>

            <p className="text-gray-500">* Fill the below form to release the result</p>
            <form className="flex flex-wrap gap-10">
                <div className="flex items-center">
                    <label htmlFor="place" className="text-white text-lg mx-2">
                        Place
                    </label>

                    <select
                        id="place"
                        onChange={(e) => handleChange(e, "place")}
                        className="ticket-dropdown px-4 border rounded-md outline-none text-orange-600"
                    >
                        <option value={null}>Select Place</option>
                        {events.map(({ place }) => (
                            <option value={place}>{place}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center">
                    <label htmlFor="place" className="text-white text-lg mx-2">
                        Time
                    </label>

                    <select
                        id="place"
                        onChange={(e) => handleChange(e, "time")}
                        className="ticket-dropdown px-4 border rounded-md outline-none text-orange-600"
                    >
                        <option value={null} className="text-black/50">
                            Select Date
                        </option>
                        {events
                            .find(({ place }) => place === data.place)
                            .time.map((timestamp) => {
                                const time = new Date().setHours(
                                    Number(timestamp.split(":")[0]),
                                    Number(timestamp.split(":")[1])
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
                <div className="flex items-center">
                    <label className="text-white text-lg mx-5">Ticket Number</label>
                    <input
                        type="number"
                        className="form-control w-32"
                        id="betAmount"
                        name="betAmount"
                        min="1"
                        max="999"
                        onChange={(e) => handleChange(e, "result")}
                        required
                    />
                </div>
                <Button text="Publish result" onAction={publishResult} isLoading={isLoading} />
            </form>
        </div>
    );
};
