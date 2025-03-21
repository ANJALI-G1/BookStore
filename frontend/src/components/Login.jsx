import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate(); 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle login logic here (e.g., API call)
        navigate("/");  // Navigate to home page after successful login
    };

    return (
        <div>
            {/* Dialog/modal */}
            <dialog id="my_modal_3" className="modal w-screen h-screen bg-gradient-to-t from-black to-transparent opacity-40">
                <div className={`modal-box ${theme === "dark" ? "dark:bg-gray-800 dark:text-white" : "bg-white text-black"}`}>
                    <form action="" method="dialog">
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => navigate("/")}  // Navigate on closing the modal
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
                            <button type="submit" className="p-2 bg-pink-500 text-white rounded-md mt-4 px-4" onClick={onSubmit}>
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
        </div>
    );
};

export default Login;
