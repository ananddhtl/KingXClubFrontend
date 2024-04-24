import { useState } from "react";
import { Modal } from "../modal/Modal";
import { buyOneTicket } from "@/api/api";
import toast from "react-hot-toast";

export const Game = () => {
    const balance =1000
    const [showTicketModal, setShowTicketModal] = useState<null | string>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [time, setTime] = useState("");
    const [amount, setAmount] = useState("");
    const [digit, setDigit] = useState(1);
    const [ticket, setTicket] = useState("");
    console.log(showTicketModal, !!showTicketModal);
    

    const events = [
        {
            place: "Pokhara",
            image: "assets/img/pok.jpg",
            totalAmount: 10000000,
            totalPlayers: 13,
            time: ['09:00', '12:00', '15:00', '21:00']
        },
        {
            place: "Kathmandu",
            image: "assets/img/baratnagar.jpg",
            totalAmount: 1000,
            totalPlayers: 13,
            time: ['09:00', '12:00', '15:00', '21:00']
        },
        {
            place: "Butwal",
            image: "assets/img/ktm.jpg",
            totalAmount: 1000,
            totalPlayers: 13,
            time: ['09:00', '12:00', '15:00', '21:00']
        },
    ];
    const handleChange = (e) => {
        console.log('ok');
        
        console.log(e.target);
    };

    const buyTicket = async (): Promise<any> => {
        try {
            setIsLoading(true);
            const res = await buyOneTicket({ tickect: "123" });
            console.log(res);

            toast(res.data?.message || "Unknown error");
            return res;
        } catch (error) {
            console.log(`Error logging user: ${error}`);
            toast(error.response?.data?.message || "Unknown error");
            throw new Error(`Error logging user: ${error}`);
        } finally {
            setIsLoading(false);
            setShowTicketModal(null);
        }
    };
    return (
        <>
            <section className="tournament-section pb-120" id="tournament-hero">
                <div className="diamond-area">
                    <img className="w-100" src="assets/img/diamond.png" alt="diamond" />
                </div>
                <div className="game-console-area">
                    <img className="w-100" src="assets/img/game-console2.png" alt="game-console" />
                </div>
                <div className="red-ball top-50"></div>
                <div className="tournament-wrapper">
                    <div className="tournament-wrapper-border">
                        <div className="container paddd">
                            <div className="row justify-content-between align-items-center gy-sm-0 gy-4 mb-15">
                                <div className="col-md-6 col-sm-8">
                                    <h2 className="display-four tcn-1 cursor-scale growUp title-anim">
                                        Our City
                                    </h2>
                                </div>
                                <div className="col-md-6 col-sm-4 text-sm-end">
                                    <a
                                        href="tournaments.html"
                                        className="btn-half-border position-relative d-inline-block py-2 px-6 bgp-1 rounded-pill"
                                    >
                                        View More
                                    </a>
                                </div>
                            </div>
                            <div className="row cursor-pointer justify-content-between align-items-center g-6">
                                {events.map((event) => (
                                    <div
                                        role="button"
                                        onClick={() => setShowTicketModal(event.place)}
                                        className="col-xl-4 col-md-6"
                                    >
                                        <div className="tournament-card p-xl-4 p-3 bgn-4">
                                            <div className="tournament-img mb-8 position-relative">
                                                <div className="img-area overflow-hidden">
                                                    <img
                                                        className="w-100"
                                                        src={event.image}
                                                        alt="tournament"
                                                    />
                                                </div>
                                                <span className="card-status position-absolute start-0 py-2 px-6 tcn-1 fs-sm">
                                                    <span className="dot-icon alt-icon ps-3">
                                                        Play Now
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="tournament-content px-sm-2">
                                                <div className="tournament-info mb-5">
                                                    <a
                                                        href="tournaments-details.html"
                                                        className="d-block"
                                                    >
                                                        <h4 className="tournament-title tcn-1 mb-1 cursor-scale growDown title-anim">
                                                            {event.place}
                                                        </h4>
                                                    </a>
                                                </div>
                                                <div className="hr-line line3"></div>
                                                <div className="card-info d-flex align-items-center gap-3 flex-wrap my-5">
                                                    <div className="ticket-fee bgn-3 d-flex align-items-center gap-1 py-2 px-3 h-100">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="gold"
                                                            className="bi bi-ticket-perforated"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M4 4.85v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9z" />
                                                            <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3zM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9z" />
                                                        </svg>
                                                        <span className="tcn-1 fs-sm">
                                                            Buy Ticket
                                                        </span>
                                                    </div>
                                                    <div className="date-time bgn-3 d-flex align-items-center gap-1 py-2 px-3 h-100">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            className="bi bi-calendar-event"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                                        </svg>
                                                        <span className="tcn-1 fs-sm">
                                                            {new Date().toLocaleString("default", {
                                                                month: "long",
                                                                year: "numeric",
                                                                day: "2-digit",
                                                            })}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="hr-line line3"></div>
                                                <div className="card-more-info d-between mt-6">
                                                    <div className="teams-info d-between gap-xl-5 gap-3">
                                                        <div className="teams d-flex align-items-center gap-1">
                                                            <i className="ti ti-users fs-base"></i>
                                                            <span className="tcn-6 fs-sm">
                                                                Bet Amount Rs.
                                                                {` ${event.totalAmount
                                                                    .toString()
                                                                    .replace(
                                                                        /\B(?=(\d{3})+(?!\d))/g,
                                                                        ","
                                                                    )} `}
                                                            </span>
                                                        </div>
                                                        <div className="player d-flex align-items-center gap-1">
                                                            <i className="ti ti-user fs-base"></i>
                                                            <span className="tcn-6 fs-sm">
                                                                {event.totalPlayers} Players
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {!!showTicketModal && (
                <Modal
                    isLoading={isLoading}
                    title={`Buy Tickets (${showTicketModal})`}
                    setShowModal={() => setShowTicketModal(null)}
                    action="Buy Ticket"
                    onAction={buyTicket}
                >
                    <form
                        id="betForm"
                        className="bet-form"
                        hx-post="http://localhost:5000/v1/ticket/buy"
                        hx-indicator="#spinner"
                        hx-swap="none"
                    >
                        <div className="flex flex-col items-center justify-center">
                            <p>Select Time</p>
                            <div className="btn-group gap-3" role="group" aria-label="Bet Date">
                                {events.find((event) => event.place === showTicketModal).time.map((timestamp) => (
                                    <>
                                <input
                                    className="btn-check bet-date"
                                    type="radio"
                                    key={timestamp}
                                    name="betDate"
                                    value={new Date().setHours(Number(timestamp.split(':')[0]), Number(timestamp.split(':')[1]))}
                                    // autoComplete="off"
                                    // required
                                    />
                                <label 
                                    onClick={handleChange}
                                    className="btn rounded-pill">{timestamp}{" "}{Number(timestamp.split(':')[0]) > 12 ? 'PM' : 'AM'}</label>
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-8">
                            <label className="form-label w-32">Bet Amount</label>
                            <div className="input-group w-40">
                                <span className="input-group-text">Rs</span>
                                <input
                                    type="number"
                                    className="form-control betAmount"
                                    id="betAmount"
                                    name="betAmount"
                                    min="1"
                                    max="100"
                                    required
                                />
                            </div>
                            <span id="amount-warning" className=" text-white hidden">
                                You have entered your maximum amount. Please load the balance to bet
                                more.
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-center mt-8">
                            <label className="form-label">Ticket Number</label>
                            <div
                                className="btn-group gap-3"
                                role="group"
                                aria-label="ticket number"
                            >
                                <input
                                    className="btn-check"
                                    type="radio"
                                    name="ticket"
                                    id="ticket1"
                                    defaultChecked
                                    value="1"
                                    autoComplete="off"
                                    required
                                />
                                <label className="btn rounded-pill">Single</label>

                                <input
                                    className="btn-check"
                                    type="radio"
                                    name="ticket"
                                    id="ticket2"
                                    value="2"
                                    autoComplete="off"
                                    required
                                />
                                <label className="btn rounded-pill">Double</label>

                                <input
                                    className="btn-check"
                                    type="radio"
                                    name="ticket"
                                    id="ticket3"
                                    value="3"
                                    autoComplete="off"
                                    required
                                />
                                <label className="btn rounded-pill">Triple</label>
                            </div>
                            <div className="flex items-center space-x-2 mt-8">
                                <select
                                    id="ticket3"
                                    className="ticket-dropdown w-12 h-8 border rounded-md outline-none text-orange-500"
                                >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                                <select
                                    id="ticket2"
                                    className="ticket-dropdown hidden w-12 h-8 border rounded-md outline-none text-orange-500"
                                >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                                <select
                                    id="ticket1"
                                    className="ticket-dropdown hidden w-12 h-8 border rounded-md outline-none text-orange-500"
                                >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </div>
                            <input
                                type="number"
                                className="form-control hidden"
                                id="ticketNumber"
                                name="ticketNumber"
                                required
                            />
                        </div>
                        <h4
                            id="bet-city-title"
                            className="bet-city-title tcn-1 mb-1 cursor-scale growDown title-anim font-bold text-xl"
                        >
                            Returns
                        </h4>
                    </form>
                </Modal>
            )}
        </>
    );
};
