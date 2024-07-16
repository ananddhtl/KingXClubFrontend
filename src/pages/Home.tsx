import { HelmetProvider } from "react-helmet-async";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BottomNavbar from "../components/DrawerNav/BottomNavbar";
import City from "../components/city/City";
import Navbar from "@/components/navbar/Navbar";
// import Jackpot2 from "@/assets/image/jackpot.jpeg";
// import DepoBonus from "@/assets/image/depo-bonus.jpeg";
// import SlotGif from "@/assets/slot-machine-transparent.gif";
import { NavLink } from "react-router-dom";
import SlotVideo from "@/assets/slot-machine.mp4";
import CoinFlow from "@/assets/coins-flow.mp4";
// import Countdown from "@/assets/countdown.mp4";
import MinuteCountdown from "@/assets/minute-countdown.mp4";

// import AllGame from "@/assets/image/all-games.png";
// import Ludo from "@/assets/image/ludo.png";
// import Chess from "@/assets/image/chess.png";
// import Dice from "@/assets/image/dice.png";
// import Cards from "@/assets/image/cards.png";

export const Home = () => {
    // const images = [Jackpot2, DepoBonus];
    const videos = [SlotVideo, CoinFlow, MinuteCountdown];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <HelmetProvider>
            <Navbar />
            <div className="w-full  p-2 my-4">
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    infinite={true}
                    autoPlaySpeed={3000} // Adjust the speed as needed
                    arrows={false}
                    // showDots={true}
                >
                    {videos.map((video, index) => (
                        <video
                            src={video}
                            autoPlay
                            loop
                            key={index}
                            className="rounded-xl max-w-[40rem] w-full h-auto"
                        />
                    ))}
                </Carousel>
            </div>
            {/* <div className="flex flex-wrap justify-around bg-[#240700] m-2 p-2 rounded-xl text-sm">
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
            </div> */}
            {/* <div className="bg-white/10 m-4 p-4 rounded-lg grid grid-cols-2 gap-4">
                <NavLink
                    to="https://wa.me/+9779822798040"
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
                    to="https://wa.me/+9779822798040"
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
            <div className="flex w-full justify-center gap-4">
                <div className="group p-1 rounded-lg hover:text-orange-700  bg-gradient-to-r from-[#ffd800] to-[#fe480f] shadow-lg ">
                    <NavLink
                        to="https://wa.me/+9779822798040?text=I%20want%20to%20withdraw%20from%20my%20balance."
                        target="_blank"
                        className="flex items-center bg-[#3c170a]  justify-start w-full p-2 px-8 lg:px-16 xl:px-16"
                        // onClick={toggleSidebar}
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
                                fill="#F6571E"
                            />
                            <path
                                d="M13.572 10.0775C13.4103 9.9919 13.2117 10.0218 13.0824 10.1511L11.4 11.8335V7.83349C11.4 5.8335 11.4 2.9335 13.8 0.833496C10.4 1.4335 8.7 4.0335 8.6 7.83349V11.8335L6.9176 10.1511C6.78826 10.0218 6.58968 9.9919 6.42802 10.0775L5.49859 10.5695C5.25083 10.7007 5.20069 11.0342 5.39891 11.2324L9.70537 15.5389C9.86809 15.7016 10.1319 15.7016 10.2946 15.5389L14.6011 11.2324C14.7993 11.0342 14.7492 10.7007 14.5014 10.5695L13.572 10.0775Z"
                                fill="#F6571E"
                            />
                        </svg>

                        <p className="oleo-script">Deposit</p>
                    </NavLink>
                </div>

                <div className="group p-1 rounded-lg hover:text-orange-700  bg-gradient-to-r from-[#ffd800] to-[#fe480f] shadow-lg ">
                    <NavLink
                        to="https://wa.me/+9779822798040?text=I%20want%20to%20withdraw%20from%20my%20balance."
                        target="_blank"
                        className="flex items-center bg-[#3c170a]  justify-start w-full p-2 px-8 lg:px-16 xl:px-16"
                        // onClick={toggleSidebar}
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
                                fill="#F6571E"
                            />
                            <path
                                d="M13.572 5.75578C13.4103 5.84136 13.2117 5.8115 13.0824 5.68217L11.4 3.99981V7.9997C11.4 9.99965 11.4 12.8996 13.8 14.9995C10.4 14.3995 8.7 11.7996 8.6 7.9997V3.99981L6.9176 5.68217C6.78826 5.8115 6.58969 5.84136 6.42803 5.75578L5.4986 5.26374C5.25084 5.13258 5.20069 4.79909 5.39892 4.60087L9.70538 0.294531C9.86809 0.131821 10.1319 0.13182 10.2946 0.294531L14.6011 4.60087C14.7993 4.79909 14.7492 5.13258 14.5014 5.26374L13.572 5.75578Z"
                                fill="#F6571E"
                            />
                        </svg>

                        <p className="oleo-script">Withdraw</p>
                    </NavLink>
                </div>
            </div>
            <div className="flex justify-center gap-10 my-10  items-center flex-col ">
                <iframe
                    src="https://www.youtube.com/embed/mQs9_xZPLW4?si=CDuSv73r9hIVVa-g"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="h-[50dvw] w-[90dvw] rounded-2xl"
                ></iframe>
                <span className="text-center text-2xl styled-text px-2">
                    Win Jackpot !!! Buy ticket worth Rs 500 and won upto 10 Lakh.
                </span>
                {/* <img src={SlotGif} className="w-full h-full rounded-3xl" /> */}
            </div>

            <div className="my-5 text-2xl text-center px-5 italic">
                तपाईंले सपनामा सेतो सर्प देख्नु भएको छ भने, र त्यसमा सेतो रंग लै नी हामि ले ७ नम्बर
                बुझछुम, त्यसको आधारमा तपाईले ७ नम्बरमा पैसा लगाउनु हुन्छ। ७ नम्बरबाट आउने सबै डबल,
                ट्रिपल नम्बरमा पनि पैसा लगाउनु हुन्छ जस्तै: ७०, ७१, ७२, ७३, १२४, ११५, ०१६, ०२५, ४५८,
                ७७० आदि.... यसरी अन्य डेटा हेरेर पनि लगानी गर्न सकिन्छ।
                <br /> थोरै जोखिम त हुन्छ नै, तर तपाईको भाग्यले साथ दिए पछि तपाई राजा बन्न सक्नु
                हुन्छ। सपना र भाग्यको खेलमा सफलता प्राप्त गर्न शुभकामना।
            </div>

            <City />
            <div className="text-center w-full p-8">
                <h3 className="my-5 text-lg styled-text"> Kingxclub के हो?</h3>
                <p>
                    <b className="styled-text">Kingxclub.com</b> एउटा अनलाइन प्लेटफर्म हो जहाँ थोरै
                    लगानी गरेर धेरै पैसा कमाउन सकिन्छ भनिएको छ। यसमा विभिन्न प्रकारका खेलहरू हुन्छन्
                    जसमा लगानी गरेर ठुलो नाफा कमाउन सकिन्छ। यसमा तपाईले १० रुपैयाँको लगानी गरेर
                    १,००,००० रुपैयाँसम्म सजिलै कमाउन सक्नुहुन्छ, त्यो पनि २-३ घण्टामा।
                </p>

                <h3 className="my-5 text-lg styled-text">Kingxclub मा कसरी जोडिने?</h3>
                <p>
                    Google मा गएर kingxclub.com खोज्नुपर्छ। या त हामीले पठाएको लिङ्क खोल्नुपर्छ र
                    दर्ता गर्नुपर्छ।
                </p>
                <h3 className="my-5 text-lg styled-text">Kingxclub मा लगानी कसरी गर्ने?</h3>
                <p>
                    Kingxclub मा ६ वटा प्लेटफर्महरू छन्:
                    <ul>
                        <li>
                            <b className="styled-text">Single Digit:</b> 0-9 को बीचमा नम्बर छनोट
                            गर्न सकिन्छ। नम्बर परेमा लगानीको 9x नाफा पाइन्छ।
                        </li>
                        <li>
                            <b className="styled-text"> Double Digit:</b> 00-99 को बीचमा नम्बर छनोट
                            गर्न सकिन्छ। नम्बर परेमा लगानीको 90x नाफा पाइन्छ।
                        </li>
                        <li>
                            <b className="styled-text"> Triple Digit:</b> 000-999 को बीचमा नम्बर
                            छनोट गर्न सकिन्छ। Single, Double, र Triple तीन प्रकारका खेलहरू हुन्छन्।
                            नाफा क्रमशः 150x, 250x, र 490x हुन्छ।
                        </li>
                        <li>
                            <b className="styled-text"> Jackpot:</b> टिकटको मूल्य 500 रुपैयाँ हो र
                            जितको राशि 10,00,000 रुपैयाँ हुन्छ।
                        </li>
                    </ul>
                </p>
                <h3 className="my-5 text-lg styled-text">Kingxclub को नियमहरू:</h3>
                <p>
                    <ul>
                        <li>सब क्लबमा निश्चित समय हुन्छ।</li>
                        <li>Club Panther मा 7am, 11am, 3pm, र 7pm मा रिजल्ट प्रकाशित हुन्छ।</li>
                        <li>रिजल्ट समयभन्दा १५ मिनेट अघि तपाईले शर्त लगाइसक्नुपर्छ</li>
                    </ul>
                </p>

                <h3 className="my-5 text-lg styled-text">Kingxclub मा खेल कसरी खेल्ने?</h3>
                <p>
                    <ul>
                        <li>क्लबमा गएर समय चयन गर्ने।</li>
                        <li>Position चयन गर्ने।</li>
                        <li>नम्बर मिलाएमा तपाईँले जित्न सक्नुहुन्छ।</li>
                        <li>पोजिसन ओपन र क्लोज हुन्छ। उदाहरणका लागि, (234 - 90 - 550):</li>
                        <li className="text-left pl-16">
                            <br /> ओपन अंक: 234 - 9
                            <br /> क्लोज अंक: 0 - 550
                            <br /> आधा किंग जित्नको लागि ओपनको ट्रिपल अंक र क्लोजको सिंगल अंक
                            मिल्नुपर्छ। (जस्तै, 234 - 90 - 550)
                            <br /> फुल किंग जित्नको लागि ओपन र क्लोज दुबैको ट्रिपल अंक मिल्नुपर्छ।
                            (जस्तै, 234 - 550)
                        </li>
                    </ul>
                </p>
                <h3 className="my-5 text-lg styled-text">
                    Kingxclub मा रिजल्ट कसरी प्रकाशित हुन्छ?
                </h3>

                <p>
                    क्लबमा प्रत्यक्ष रूपमा कार्डहरू निकालेका आधारमा नम्बरहरू तय हुन्छन्।
                    <br /> Kingxclub ले दुबईको क्लबमा आफ्ना ग्राहकहरूको अगाडि लाइभ 1-10 कार्ड (10
                    लाई 0 मानिन्छ) बाट नतिजा निकाल्छ। प्रत्येक कार्डको २२-२२ ओटा कार्ड हुन्छ, जम्मा
                    220 कार्ड हुन्छ। तीमध्ये ३ ओटा कार्ड रिलिज गरेर नतिजा निकालिन्छ।
                    <br />
                    जस्तै, 469=4+6+9=19 (अन्तिम अंक 9) र 677=6+7+7=21 (अन्तिम अंक 1) मिलाएर नतिजा
                    निकालिन्छ। यसरी सबै क्लबको नतिजा समयमा प्रकाशित हुन्छ।
                    <br />
                    Kingxclub खेलाडीहरूको खेल्ने आधार खेलाडीहरूले आफ्नो भाग्य, विश्लेषण, र सपनामा
                    देखिएका चित्रहरूको आधारमा खेल्ने गर्छन्।
                </p>
            </div>

            <div className="text-center w-full pt-5 pb-40 px-8">
                <h3 className="my-5 text-lg styled-text">Kingxclub Overview:</h3>

                <p>
                    <b className="styled-text">Kingxclub.com</b> is an online platform where you can
                    potentially earn a lot of money with a small investment. The platform offers
                    various games in which you can bet and win significant returns.
                </p>

                <h3 className="my-5 text-lg styled-text">How to Join Kingxclub?</h3>
                <p>
                    Search for "kingxclub.com" on Google. Alternatively, open the link provided to
                    you and register.
                </p>
                <h3 className="my-5 text-lg styled-text">How to Invest in Kingxclub?</h3>
                <p>
                    Kingxclub offers 6 different platforms for betting:
                    <ul>
                        <li>
                            <b className="styled-text">Single Digit: </b> Choose a number between
                            0-9. If your number is chosen, you win 9 times your bet.
                        </li>
                        <li>
                            <b className="styled-text"> Double Digit:</b> Choose a number between
                            00-99. If your number is chosen, you win 90 times your bet.
                        </li>
                        <li>
                            <b className="styled-text"> Triple Digit:</b> Choose a number between
                            000-999. There are three types of games: single, double, and triple. The
                            winnings are 150x, 250x, and 490x your bet respectively.
                        </li>
                        <li>
                            <b className="styled-text"> Jackpot:</b> The ticket costs 500 rupees and
                            the winning amount is 1,000,000 rupees.
                        </li>
                    </ul>
                </p>

                <h3 className="my-5 text-lg styled-text">Kingxclub Rules:</h3>
                <p>
                    <ul>
                        <li>Each club has a fixed time for publishing results.</li>
                        <li>
                            For example, Club Panther publishes results at 7am, 11am, 3pm, and 7pm.
                        </li>
                        <li>Bets must be placed at least 15 minutes before the result time.</li>
                    </ul>
                </p>
                <h3 className="my-5 text-lg styled-text">How Kingxclub Publishes Results:</h3>
                <p>
                    Results are determined by drawing cards live in front of customers. Each card
                    set creates a number.
                </p>

                <h3 className="my-5 text-lg styled-text">How to Play on Kingxclub:</h3>
                <p>
                    <ul>
                        <li>Go to the club and select the time.</li>
                        <li>Choose your position.</li>
                        <li>If your numbers match, you win according to the game's rules.</li>
                    </ul>
                </p>
            </div>
            <BottomNavbar />
        </HelmetProvider>
    );
};
