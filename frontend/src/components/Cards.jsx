import { ThemeContext } from "./ThemeContext";
import { useContext} from "react";
const Cards = ({item}) => {
    console.log(item);
    const { theme} = useContext(ThemeContext);
     // Ensure theme is applied correctly on mount
    //  useEffect(() => {
    //     const savedTheme = localStorage.getItem("theme") || "light";
    //     setTheme(savedTheme);
    // }, [setTheme]);
    return (
        <>
            <div className="mt-4 p-3 flex justify-center items-center">

                <div className={`card bg-white text-black w-100 md:w-92 shadow-sm hover:scale-110 duration-300 py-2 transition-all ${theme === "dark" ? "dark:bg-gray-800 dark:text-white" : "bg-white text-black"} `} >
                    <figure className="py-4 px-4">
                        <img
                            src={item.image}
                            alt="Shoes" className="w-80 h-80" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p className="font-medium ">{item.title}</p>
                        <div className="card-actions justify-between mt-2  font-medium">
                            <div className=" outline outline-gray-300 rounded-2xl px-3 py-1 cursor-pointer">Price : ${item.price}</div>
                            <div className=" outline outline-gray-300 rounded-2xl px-3 py-1 hover:bg-pink-500 duration-200 hover:text-white cursor-pointer">Buy-Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cards