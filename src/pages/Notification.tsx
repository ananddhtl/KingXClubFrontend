import { useProfileContext } from "@/App";
import { getMyActivity } from "@/api/api";
import { ROLE, routes } from "@/constants";
import { useEffect, useState } from "react";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Notification = () => {
    const [activity, setActivity] = useState<
        {
            balanceChange: number;
            message: string;
            createdAt: string;
        }[]
    >([]);
    const [transactionCount, setTransactionCount] = useState(0);
    const [transactionAmount, setTransactionAmount] = useState(0);
    const navigate = useNavigate();
    const { user } = useProfileContext();

    useEffect(() => {
        (async () => {
            try {
                const activity = await getMyActivity();
                console.log({ activity });
                setActivity(activity.data.data.history);
                setTransactionAmount(activity.data.data.transactionAmount);
                setTransactionCount(activity.data.data.transactionCount);
            } catch (error) {
                console.log(`Error fetching activity: ${error}`);
            }
        })();
    }, []);

    return (
        <section className="flex flex-col items-center justify-start text-white gap-10 min-h-screen p-4">
            <div className="sticky top-5 flex justify-between items-center w-full">
                <button
                    onClick={() => navigate(routes.PROFILE)}
                    className="p-3 bg-gray-100 rounded-full shadow-sm"
                >
                    <BiSolidLeftArrowAlt className="w-full text-black" />
                    {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
                </button>
                <span className="text-2xl font-sans font-semibold  oleo-script">Activity</span>
                <div />
            </div>
            <div className="flex flex-col w-full items-center gap-8">
                {user.role !== ROLE.MASTER && <div className="flex w-full justify-center gap-5 flex-wrap">
                    <p className="styled-text text-xl">Transaction Volume : {transactionCount}</p>
                    <p className="styled-text text-xl">Transaction Balance : {transactionAmount}</p>
                </div>}
                {activity.length === 0 ? (
                    <span className="text-xl">No history found</span>
                ) : (
                    <>
                        {activity.map((activity) => (
                            <div className="border-red-800 border-1 relative flex flex-col gap-2 items-center p-1 w-full rounded-md">
                                <span className="flex items-center justify-around text-white font-thin text-sm py-2 w-full text-center">
                                    {new Date(activity.createdAt).toLocaleString("en", {
                                        hour: "numeric",
                                        minute: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                    <p className="ml-2 text-xl mx-2 font-bold h-8 w-[2px] bg-gradient-to-b rounded-lg from-yellow-500 to-red-500" />
                                    {activity.message}
                                </span>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </section>
    );
};

export default Notification;
