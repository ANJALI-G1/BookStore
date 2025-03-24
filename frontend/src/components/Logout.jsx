import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    const navigate = useNavigate(); 

    const handleLogOut = () => {
        try {
            setAuthUser(null);
            localStorage.removeItem("Users");
            localStorage.removeItem("token");

            const modal = document.getElementById("my_modal_3");
            if (modal) {
                modal.close();
            }

            toast.success("Logged out successfully!");

            //Redirect user instead of reloading the page
            navigate("/");
        } catch (error) {
            toast.error("Error: " + error.message);
        }
    };

    return (
        <div>
            <button 
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 duration-300 cursor-pointer" 
                onClick={handleLogOut}
            >
                LogOut
            </button>
        </div>
    );
};

export default Logout;
