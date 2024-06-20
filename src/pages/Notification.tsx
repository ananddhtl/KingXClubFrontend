import { getMyActivity } from "@/api/api";
import { routes } from "@/constants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Notification = () => {
    const [activity, setActivity] = useState<
        {
            balanceChange: number;
            message: string;
            createdAt: string;
        }[]
    >([]);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const activity = await getMyActivity();
                console.log({ activity });
                setActivity(activity.data.data);
            } catch (error) {
                console.log(`Error fetching activity: ${error}`);
            }
        })();
    }, []);

    return (
        <section className="flex flex-col items-center justify-start text-white gap-10 min-h-screen p-4">
            <div className="sticky top-5 flex justify-between items-center w-full">
                <button onClick={() => navigate(routes.PROFILE)}>
                    <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="0.517039"
                            y="0.517039"
                            width="42.9659"
                            height="42.9659"
                            rx="21.483"
                            fill="url(#paint0_linear_831_6513)"
                        />
                        <rect
                            x="0.517039"
                            y="0.517039"
                            width="42.9659"
                            height="42.9659"
                            rx="21.483"
                            stroke="url(#paint1_linear_831_6513)"
                            stroke-width="1.03408"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M24.6379 15.0602C25.0225 15.3679 25.0849 15.9292 24.7772 16.3138L20.4662 21.7026L24.7772 27.0914C25.0849 27.476 25.0225 28.0373 24.6379 28.345C24.2533 28.6527 23.692 28.5904 23.3843 28.2057L18.6275 22.2598C18.3669 21.934 18.3669 21.4712 18.6275 21.1455L23.3843 15.1995C23.692 14.8149 24.2533 14.7525 24.6379 15.0602Z"
                            fill="white"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_831_6513"
                                x1="21.9999"
                                y1="0"
                                x2="21.9999"
                                y2="41.0667"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#FF5301" />
                                <stop offset="1" stop-color="#FFD901" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_831_6513"
                                x1="22"
                                y1="0"
                                x2="22"
                                y2="44"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#571100" />
                                <stop offset="1" stop-color="#CE2800" />
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
                <span className="text-2xl font-sans font-semibold  oleo-script">Activity</span>
                <div />
            </div>
            <div className="flex flex-col w-full items-center gap-8">
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
