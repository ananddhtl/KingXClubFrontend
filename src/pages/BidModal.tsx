import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BidModal = ({ isOpen, onClose }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [prices, setPrices] = useState({});
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleSelectType = (type) => {
    setSelectedType(type);
  };

  const handleNumberSelect = (num) => {
    setSelectedNumber(num);
  };

  const handlePriceChange = (num, value) => {
    setPrices({ ...prices, [num]: value });
  };

  const handlePlaceBid = () => {
    if (selectedNumber !== null && prices[selectedNumber] !== '') {
      console.log(`Selected Number: ${selectedNumber}, Price: ${prices[selectedNumber]}`);
      // Clear the input field for the selected number
      setPrices({ ...prices, [selectedNumber]: '' });
      // Reset selected number and type
      setSelectedNumber(null);
      setSelectedType(null);
      // Show success toast
      toast.success('Bid placed successfully!');
    } else {
      // Show error toast if number or price is not selected
      toast.error('Please select a number and enter a price');
    }
  };
  const getButtonClass = (type) => {
    return selectedType === type ? 'btn btn-selected' : 'white';
  };

  const renderNumbers = () => {
    if (selectedType === 'single') {
      return Array.from({ length: 10 }, (_, i) => i).map((num) => (
        <div key={num} className="flex items-center justify-around">
        <button
          className={`btn ${selectedNumber === num ? 'bg-gray-800' : ''}`}
          onClick={() => handleNumberSelect(num)}
          disabled={selectedNumber !== null && selectedNumber !== num}
        >
          <p className='text-white'>{num}</p>
        </button>
        <input
          type="number"
          value={prices[num] || ''}
          onChange={(e) => handlePriceChange(num, e.target.value)}
          placeholder="Enter Price"
          className="ml-2 p-1 border w-28 border-gray-300 rounded-3xl"
          disabled={selectedNumber !== num}
        />
      </div>
      ));
    } else if (selectedType === 'double') {
      return Array.from({ length: 90 }, (_, i) => i + 10).map((num) => (
        <div key={num} className="flex items-center justify-around">
        <button
          className={`btn ${selectedNumber === num ? 'bg-gray-800' : ''}`}
          onClick={() => handleNumberSelect(num)}
          disabled={selectedNumber !== null && selectedNumber !== num}
        >
          <p className='text-white'>{num}</p>
        </button>
        <input
          type="number"
          value={prices[num] || ''}
          onChange={(e) => handlePriceChange(num, e.target.value)}
          placeholder="Enter Price"
          className="ml-2 p-1 border w-28 border-gray-300 rounded-3xl"
          disabled={selectedNumber !== num}
        />
      </div>
      ));
    } else if (selectedType === 'triple') {
      return Array.from({ length: 900 }, (_, i) => i + 100).map((num) => (
        <div key={num} className="flex items-center justify-around">
        <button
          className={`btn ${selectedNumber === num ? 'bg-gray-800' : ''}`}
          onClick={() => handleNumberSelect(num)}
          disabled={selectedNumber !== null && selectedNumber !== num}
        >
          <p className='text-white'>{num}</p>
        </button>
        <input
          type="number"
          value={prices[num] || ''}
          onChange={(e) => handlePriceChange(num, e.target.value)}
          placeholder="Enter Price"
          className="ml-2 p-1 border w-28 border-gray-300 rounded-3xl"
          disabled={selectedNumber !== num}
        />
      </div>
      ));
    } else {
      return <p className='text-center my-4 font-semibold'>Choose your Lucky Number</p>;
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
            <div className="relative bg-gradient-to-b from-[#FB450C] to-[#9B2500] rounded-lg p-8 w-full max-w-lg mx-auto">
              <button
                onClick={onClose}
                className="absolute top-0 right-0 mt-4 mr-4 text-gray-700 hover:text-gray-900"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex justify-center items-center  w-[260px] bg-[#F1693E] rounded-3xl my-6">
                <button style={selectedType === 'single' ? { backgroundColor: 'white', borderRadius:'20px', width:'full', paddingInline:'20px' } : {paddingInline:'20px'}} className={getButtonClass('single')} onClick={() => handleSelectType('single')}>
                  Single
                </button>
                <button style={selectedType === 'double' ? { backgroundColor: 'white', borderRadius:'20px', paddingInline:'20px' } : {paddingInline:'20px'}} className={getButtonClass('double')} onClick={() => handleSelectType('double')}>
                  Double
                </button>
                <button style={selectedType === 'triple' ? { backgroundColor: 'white', borderRadius:'20px', paddingInline:'20px' } : {paddingInline:'20px'}} className={getButtonClass('triple')} onClick={() => handleSelectType('triple')}>
                  Triple
                </button>
              </div>
              <div className='main'>
                <div className="flex flex-col gap-2 overflow-y-auto w-full max-h-72">
                  {renderNumbers()}
                </div>
              </div>
             <div className='w-full flex justify-between'>
             <button onClick={onClose} className="btn mt-4 bg-[#FE480F] text-white px-4 py-2 rounded-3xl">
                Cancel
              </button>
              <button onClick={handlePlaceBid} className="btn mt-4 bg-[#FE480F] text-white px-4 py-2 rounded-3xl">
                Place a Bid
              </button>
             </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BidModal;
