import { useState } from "react";
import { routes } from "@/constants";
import { useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { agentFormAPI } from "@/api/api";
import toast from "react-hot-toast";

 const convertToBase64 = (file: File | null) => {
    if (!file) return null;
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };

  
const Agentform = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        country: "",
        address: "",
        iddentity: null,
    });

    // State to track agreement to terms
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    

    // Function to handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle file input change
    const handleFileChange = async(e) => {
        const file = e.target.files[0];
        console.log(file);
        
        if (file) {
            setFormData({ ...formData, iddentity: await convertToBase64(file) });
        } else {
            alert("Please upload a image file.");
        }
    };

    // Function to handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        // Check if all fields are filled and terms are agreed upon
        if (
            formData.name &&
            formData.country &&
            formData.address &&
            formData.iddentity &&
            agreedToTerms
        ) {
            try{

                // If all conditions are met, log form values
                console.log(formData);
                const res = await agentFormAPI(formData)
                toast.success(res.data?.message || "Application submitted")
                navigate(routes.PROFILE)
            } catch{
            toast.error("FIle size too large use small file size");
            }
        } else {
            toast.error("Please fill in all fields.");
        }
    };

    return (
        <div className="sticky top-1 flex flex-col justify-between items-center w-full">
            <div className="w-full flex justify-between items-center p-3">
                <button
                    onClick={() => navigate(routes.PROFILE)}
                    className="p-4 w-12 bg-[#240700] text-white rounded-xl shadow-sm"
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
                            stroke="white"
                            strokeWidth="1.3125"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                <p className="text-md font-semibold tracking-wider">Agent Credentials</p>

                <div className="bg-[#240700] p-4 rounded-xl">
                    <FaBell />
                </div>
            </div>

            <div className="max-w-sm mx-auto p-4  min-h-screen my-8 text-white">
                <form
                    className="space-y-4 mt-4"
                    // encType="multipart/form-data"
                    onSubmit={handleSubmit}
                >
                    <div className="text-center p-2 border-2 border-dashed border-orange-500 rounded-lg">
                        <label
                            htmlFor="fileInput"
                            className="cursor-pointer font-bold text-orange-500"
                        >
                            {formData.iddentity
                                ? 'Uploaded'
                                : "+ Add Document (Image Only)"}
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            className="hidden"
                            onChange={handleFileChange}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="agentName"
                            className="block text-md my-1 font-mono tracking-widr"
                        >
                            Agent Name
                        </label>
                        <div className="flex items-center bg-white text-black rounded-xl mb-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="bg-transparent flex-1 p-3 rounded-full text-black leading-tight focus:outline-none"
                                placeholder="Enter agent's name"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="country"
                            className="block text-md my-1 font-mono tracking-widr"
                        >
                            Country
                        </label>
                        <div className="flex items-center bg-white text-black rounded-xl mb-4">
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                className="bg-transparent flex-1 p-3 rounded-full text-black leading-tight focus:outline-none"
                                placeholder="Enter country"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="address"
                            className="block text-md my-1 font-mono tracking-widr"
                        >
                            Address
                        </label>
                        <div className="flex items-center bg-white text-black rounded-xl mb-4">
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="bg-transparent flex-1 p-3 rounded-full text-black leading-tight focus:outline-none"
                                placeholder="Enter address"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                className="focus:ring-red-500 h-4 w-4 text-red-600 border-zinc-300 rounded"
                                onChange={() => setAgreedToTerms(!agreedToTerms)}
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-medium text-orange-600">
                                I agree to the terms and conditions
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!agreedToTerms}
                        className={`w-full bg-orange-600 hover:bg-orange-700 justify-center flex items-center text-white font-bold py-2 px-4 rounded-md ${
                            !agreedToTerms && "opacity-50 cursor-not-allowed"
                        }`}
                    >
                        <p className="text-center font-semibold tracking-wider">Submit</p>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Agentform;
