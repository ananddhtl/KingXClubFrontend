import { useState } from "react";
import { ROLE, routes } from "@/constants";
import { useNavigate } from "react-router-dom";
import { makeAgentFormAPI } from "@/api/api";
import toast from "react-hot-toast";
import { cn } from "@/utils/cn";
import { useProfileContext } from "@/App";
import { BiSolidLeftArrowAlt } from "react-icons/bi";

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

export const MakeAgent = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        country: "",
        address: "",
        phone: "",
        role: "agent",
        iddentity: null,
    });

    // State to track agreement to terms
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const { user } = useProfileContext();

    // Function to handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle file input change
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        console.log(file);

        if (file) {
            setFormData({ ...formData, iddentity: await convertToBase64(file) });
        } else {
            alert("Please upload a image file.");
        }
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if all fields are filled and terms are agreed upon
        if (
            formData.role &&
            formData.phone
        ) {
            try {
                // If all conditions are met, log form values
                console.log(formData);
                const res = await makeAgentFormAPI(formData);
                toast.success(res.data?.message || "Application submitted");
                navigate(routes.PROFILE);
            } catch {
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
                    className="p-3 bg-gray-100 rounded-full shadow-sm"
                >
                <BiSolidLeftArrowAlt className="w-full text-black"/>
                    {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
                </button>

                <p className="text-2xl font-semibold tracking-wider">Agent Credentials</p>

            <div />
            </div>

            <div className="max-w-sm mx-auto p-4  min-h-screen my-8 text-white">
                <form
                    className="space-y-4 mt-4"
                    // encType="multipart/form-data"
                    onSubmit={handleSubmit}
                >
                    <div className="flex justify-center mt-6 border-1 border-red-800 rounded-full">
                        <input
                            onChange={handleInputChange}
                            className="btn-check"
                            type="radio"
                            name="role"
                            id="role-agent"
                            value="agent"
                            autoComplete="off"
                            checked
                        />
                        <label
                            className={cn(
                                "btn py-2 text-lg px-8 text-white rounded-full",
                                formData.role === "agent" && "!bg-orange-500"
                            )}
                            htmlFor="role-agent"
                        >
                            Agent
                        </label>
                        {user.role === ROLE.MASTER && (
                            <>
                                <input
                                    onChange={handleInputChange}
                                    className="btn-check"
                                    type="radio"
                                    name="role"
                                    id="role-admin"
                                    value="admin"
                                    autoComplete="off"
                                    required
                                />
                                <label
                                    className={cn(
                                        "btn py-2 text-lg px-8 text-white rounded-full",
                                        formData.role === "admin" && "!bg-orange-500"
                                    )}
                                    htmlFor="role-admin"
                                >
                                    Admin
                                </label>
                            </>
                        )}
                    </div>
                    <div className="text-center p-2 border-2 border-dashed border-orange-500 rounded-lg">
                        <label
                            htmlFor="fileInput"
                            className="cursor-pointer font-bold text-orange-500"
                        >
                            {formData.iddentity ? "Uploaded" : "+ Add Document (Image Only)"}
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            className="hidden"
                            onChange={handleFileChange}
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
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="agentNumber"
                            className="block text-md my-1 font-mono tracking-widr"
                        >
                            Agent Number
                        </label>
                        <div className="flex items-center bg-white text-black rounded-xl mb-4">
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="bg-transparent flex-1 p-3 rounded-full text-black leading-tight focus:outline-none"
                                placeholder="Enter agent's number"
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
                        disabled={!formData.phone || !formData.role}
                        className={`w-full bg-orange-600 hover:bg-orange-700 justify-center flex items-center text-white font-bold py-2 px-4 rounded-md ${
                            (!formData.phone || !formData.role) && "opacity-50 cursor-not-allowed"
                        }`}
                    >
                        <p className="text-center font-semibold tracking-wider">Submit</p>
                    </button>
                </form>
            </div>
        </div>
    );
};
