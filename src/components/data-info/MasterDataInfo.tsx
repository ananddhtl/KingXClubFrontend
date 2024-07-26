import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { Table } from "../table";
import { getAllUser, getTodaysTicket, publishResultAPI, updateBalance } from "@/api/api";
import toast from "react-hot-toast";
import { SelectColumnFilter } from "../table/filters";
import { Button } from "../button/Button";
import { cn } from "@/utils/cn";
import { CLUBS } from "@/constants";
import { useProfileContext } from "@/App";

export const MasterDataInfo = () => {
    const [tickets, setTickets] = useState<any[]>([]);
    const [summary, setSummary] = useState<any[]>([]);
    const [dataLoading, setDataLoading] = useState(false);
    const [digit, setDigit] = useState("all");
    const [singleNumber, setSingleNumber] = useState(null);

    function sumOfDigits(value: string) {
        return value.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
      }

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
    console.log({singleNumber});
    

    const filteredSummaryData = useMemo(() => {
        if(digit === 'all') return summary.map((data) => ({ ...data, possibility: (data.count/data.returnAmount).toFixed(5)}));
        else if(digit === 'single') return summary.filter((data) => data._id.ticket.length === 1).map((data) => ({ ...data, possibility: (data.count/data.returnAmount).toFixed(5)}))
        else if(digit === 'double') return summary.filter((data) => data._id.ticket.length === 2 && singleNumber ? (Number(data._id.ticket[0]) === singleNumber || Number(data._id.ticket[1]) === singleNumber) : true).map((data) => ({ ...data, possibility: (data.count/data.returnAmount).toFixed(5)}))
        else if(digit === 'triple') return summary.filter((data) => data._id.ticket.length === 3 && singleNumber ? sumOfDigits(data._id.ticket) === singleNumber : true).map((data) => ({ ...data, possibility: (data.count/data.returnAmount).toFixed(5)}))
        else return []
    }, [digit, singleNumber, summary])
        
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
                <div className=" bg-black/60 p-2 my-10">
                    <TopSection
                        text="Today's Ticket Purchase Information"
                        description="* This data has been shown according to purchase from the website"
                    >
                        <Table columns={columns} data={tickets} />
                    </TopSection>
                    </div>
                <div className="bg-black/60 p-2 my-10">

                    <TopSection
                        text="Today's Ticket Summary Information"
                        description="* This data has been shown according to purchase from the website"
                    >
                        <div className="flex justify-center w-full my-5">
                            <div className="flex justify-center mt-6 border-1 border-red-800 rounded-full">
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
                                        "btn py-2 text-lg px-8 text-white rounded-full",
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
                                        "btn py-2 px-8 text-lg text-white rounded-full",
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
                                        "btn py-2 px-8 text-lg text-white rounded-full",
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
                                        "btn py-2 px-8 text-lg text-white rounded-full",
                                        digit === "triple" && " !bg-orange-500"
                                    )}
                                    htmlFor="bet-triple"
                                >
                                    Triple
                                </label>
                            </div>
                            </div>
                            {(digit === 'triple' || digit === 'double') && (
                                <div className="flex justify-center">
                                <label
                                className={cn(
                                    " py-2 px-8 text-lg text-white",
                                )}
                                htmlFor="single-number"
                            >
                                Single Number
                            </label>
                                <input
                                onChange={(e) => {
                                    if(e.target.value.length > 1) return
                                    if(e.target.value.length === 0) {
                                        setSingleNumber(null)
                                        return
                                    }
                                    setSingleNumber(Number(e.target.value))
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

const PublishResult: FC = () => {
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

const DepositAmount: FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUser] = useState([]);
    const { fetchCurrentUser } = useProfileContext();
    const [data, setData] = useState({
        phone: null,
        balance: 0,
    });
    const [search, setSearch] = useState("");

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredUsers = users.filter(({ phone }) => phone.toString().includes(search));
    function handleChange(value: number | string, dataFor: string) {
        setData({
            ...data,
            [dataFor]: value,
        });
    }

    const userColumn = useMemo(
        () => [
            {
                Header: "Phone",
                accessor: "phone" || "",
            },
            {
                Header: "Email",
                accessor: "email" || "",
            },
            {
                Header: "Name",
                accessor: "name" || "",
            },
            {
                Header: "Country",
                accessor: "country" || "",
            },
            {
                Header: "Address",
                accessor: "address" || "",
            },
            {
                Header: "Balance",
                accessor: "amount" || "",
            },
            {
                Header: "Role",
                accessor: "role" || "",
            },
            {
                Header: "Refer Code",
                accessor: "referCode" || "",
            },
            {
                Header: "Id",
                accessor: "_id" || "",
            },
            {
                Header: "Created Time",
                accessor: (values) => {
                    return values?.createdAt || "N/A";
                },
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
                Header: "Customers",
                accessor: (values) => {
                    return values?.users?.length || 0;
                },
                Cell: ({ cell }: any) => {
                    const { value } = cell;
                    return (
                        <div style={{ textAlign: "center", fontWeight: "600", fontSize: 15 }}>
                            {value}
                        </div>
                    );
                },
            }
        ],
            [])

    const fetchUser = async () => {
        try {
            const users = await getAllUser();
            console.log({ users });
            setUser(users.data);
        } catch (error) {
            console.log(`Error fetching user: ${error}`);
        }
    };

    const depositBalance = async (): Promise<any> => {
        if (!data.phone) return toast("Please select phone number");
        if (!data.balance) return toast("Please enter the balance to deposit");
        try {
            setIsLoading(true);
            const res = await updateBalance(data);
            toast.success(res.data?.message || "successful");
            fetchUser();
            fetchCurrentUser();
            return res;
        } catch (error) {
            toast.error(error.response?.data?.message || "Unknown error", { id: "unknown-error" });
            throw new Error(`Error : ${error}`);
        } finally {
            setIsLoading(false);
            setData({ ...data, balance: 0 });
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <>
        <div className="flex w-full justify-center">
        <div className="max-w-5xl bg-black/60  flex flex-col rounded-xl p-5 my-5 relative">
            <div className="text-orange-600 text-center font-semibold text-lg">
                Update Balance
            </div>

            <p className="text-gray-500 my-1 text-center">Find the number to deposit amount</p>
            <form className="flex flex-wrap gap-10">
                <div className="gap-4 p-5 md:p-20 flex flex-col w-full justify-around">
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
                                className="ticket-search-input px-4 w-52 my-2 border bg-black/60 rounded-md outline-none text-orange-600"
                            />
                            <select
                                id="phone"
                                onChange={(e) => handleChange(String(e.target.value), "phone")}
                                className="ticket-dropdown px-4 w-52 my-2 border bg-black/60 rounded-md outline-none text-orange-600"
                            >
                                <option value={null} hidden className="text-black/50">
                                    Select Number
                                </option>
                                {filteredUsers.map(({ phone, email }) => {
                                    return (
                                        <option
                                            key={phone}
                                            value={phone}
                                            className="bg-black text-sm"
                                        >
                                            {phone} | {email}
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
                        <label className="text-white text-lg pr-10">Deposit</label>
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
                    {data.phone && (
                        <div className="flex flex-col p-4 rounded-lg w-full justify-around">
                            <span className="text-white pb-3 text-lg self-center">
                                User Details
                            </span>

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
                            data.balance > 0
                                ? "Deposit"
                                : data.balance < 0
                                ? "Withdraw"
                                : "Update"
                        } Balance`}
                        onAction={depositBalance}
                        isLoading={isLoading}
                    />
                </div>
            </form>
        </div>
        </div>
        {users.length > 0 ? (
                <div className="bg-black/60 p-2 my-10">
                    
                        
                        <TopSection
                            text="Customer Information"
                            description="* This data has been shown according to data from the website"
                        >
                            <Table columns={userColumn} data={users} />
                        </TopSection>
                    </div>
                ) : (
                    <span className="text-center py-20 text-2xl w-full flex justify-center text-red-500">
                        No data found
                    </span>
                )}
    </>
    );
};