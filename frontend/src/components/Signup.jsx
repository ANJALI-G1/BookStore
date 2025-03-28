import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login"; // Import the Login component
import axios from 'axios'
import toast from "react-hot-toast";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Signup = () => {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const [showLoginModal, setShowLoginModal] = useState(false); // State to manage modal visibility

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const userInfo = {
                fullname: data.fullname,
                email: data.email,
                password: data.password
            };
    
            const response = await axios.post("http://localhost:4001/user/signup", userInfo);
    
            console.log("Full Response from Server:", response); // Debugging step
    
            // If the status is 201, show success message
            if (response?.status === 201) {
                toast.success("Signup Successful",{duration:3000});
                const newData=await response.data.user;
                localStorage.setItem("user", JSON.stringify(newData)); // Store user data
            } else {
                alert(`Unexpected response from server: ${response.status}`);
            }
            navigate('/')
        } catch (error) {
            if (error.response) {
                console.error("Error Response from Backend:", error.response);
                toast.error(`Error: ${error.response.data.message || "Unknown error"}`);
            } else {
                console.error("Unexpected Error:", error);
                alert("An unexpected error occurred");
            }
            const modal = document.getElementById("my_modal_3");
                    if (modal) {
                        modal.close();
                    }
            navigate('/')
        }
    };
    

    const openLoginModal = () => setShowLoginModal(true);
    const closeLoginModal = () => setShowLoginModal(false);

    return (
        <>
       <Navbar/>
        <div className={`flex justify-center items-center h-screen bg-white text-black ${theme === "dark" ? "dark:bg-gray-800 dark:text-white" : "bg-white text-black"}`}>
            <div className="rounded-lg p-4 w-90 py-6 bg-white text-black shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-lg flex justify-between items-center">
                        <span>SignUp</span>
                        <button
                            type="button"
                            className="font-light text-gray-600 hover:font-semibold transition-all duration-150 rounded-full w-8 h-8 hover:bg-black hover:text-white"
                            onClick={() => navigate('/')}
                        >
                            x
                        </button>
                    </h3>

                    {/* Name Input */}
                    <div className="mt-4">
                        <span>Name</span>
                        <br />
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            className="mt-2 w-full px-2 rounded-md py-1 bg-white text-black border border-gray-300"
                            {...register("fullname", { required: "Name is required" })}
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mt-4">
                        <span>Email</span>
                        <br />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="mt-2 w-full px-2 rounded-md py-1 bg-white text-black border border-gray-300"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="text-red-500 p-2">{errors.email.message}</p>}
                    </div>

                    {/* Password Input */}
                    <div className="mt-4">
                        <span>Password</span>
                        <br />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="mt-2 w-full px-2 rounded-md py-1 bg-white text-black z-10 border border-gray-300"
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && <p className="text-red-500 p-2">{errors.password.message}</p>}
                    </div>

                    <div className="flex justify-between items-center mt-2">
                        <button type="submit" className="p-2 bg-pink-500 text-white rounded-md mt-4 px-4">Signup</button>
                        <p>
                            Registered?{" "}
                            <span className="cursor-pointer text-blue-500 underline">
                                <button type="button" onClick={openLoginModal}>Login</button>
                            </span>
                        </p>
                    </div>
                </form>
            </div>

            {/* Login Modal */}
            {showLoginModal && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={closeLoginModal}
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-lg">Login</h3>
                        <Login />
                    </div>
                </div>
            )}
        </div>
        <Footer/>
        </>
    );
};

export default Signup;
