
const Loader = () => {
  return (
    <div className="fixed flex-col  top-0 left-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-60 z-50">
        <div className='my-3'>
        <p className='text-orange-700 font-bold font-mono tracking-wider text-3xl'>KING'S</p>
        </div>
      <div className="relative">
        {/* Rotating border */}
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-orange-700"></div>
        {/* Image */}
        <img src="./assets/img/loader.png" alt="loader" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-auto" />
      </div>

      <div className='my-8'>
        <p className='text-center text-md tracking-wider p-2 text-orange-700'>Enter King's 777! Prepare for epic conquests and endless thrills!</p>
        </div>
    </div>
  );
};

export default Loader;
