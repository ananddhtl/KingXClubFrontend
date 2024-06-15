import { QRCode } from 'react-qrcode-logo';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const ReferralCode = () => {
  const handleFacebookShare = () => {
    const shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=https://www.matkakingdubai.com/signup';
    window.open(shareUrl, '_blank');
  };

  const handleWhatsAppShare = () => {
    const shareUrl ='https://api.whatsapp.com/send?text=https://www.matkakingdubai.com/';
    window.open(shareUrl, '_blank');
  };

  return (
    <div className='bg-black/80 w-full h-screen flex flex-col items-center justify-center'>
      <h1 className='text-center my-5 text-white font-semibold font-mono text-lg'>Scan the QR to get Referral Code </h1>
      <QRCode
        value="www.matkakingdubai.com/signup/:referalCode"
        bgColor="transparent"
        fgColor="white"
        size={256}
        logoImage="https://www.matkakingdubai.com/assets/img/loader.png"
        logoWidth={100}
        logoHeight={100}
        eyeRadius={[10, 10, 10, 10]}
        eyeColor={['orange', 'orange', 'orange']}
        qrStyle="dots"
      />

      <div className='w-full flex flex-col items-center justify-center my-3 '>
        <div className='flex  w-72 justify-center text-center flex-col tracking-wider   my-5 text-white font-semibold font-mono text-sm '>Share app among your friends  </div>
        <a href="https://www.matkakingdubai.com">
  <img className='h-32 w-24' src='https://www.matkakingdubai.com/assets/logo-J2F2y6wy.png'/>
</a>      </div>
      <div className='flex  w-72 justify-center gap-5 my-5'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold flex justify-center items-center h-8 w-8 p-2 rounded-full '
          onClick={handleFacebookShare}
        >
          <FaFacebookF className='text-xl' />
          
        </button>
        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold  flex justify-center items-center h-8 w-8 p-2 rounded-full '
          onClick={handleWhatsAppShare}
        >
          <FaWhatsapp className='text-xl' />
          
        </button>

        
      </div>
    </div>
  );
};

export default ReferralCode;