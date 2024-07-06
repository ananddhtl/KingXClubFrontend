import { HelmetProvider } from "react-helmet-async";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BottomNavbar from "../components/DrawerNav/BottomNavbar";
import City from "../components/city/City";
import Navbar from "@/components/navbar/Navbar";
// import Jackpot2 from "@/assets/image/jackpot.jpeg";
// import DepoBonus from "@/assets/image/depo-bonus.jpeg";
import SlotGif from "@/assets/slot-machine-transparent.gif";
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
                    {/* {images.map((image, index) => (
                        <img
                            className="rounded-xl w-full h-auto"
                            key={index}
                            src={image}
                            alt={`image-${index}`}
                        />
                    ))} */}
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
            <div className="flex justify-center gap-10 my-20  items-center flex-col ">
                <iframe
                src="https://www.youtube.com/embed/mQs9_xZPLW4?si=CDuSv73r9hIVVa-g"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className=" rounded-2xl"
                
            ></iframe>
                <span className="text-center text-2xl styled-text">
                    Win Jackpot !!! Buy ticket worth Rs 500 and won upto 10 Lakh.
                </span>
                {/* <img src={SlotGif} className="w-full h-full rounded-3xl" /> */}
            </div>

            <City />
            <div className="text-center w-full py-8">
                <h3 className="my-5 text-lg styled-text">21 औं शताब्दीको सट्टा मटका खेल</h3>
                <p>
                    यो 21 औं शताब्दीको सट्टा मटका खेल विश्वभरका सबैभन्दा लोकप्रिय जुवाहरू मध्ये एक
                    हो। हाम्रो विश्वासयोग्य सट्टा मटका वेबसाइटले तपाईलाई थप पैसा जित्न मद्दत
                    पुर्याउने सुझावहरू, चालहरू र रणनीतिहरू प्रदान गर्दछ। सफल खेलाडी बन्ने सबै भन्दा
                    राम्रो सल्लाह र जानकारीको लागि हाम्रो वेबसाइटमा जानुहोस्।
                </p>
                <h3 className="mt-5 text-lg styled-text">सट्टा मटका</h3>
                <p>
                    मटका एक साधारण खेल हो जहाँ तपाईंलाई 0 देखि 9 सम्मका संख्याहरू अनुमान गर्न आवश्यक
                    छ। थोरै अभ्यासले, जोकोही पनि सट्टा मटका मास्टर हुन सक्छ। भारतमा मटका लटरी खेलको
                    नाम हो। मटका एउटा अड्कल खेल हो जसमा अंकहरू अड्कलको रेकर्डबाट निकालिन्छ र
                    सट्टामटका मा उपलब्ध अन्य सबै जानकारी पनि।
                </p>
                <h3 className="mt-5 text-lg styled-text">सट्टा मटका - छिटो कल्याण मटका नतिजाहरू जाँच गर्नुहोस्</h3>
                <p>
                    सट्टा मटका नतिजा, मटका टिप्स, मटका अनुमान, मटका चार्टहरू, मटका सट्टा, कल्याण
                    मटका सट्टा, कल्याण चार्ट, कल्याण प्यानल चार्ट, मुम्बई चार्ट, कल्याण सट्टा, सट्टा
                    बट्टा, सट्टा मट्टा मटका, कल्याण नतिजा, कल्याण सट्टा मटका, सट्टा बजार, डिपबोस
                    मटका कल्याण सट्टा नम्बर SattaMatka777.IN मा पाउनुहोस्।
                </p>
                <p>
                    खेलाडीहरूले सट्टामटका खेल्न सुरु गर्न पहिलो तीन अंक 0 देखि 9 बीच चयन गर्न
                    सक्छन्। उदाहरणका लागि, 1, 5 र 7 लाई जोड्दा 13 हुन्छ। पहिलो अंकलाई हटाएर '3'
                    मात्र रहन्छ। यो अंक चयन गरिएका अंकहरूसँग 1, 5 र 7*3 रूपमा जोडिन्छ। यही प्रक्रिया
                    दोस्रो सेटका अंकहरूको लागि पनि लागू हुन्छ। कल्याण मटका, सट्टा बट्टा, राजधानी
                    मटका र मिलान मटका जस्ता धेरै बजारहरू उपलब्ध छन्। पहिलो खेलाडीले कुन खेल खेल्ने
                    निर्णय गर्नुपर्छ त्यसपछि बाजीको विकल्पहरू अन्वेषण गर्नुपर्छ। त्यसपछि उनीहरूले
                    आफ्नो भाग्यशाली अंक(हरू) चयन गरेर यसमा बाजी लगाउनुपर्छ र अन्तिम नतिजा
                    जाँच्नुपर्छ।
                </p>
                <h3 className="mt-5 text-lg styled-text">सट्टा मटका बजार अनलाइन खेल्नु अघि के जान्नुपर्छ</h3>
                <p>
                    सट्टा मटका बजार अनलाइन खेल्नु अघि, कल्याणमटका, सट्टा बट्टा, र कल्याण सट्टा जस्ता
                    विभिन्न प्रकारका खेलहरू बुझ्नु महत्त्वपूर्ण छ। हाम्रा अनुभवी विशेषज्ञहरूले छिटो
                    सट्टा समाचार, कल्याण मटका खेल, कल्याण मटका बजार, मटका सट्टा कल्याण, मटका सट्टा
                    चार्ट, मिलान मटका चार्ट, राजधानी मटका चार्ट र धेरै अरूको बारेमा भरपर्दो जानकारी
                    प्रदान गर्न सक्छन्। हाम्रो वेबसाइटले भारतीय सट्टा मटका खेल्नको लागि सुरक्षित
                    प्लेटफर्म प्रदान गर्दछ। साथै, हामी सट्टामट्टा, साप्ताहिक जोडी र सट्टा किङ नतिजा
                    सहित नि:शुल्क सुझावहरू र सल्लाहहरू प्रदान गर्दछौं।
                </p>
                <h3 className="mt-5 text-lg styled-text">खेल कसरी खेल्ने</h3>
                <p>
                    सट्टा मटका खेलमा, मानिसहरूले अंकहरू भएका चिठ्ठा देख्छन्। चिठ्ठामा मात्र एउटा
                    विशिष्ट अंकले लटरी जित्ने सुनिश्चित हुन्छ। कागजी चिठ्ठामा 00 देखि 99 सम्मका
                    अंकहरू हुन्छन्। खेलाडीहरूले 00 देखि 99 सम्मको अंकमा बाजी लगाउँछन्। यदि कुनै
                    व्यक्तिको भाग्य राम्रो छ भने, अंकले लटरी जित्छ। लटरीका विजेताहरूलाई यस खेलको
                    रानी वा राजा मानिन्छ। उनीहरूलाई बाजीको रकमको आधारमा पुरस्कृत गरिन्छ।
                </p>
                <h3 className="mt-5 text-lg styled-text">हाम्रा सट्टामटका विशेषज्ञले तपाईंलाई कसरी मद्दत गर्न सक्छन्</h3>
                <p>
                    हाम्रा विशेषज्ञहरूले तपाईंलाई सबैभन्दा राम्रो अनुमान सुझावहरू र प्रभावकारी मटका
                    नतिजा दिन्छन्। हाम्रो शुभकामना र तपाईंको भाग्यको साथ, तपाईं सट्टा मटका विजेता
                    बन्न सक्नुहुन्छ! SattaMatka777.IN भारतको प्रमुख वेबसाइट हो; यसले आफ्नो
                    आगन्तुकहरूलाई छिटो नतिजाहरू प्रदान गर्दछ। हाम्रा नवीन सुझावहरू र चालहरूले
                    तपाईंलाई यी खेलहरू सही रूपमा खेल्न मद्दत गर्दछ। हाम्रा अनुभवी अनुमानकर्ताहरूले
                    दिएको अनौठो सल्लाहले तपाईंलाई ठूलो रकम जित्न र कमाउन मद्दत गर्दछ। उन्नत
                    प्रविधिहरूसँग मेल राख्दै, हाम्रो सुरक्षित वेबसाइटले कल्याण सट्टा मट्टा
                    चार्टहरूको पहुँच प्रदान गर्दछ जसले सुपर छिटो मटका कल्याण चार्टहरू प्रदान गर्दछ।
                    अपडेट गरिएको जानकारीको लागि हामीलाई दैनिक रूपमा भ्रमण गर्ने सुझाव दिन्छौं।
                </p>
                <h3 className="mt-5 text-lg styled-text">नि:शुल्क कल्याण मटका सुझावहरूको खोजीमा</h3>
                <p>
                    हाम्रो विशेषज्ञहरूबाट नि:शुल्क कल्याण मटका र राजधानी मटका सुझावहरू, सट्टा बट्टा
                    र मटका सट्टा सुझावहरू पहुँच गर्नुहोस्। छिटो कमाईसँग सम्बन्धित कुनै पनि प्रश्न
                    सोध्न हामी तपाईंलाई आमन्त्रित गर्छौं। हाम्रो वेबसाइटले सट्टा मटका बजारमा भाग
                    लिने आदर्श वातावरण प्रदान गर्दछ। यो सुनौलो अवसरको अधिकतम लाभ उठाउन सुरु
                    गर्नुहोस्! हाम्रो सबै भन्दा राम्रो सट्टा मटका सल्लाहसँग प्रभावशाली जीतको आनन्द
                    लिनुहोस्। हामीले वाचा गरेको निश्चित मटका नम्बरको साथ तपाईंको गेमिङ अनुभव पूर्ण
                    सुरक्षित छ। सबैभन्दा राम्रो सट्टा मटका वेबसाइटमा अनलाइन खेल्नुहोस् र ठूलो
                    पुरस्कार जित्नुहोस्!
                </p>
                <p>
                    अनुभव र चालहरूको साथ, कसैको सट्टामटका खेलमा जित्ने ठूलो सम्भावना हुन्छ र ठूलो
                    रकम जित्न सक्छ। सुरक्षित खेल्न, खेलाडीले प्रत्येक दिन 3 वा 4 अंकहरू चयन गर्न
                    सक्छ र तिनीहरूलाई हाम्रो वेबसाइटबाट प्राप्त गर्न सक्छ। यद्यपि वास्तविकता बिर्सनु
                    हुँदैन, किनभने भाग्यले यहाँ ठूलो भूमिका खेल्छ; हरेक दिन तपाईंको भाग्यशाली दिन
                    हुँदैन! तपाईं आज जित्न सक्नुहुन्छ वा भोलि हार्न सक्नुहुन्छ, तर आशावादी रहनु
                    महत्त्वपूर्ण छ र निराशाहरूले तपाईंलाई नियन्त्रणमा राख्न नदिनुहोस् किनभने यस
                    खेलमा जित्न सँधै हराउनु भन्दा राम्रो हो!
                </p>
                <h3 className="mt-5 text-lg styled-text">भारतीयहरूको लागि सट्टामटका ठूलो हिट</h3>
                <p>
                    सट्टामटका बजार सट्टा मटका, सट्टा एम, मटका सट्का, सट्टा-मटका, सट्टा.मटका, सट्का,
                    मटाका, का मटका, सट्टा मट्टा, सट्टा मटका 143 र मटका इन को शीर्ष गन्तव्य हो।
                    हाम्रा विशेषज्ञ टोलीले तपाईंलाई सट्टामटका खेल प्रवृत्तिहरूको विश्लेषण र
                    समाचारहरू चार्ट परिणामहरू र अन्य विवरणहरू जस्तै ओपन क्लोज सिंगल फिक्स जोडी
                    प्यानल र खेलहरूको बारेमा जानकारी दिन्छ जसले तपाईंको जित्ने सम्भावना बढाउँछ। हामी
                    एक मौलिक वेबसाइट हौं जसले तपाईंलाई भारतको लोकप्रिय बाजी खेल - सट्टामटका मा अपडेट
                    राख्छ। साथै, हाम्रा जुवाडीहरूको समुदायले गेमिङ उद्योगको अनुभव र ज्ञानमा
                    अन्तर्दृष्टि प्रदान गर्दछ। तपाईं पनि विशेषज्ञहरूलाई पछ्याउन सक्नुहुन्छ जब
                    तिनीहरूले आफ्नो क्षेत्रको ताजा लेख, छविहरू वा भिडियोहरू पोस्ट गर्दा समयमा सूचना
                    प्राप्त गर्न।
                </p>
                <h3 className="mt-5 text-lg styled-text">सट्टा किङ खेल - लाभदायक जुवा खेल वा पैसा हराउने मात्र</h3>
                <p>
                    सट्टा सट्टा लोकप्रिय क्यासिनो खेलको अर्को शब्द हो। यो खेल पहिलो पटक नेपालमा
                    परिचित भयो र पछि भारतमा फैलियो। यो भारतको उत्तरी क्षेत्रमा सबैभन्दा लोकप्रिय छ।
                    इन्टरनेट र आधुनिक प्रविधिको आगमनसँगै यो खेल अब विश्वभर परिचित भएको छ। डिपबोस
                    एउटा सट्टा मटका परिणाम साइट हो जसले तपाईंलाई मटका खेल जित्न मद्दत गर्न सुझावहरू
                    र चालहरू प्रदान गर्दछ। हाम्रो विशेष डिपबोस मटका सुझावहरूको साथ, तपाईंले ठूलो
                    मात्रामा ज्याकपट जित्ने सम्भावना बढाउन सक्नुहुन्छ।
                </p>
                <p>
                    धेरै मटका वेबसाइटहरू छन् जसमा खेलाडीहरूले सट्टा खेल्न सक्छन्, लटरी खेल। लटरीको
                    नतिजा पत्ता लगाउनका लागि खेलाडीहरूले सट्टा मटका को आधिकारिक वेबसाइटमा जानु पर्छ।
                    डिपबोस मटका वेबसाइटले उनीहरूले चयन गरेको सट्टा मटका खेलको बारेमा सबै जानकारी
                    प्रदान गर्दछ।
                </p>
            </div>
            <BottomNavbar />
        </HelmetProvider>
    );
};
