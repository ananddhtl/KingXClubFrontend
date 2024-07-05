import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { Table } from "../table";
import { getAllUser, getTodaysTicket, publishResultAPI, updateBalance } from "@/api/api";
import toast from "react-hot-toast";
import { SelectColumnFilter } from "../table/filters";
import { Button } from "../button/Button";
import { cn } from "@/utils/cn";
import { CLUBS } from "@/constants";

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
            } finally {
                setDataLoading(false);
            }
        })();
    }, []);

    return (
        <div className="w-full flex justify-center">
            <section className="bg-neutral-900 min-h-screen w-full lg:w-screen flex-col flex py-10 px-3">
                <DepositAmount />
                <PublishResult />
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
                        <TopSection
                            text="Today's Ticket Purchase Information"
                            description="* This data has been shown according to purchase from the website"
                        >
                            <Table columns={columns} data={tickets} />
                        </TopSection>
                        <TopSection
                            text="Today's Ticket Summary Information"
                            description="* This data has been shown according to purchase from the website"
                        >
                            <Table columns={summaryColumns} data={summary} />
                        </TopSection>
                    </>
                ) : (
                    <span className="text-center py-20 text-2xl w-full flex justify-center text-red-500">
                        No data found
                    </span>
                )}
            </section>
        </div>
    );
};

interface ITopSection {
    text: string;
    description: string;
    children: ReactNode;
}

const TopSection: FC<ITopSection> = ({ text, description, children }) => {
    return (
        <div className="bg-black/40 flex flex-col rounded-xl p-5 my-5 relative">
            <div className="text-orange-600 text-center font-semibold text-lg">{text}</div>

            <p className="text-gray-500 my-1">{description}</p>
            {children}
        </div>
    );
};

const PublishResult: FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        leftTicketNumber: null,
        rightTicketNumber: null,
        place: null,
        time: null,
    });
    function handleChange(e: any, dataFor: string) {
        setData({
            ...data,
            [dataFor]: dataFor === "time" ? Number(e.target.value) : e.target.value,
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
                        className="ticket-dropdown my-4 px-4 w-52 border bg-black/40 rounded-md outline-none text-orange-600"
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
                <div className="flex items-center gap-4 bg-black/60 rounded-lg w-full justify-around p-2">
                    <label htmlFor="place" className="text-white text-lg mx-2">
                        Time
                    </label>

                    <select
                        id="time"
                        onChange={(e) => handleChange(e, "time")}
                        className="ticket-dropdown px-4 w-52 my-2 border bg-black/40 rounded-md outline-none text-orange-600"
                    >
                        <option value={null} hidden>
                            Select Time
                        </option>
                        {(CLUBS.find(({ place }) => place === data.place)?.time || []).map(
                            (timestamp) => {
                                const time = new Date().setHours(
                                    Number(timestamp.split(":")[0]),
                                    Number(timestamp.split(":")[1]),
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
                <div className="flex bg-black/60 p-2 pb-6 rounded-lg flex-col justify-center w-full items-center gap-3">
                    <label className="text-white text-lg ">Ticket Number</label>
                    <div className="flex w-full justify-around">
                        <input
                            type="text"
                            className="form-control w-32 placeholder:opacity-50"
                            id="betAmount"
                            name="betAmount"
                            placeholder="Left Number"
                            onChange={(e) => handleChange(e, "leftTicketNumber")}
                            required
                        />
                        <input
                            type="text"
                            className="form-control w-32 placeholder:opacity-50"
                            id="betAmount"
                            name="betAmount"
                            placeholder="Right Number"
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

const DepositAmount: FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUser] = useState([]);

    const [data, setData] = useState({
        phone: null,
        balance: 0,
    });
    const [search, setSearch] = useState("");

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredUsers = users.filter(({ phone }) => phone.toString().includes(search));
    function handleChange(value: number, dataFor: string) {
        setData({
            ...data,
            [dataFor]: value,
        });
    }

    const depositBalance = async (): Promise<any> => {
        if (!data.phone) return toast("Please select phone number");
        if (!data.balance) return toast("Please enter the balance to deposit");
        try {
            setIsLoading(true);
            const res = await updateBalance(data);

            toast.success(res.data?.message || "Deposit successful");
            return res;
        } catch (error) {
            toast.error(error.response?.data?.message || "Unknown error", { id: "unknown-error" });
            throw new Error(`Error : ${error}`);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const users = await getAllUser();
                console.log({ users });
                setUser(users.data);
            } catch (error) {
                console.log(`Error fetching user: ${error}`);
            }
        })();
    }, []);

    return (
        <div className="bg-black/40 flex flex-col rounded-xl p-5 my-5 relative">
            <div className="text-orange-600 text-center font-semibold text-lg">Update Balance</div>

            <p className="text-gray-500 my-1">Find the number to deposit amount</p>
            <form className="flex flex-wrap gap-10">
                <div className="gap-4 flex flex-col bg-black/60 rounded-lg w-full justify-around p-2">
                    <div className="flex flex-col justify-between gap-2 items-start">
                        <label htmlFor="place" className="text-white text-lg mx-2">
                            Phone
                        </label>

                        <div className="flex w-full flex-col">
                            <input
                                type="number"
                                value={search}
                                onChange={handleSearchChange}
                                placeholder="Search Number"
                                className="ticket-search-input px-4 w-52 my-2 border bg-black/40 rounded-md outline-none text-orange-600"
                            />
                            <select
                                id="phone"
                                onChange={(e) => handleChange(Number(e.target.value), "phone")}
                                className="ticket-dropdown px-4 w-52 my-2 border bg-black/40 rounded-md outline-none text-orange-600"
                            >
                                <option value={null} hidden className="text-black/50">
                                    Select Number
                                </option>
                                {filteredUsers.map(({ phone }) => {
                                    return (
                                        <option key={phone} value={phone} className="bg-black">
                                            {phone}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div
                        className={cn(
                            "flex justify-between items-center",
                            data.balance < 0 && "opacity-25 disabled:cursor-not-allowed"
                        )}
                    >
                        <label className="text-white text-lg ">Deposit</label>
                        <input
                            disabled={data.balance < 0}
                            type="number"
                            className="form-control w-52 placeholder:opacity-50"
                            id="betAmount"
                            name="betAmount"
                            placeholder="Balance"
                            min="1"
                            onChange={(e) => handleChange(Number(e.target.value), "balance")}
                            required
                        />
                    </div>
                    <div
                        className={cn(
                            "flex justify-between items-center",
                            data.balance > 0 && "opacity-25 disabled:cursor-not-allowed"
                        )}
                    >
                        <label className="text-white text-lg ">Withdraw</label>
                        <input
                            disabled={data.balance > 0}
                            type="number"
                            className="form-control w-52 placeholder:opacity-50"
                            id="betAmount"
                            name="betAmount"
                            placeholder="Balance"
                            min="1"
                            onChange={(e) => handleChange(-Number(e.target.value), "balance")}
                            required
                        />
                    </div>
                </div>
                {data.phone && (
                    <div className="flex flex-col p-4 bg-black/60 rounded-lg w-full justify-around">
                        <span className="text-white pb-3 text-lg self-center">User Details</span>

                        <span>
                            Email:{" "}
                            <p className="inline-flex ">
                                {users.find((user) => user.phone == data.phone)?.email}
                            </p>
                        </span>
                        <span>
                            Current Balance:{" "}
                            <p className="inline-flex ">
                                {users.find((user) => user.phone == data.phone)?.amount}
                            </p>
                        </span>
                        <span>
                            Refered By:{" "}
                            <p className="inline-flex ">
                                {users.find((user) => user.phone == data.phone)?.referCode}
                            </p>
                        </span>
                        <span>
                            Phone:{" "}
                            <p className="inline-flex ">
                                {users.find((user) => user.phone == data.phone)?.phone}
                            </p>
                        </span>
                        <span>
                            Role:{" "}
                            <p className="inline-flex ">
                                {users.find((user) => user.phone == data.phone)?.role}
                            </p>
                        </span>
                        <span>
                            Id:{" "}
                            <p className="inline-flex ">
                                {users.find((user) => user.phone == data.phone)?._id}
                            </p>
                        </span>
                    </div>
                )}

                <Button
                    disabled={!data.balance || !data.phone}
                    text={`${
                        data.balance > 0 ? "Deposit" : data.balance < 0 ? "Withdraw" : "Update"
                    } Balance`}
                    onAction={depositBalance}
                    isLoading={isLoading}
                />
            </form>
        </div>
    );
};
