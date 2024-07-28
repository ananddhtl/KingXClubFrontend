import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { Table } from "../table";
import { getAllUser, updateBalance } from "@/api/api";
import toast from "react-hot-toast";
import { Button } from "../button/Button";
import { cn } from "@/utils/cn";
import { useProfileContext } from "@/App";

export const MasterUserInfo = () => {

    return (
        <section className="bg-neutral-900 min-h-screen w-full lg:w-screen flex-col flex">
            <DepositAmount />            
        </section>
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