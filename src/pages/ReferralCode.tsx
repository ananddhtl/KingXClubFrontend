import { QRCode } from "react-qrcode-logo";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { useProfileContext } from "@/App";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";
import { useEffect } from "react";
import { MdContentCopy } from "react-icons/md";
import toast from "react-hot-toast";

const ReferralCode = () => {
  const {user} = useProfileContext();
  console.log("ok", user, parseInt(user?.phone || 0, 36));
  const navigate = useNavigate();
    const handleFacebookShare = () => {
        const shareUrl =
            `https://www.facebook.com/sharer/sharer.php?u=https://www.kingxclub.com/#/signup/${parseInt(user?.phone || 0, 36)}`;
        window.open(shareUrl, "_blank");
    };

    const handleWhatsAppShare = () => {
        const shareUrl = `https://api.whatsapp.com/send?text=https://www.kingxclub.com/#/signup/${parseInt(user?.phone || 0, 36)}`;
        window.open(shareUrl, "_blank");
    };

useEffect(() => {
  if (!user) navigate(routes.LOGIN);
}, [navigate, user]);

    return (
    <section className="flex flex-col items-center justify-start text-white gap-10 min-h-screen p-4">

      <div className="sticky top-5 flex justify-between items-center w-full">
                <button
                    onClick={() => navigate(routes.PROFILE)}
                >
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
                <span className="text-2xl font-sans font-semibold  oleo-script">Refer & Earn</span>
                <div />
            </div>
        <div className=" w-full h-screen flex flex-col items-center justify-center">
            <h1 className="text-center my-5 text-white font-semibold font-mono text-lg">
                Scan the QR to get Referral Code{" "}
            </h1>
            <div
                      onClick={() => {
                        window.navigator.clipboard.writeText(parseInt(user?.phone || 0, 36).toString());
                        toast.success("refer code coppied")
                      }}
                      className="flex m-2 gap-3 items-center "
                    >
                      <span className="styled-text !text-lg">{parseInt(user?.phone || 0, 36).toString()}</span>
                      <MdContentCopy/>
                    </div>
            <QRCode
                value={`https://www.kingxclub.com/#/signup/${parseInt(user?.phone || 0, 36)}`}
                bgColor="white"
                fgColor="black"
                size={256}
                logoImage="assets/img/loader.png"
                logoWidth={100}
                logoHeight={75}
                eyeRadius={[10, 10, 10, 10]}
                eyeColor={["orange", "orange", "orange"]}
                qrStyle="dots"
            />


            <div className="w-full flex flex-col items-center justify-center my-3 ">
                <div className="flex  w-72 justify-center text-center flex-col tracking-wider   my-5 text-white font-semibold font-mono text-sm ">
                    Share app among your friends{" "}
                </div>
                {/* <a href="https://www.kingxclub.com"> */}
                    <img
                        className="h-32 w-24"
                        src="assets/img/logo.png"
                    />
                {/* </a>{" "} */}
            </div>
            <div className="flex  w-72 justify-center gap-5 my-5">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold flex justify-center items-center h-8 w-8 p-2 rounded-full "
                    onClick={handleFacebookShare}
                >
                    <FaFacebookF className="text-xl" />
                </button>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold  flex justify-center items-center h-8 w-8 p-2 rounded-full "
                    onClick={handleWhatsAppShare}
                >
                    <FaWhatsapp className="text-xl" />
                </button>
            </div>
        </div>
        </section>
    );
};

export default ReferralCode;
