import { HelmetProvider } from "react-helmet-async";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BottomNavbar from "../components/DrawerNav/BottomNavbar";
import City from "../components/city/City";
import Navbar from "@/components/navbar/Navbar";
import Jackpot2 from "@/assets/image/jackpot.jpeg";
import DepoBonus from "@/assets/image/depo-bonus.jpeg";
import AllGame from "@/assets/image/all-games.png";
import Ludo from "@/assets/image/ludo.png";
import Chess from "@/assets/image/chess.png";
import Dice from "@/assets/image/dice.png";
import Cards from "@/assets/image/cards.png";

export const Home = () => {
    const images = [Jackpot2, DepoBonus];

    const responsive = {
        // superLargeDesktop: {
        //     breakpoint: { max: 4000, min: 3000 },
        //     items: 5,
        // },
        // desktop: {
        //     breakpoint: { max: 3000, min: 1024 },
        //     items: 4,
        // },
        // tablet: {
        //     breakpoint: { max: 1024, min: 464 },
        //     items: 2,
        // },
        mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
        },
    };

    return (
        <HelmetProvider>
            <Navbar />
            <div className="w-full p-2 my-4">
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    infinite={true}
                    autoPlaySpeed={2000} // Adjust the speed as needed
                    arrows={false}
                    // showDots={true}
                >
                    {images.map((image, index) => (
                        <img
                            className="rounded-xl w-full h-auto"
                            key={index}
                            src={image}
                            alt={`image-${index}`}
                        />
                    ))}
                </Carousel>
            </div>
            <div className="flex flex-wrap justify-around bg-[#240700] m-2 p-2 rounded-xl text-sm">
                <div className="flex justify-center items-center flex-col">
                    <img src={AllGame} className="w-10 h-10" />
                    AllGame
                </div>
                <div className="flex justify-center items-center flex-col">
                    <img src={Ludo} className="w-10 h-10" />
                    Ludo
                </div>
                <div className="flex justify-center items-center flex-col">
                    <img src={Cards} className="w-10 h-10" />
                    Cards
                </div>
                <div className="flex justify-center items-center flex-col">
                    <img src={Dice} className="w-10 h-10" />
                    Dice
                </div>
                <div className="flex justify-center items-center flex-col">
                    <img src={Chess} className="w-8 h-8" />
                    Chess
                </div>
            </div>
            {/* <div className="bg-white/10 m-4 p-4 rounded-lg grid grid-cols-2 gap-4">
                <NavLink
                    to="https://wa.me/+971563664115"
                    target="_blank"
                    className="flex text-lg text-[#ff3333] font-semibold bg-white/10 p-3 rounded-lg items-center justify-center gap-3"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.6 19.167H2.4C1.1 19.167 0 18.067 0 16.767V12.167H2V16.367C2 16.967 2.4 17.167 3 17.167H17C17.6 17.167 18 16.767 18 16.167V12.167H20V16.767C20 18.067 18.9 19.167 17.6 19.167Z"
                            fill="#ff3333"
                        />
                        <path
                            d="M13.572 10.0775C13.4103 9.9919 13.2117 10.0218 13.0824 10.1511L11.4 11.8335V7.83349C11.4 5.8335 11.4 2.9335 13.8 0.833496C10.4 1.4335 8.7 4.0335 8.6 7.83349V11.8335L6.9176 10.1511C6.78826 10.0218 6.58968 9.9919 6.42802 10.0775L5.49859 10.5695C5.25083 10.7007 5.20069 11.0342 5.39891 11.2324L9.70537 15.5389C9.86809 15.7016 10.1319 15.7016 10.2946 15.5389L14.6011 11.2324C14.7993 11.0342 14.7492 10.7007 14.5014 10.5695L13.572 10.0775Z"
                            fill="#ff3333"
                        />
                    </svg>
                    Deposit
                </NavLink>
                <NavLink
                    to="https://wa.me/+971563664115"
                    target="_blank"
                    className="flex text-lg text-[#38df38] font-semibold bg-white/10 p-3 rounded-lg items-center justify-center gap-3"
                >
                    <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.6 17.9998H2.4C1.1 17.9998 0 16.8998 0 15.5999V11H2V15.1999C2 15.7999 2.4 15.9999 3 15.9999H17C17.6 15.9999 18 15.5999 18 14.9999V11H20V15.5999C20 16.8998 18.9 17.9998 17.6 17.9998Z"
                            fill="#38df38"
                        />
                        <path
                            d="M13.572 5.75578C13.4103 5.84136 13.2117 5.8115 13.0824 5.68217L11.4 3.99981V7.9997C11.4 9.99965 11.4 12.8996 13.8 14.9995C10.4 14.3995 8.7 11.7996 8.6 7.9997V3.99981L6.9176 5.68217C6.78826 5.8115 6.58969 5.84136 6.42803 5.75578L5.4986 5.26374C5.25084 5.13258 5.20069 4.79909 5.39892 4.60087L9.70538 0.294531C9.86809 0.131821 10.1319 0.13182 10.2946 0.294531L14.6011 4.60087C14.7993 4.79909 14.7492 5.13258 14.5014 5.26374L13.572 5.75578Z"
                            fill="#38df38"
                        />
                    </svg>
                    Withdraw
                </NavLink>
            </div> */}
            <div className="flex justify-center gap-5 m-5 rounded-xl">
            <iframe
                src="https://www.youtube.com/embed/_sGZ9UX3ke0?si=eVJNvxU2yvaHkFDx"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-auto"
                
            ></iframe>
            </div>
            <City />
            <BottomNavbar />
        </HelmetProvider>
    );
};
