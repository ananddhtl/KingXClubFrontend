import { routes } from "@/constants";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import BidModal from './BidModal'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const PlaceBid = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    const navigate = useNavigate();
    const { city } = useParams();
    console.log({ city });
    const places = [
        {
            place: "Pokhara",
            time: ["09:00", "12:00", "15:00", "21:00"],
        },
        {
            place: "Kathmandu",
            time: ["09:00", "12:00", "15:00"],
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

    return (
        <section className="bg-[#F4F4F4] flex flex-col items-center justify-start text-black min-h-screen ">
                  <ToastContainer />

            <div className="sticky top-1 flex justify-between items-center p-4 w-full">
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
                <span className="text-2xl font-sans font-semibold">{city}</span>
                <div />
            </div>
            <form className="flex flex-col w-full items-center gap-8 p-4">
                <div className="bg-white p-3 w-full rounded-3xl">
                    <span className="text-xl font-medium">Select time</span>
                    <div className="flex my-6 justify-between border-1 border-[#F6F6F6] rounded-full">
                        {/* {places
                            .find((event) => event.place === city)
                            .time.map((timestamp, index) => {
                                const time = new Date().setHours(
                                    Number(timestamp.split(":")[0]),
                                    Number(timestamp.split(":")[1])
                                );
                                return (
                                    <>
                                        <input
                                            onChange={(e) => console.log(Number(e.target.value))}
                                            className="btn-check"
                                            type="radio"
                                            name="betDate"
                                            id={`betDate${index}`}
                                            value={time}
                                            autoComplete="off"
                                            required
                                        />
                                        <label
                                            className="btn py-2 text-lg rounded-full"
                                            htmlFor={`betDate${index}`}
                                        >
                                            {new Date(time).toLocaleString("default", {
                                                hour: "numeric",
                                                minute: "numeric",
                                            })}
                                        </label>
                                    </>
                                );
                            })} */}
                    </div>
                    <span className="text-xl font-medium">Select Position</span>
                    <div className="flex mt-6 justify-between w-fit border-1 border-[#F6F6F6] rounded-full">
                        <input
                            onChange={(e) => console.log(Number(e.target.value))}
                            className="btn-check"
                            type="radio"
                            name="bet-position"
                            id="bet-left"
                            value="Left"
                            autoComplete="off"
                            required
                        />
                        <label className="btn py-2 text-lg rounded-full" htmlFor="bet-left">
                            Left
                        </label>
                        <input
                            onChange={(e) => console.log(Number(e.target.value))}
                            className="btn-check"
                            type="radio"
                            name="bet-position"
                            id="bet-right"
                            value="Right"
                            autoComplete="off"
                            required
                        />
                        <label className="btn py-2 text-lg rounded-full" htmlFor="bet-right">
                            Right
                        </label>
                    </div>
                </div>
            </form>
            <div className="bg-white flex flex-col items-center justify-center w-full min-h-full py-10">
            <button
                onClick={handleOpenModal}
                className="bg-orange-500 py-2 px-12 text-lg rounded-full text-center text-white w-[60%]"
            >
                + Add Tickets
            </button>
            <BidModal isOpen={isModalOpen} onClose={handleCloseModal} />
                <table className="table mt-5 table-hover table-auto">
                    <thead className="border-b-[#F6571E]">
                        <tr className="active">
                            <th className=" text-lg text-[#281F1D] font-medium">Digit</th>
                            <th className=" text-lg text-[#281F1D] font-medium">Amount</th>
                            <th className=" text-lg text-[#281F1D] font-medium">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center text-[#281F1D]">123</td>
                            <td className="text-center text-[#281F1D]">100</td>
                            <td className="text-center text-[#281F1D]">Right</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className="fixed bottom-0 flex flex-col w-full items-center !gap-0">
                <span className="py-2 text-white text-2xl font-semibold w-full rounded-tr-lg rounded-tl-lg bg-orange-500">
                    Jackpot (777)
                </span>
                <span className="py-2 text-white text-2xl font-semibold w-full  bg-yellow-500">
                    Win upto 10 Lakh
                </span>
            </button>
        </section>
    );
};
