import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        navigate("/");  // Navigate when modal closes
    };

    const onSubmit = async (data) => {
        console.log(data);
        const userInfo = {
            email: data.email,
            password: data.password
        };

        await axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Login successful");
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                    closeModal();
                    toast.success("Login successfully done!");
                    window.location.reload();
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    closeModal();
                    toast.error("Error: " + err.response.data.message);
                }
            });
    };

    return (
        <div>
            {/* Home Link to Open Modal */}
            <Link to="#" onClick={openModal} className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 duration-300 cursor-pointer font-semibold">
                Login
            </Link>

            {/* Modal */}
            {modalOpen && (
                <dialog open className="modal w-screen h-screen bg-gradient-to-t from-black to-transparent opacity-40">
                    <div className={`modal-box ${theme === "dark" ? "dark:bg-gray-800 dark:text-white" : "bg-white text-black"}`}>
                        <form method="dialog">
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={closeModal}
                            >
                                ✕
                            </button>
                        </form>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="font-bold text-lg">Login</h3>

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
                                    className="mt-2 w-full px-2 rounded-md py-1 bg-white text-black border border-gray-300"
                                    {...register("password", { required: "Password is required" })}
                                />
                                {errors.password && <p className="text-red-500 p-2">{errors.password.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-between items-center mt-2">
                                <button type="submit" className="p-2 bg-pink-500 text-white rounded-md mt-4 px-4" >
                                    <Link to="#" onClick={openModal}></Link>
                                    Login
                                </button>
                                <p>
                                    Not Registered?{" "}
                                    <span className="cursor-pointer text-blue-500 underline">
                                        <Link to="/signup">SignUp</Link>
                                    </span>
                                </p>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default Login;
