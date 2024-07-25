import { QRCode } from "react-qrcode-logo";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { useProfileContext } from "@/App";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";
import { useEffect } from "react";
import { MdContentCopy, MdShare } from "react-icons/md";
import toast from "react-hot-toast";
import { BiSolidLeftArrowAlt } from "react-icons/bi";

const ReferralCode = () => {
  const {user} = useProfileContext();
  console.log("ok", user, parseInt(user?.phone || 0, 36));
  const navigate = useNavigate();
  const referUrl = `https://www.kingxclub.com/#/signup/${parseInt(user?.phone || 0, 36)}`
    const handleFacebookShare = () => {
        const shareUrl =
            `https://www.facebook.com/sharer/sharer.php?u=${referUrl}}`;
        window.open(shareUrl, "_blank");
    };

    const handleWhatsAppShare = () => {
        const shareUrl = `https://api.whatsapp.com/send?text=${referUrl}}`;
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
                    className="p-3 bg-gray-100 rounded-full shadow-sm"
                >
                <BiSolidLeftArrowAlt className="w-full text-black"/>
                    {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
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
                      <MdShare onClick={() => window.open(referUrl, "_blank")} />
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
