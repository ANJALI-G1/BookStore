import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Login from "./Login";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";
const Navbar = () => {

    const [authUser,setAuthUser]=useAuth();
    const [sticky, setSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // For mobile menu
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
    }, [setTheme]);

    useEffect(() => {
        const element = document.documentElement;
        if (theme === "dark") {
            element.classList.add("dark");
            document.body.classList.add("dark");
        } else {
            element.classList.remove("dark");
            document.body.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = (
        <>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Course</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
        </>
    );

    return (
        <div className={`max-w-screen container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-20 
            ${sticky ? "shadow-md bg-pink-500 transition-all duration-300" : "bg-black"} 
            ${theme === "dark" ? "dark:bg-gray-900 dark:text-white" : "bg-white text-black"}`}>
            
            <div className="navbar shadow-sm flex items-center justify-between py-3">
                <div className="navbar-start flex items-center">
                    <button onClick={toggleMenu} className="md:hidden block text-2xl focus:outline-none mr-3">
                        ☰
                    </button>
                    <a className="btn btn-ghost text-2xl font-bold cursor-pointer bg-black text-white">
                    Coral Chapters
                    </a>
                </div>
                
                <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1 space-x-4 ">
        {navItems}
        <li>
            <label className="input  bg-white text-black border-gray-100 flex items-center px-2 rounded-lg">
                <svg className="h-5 w-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" className="grow px-2 py-1 outline-none bg-transparent max-w-full" placeholder="Search" />
            </label>
        </li>
    </ul>
</div>

                <div className="navbar-end flex items-center space-x-3">
                    <button onClick={toggleTheme} className="swap swap-rotate">
                        {theme === "light" ? (
                            <svg className="h-8 w-8 fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41Z" />
                            </svg>
                        ) : (
                            <svg className="h-8 w-8 fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
                            </svg>
                        )}
                    </button>
                    {
                        authUser?<Logout/>:
                    <div>
                    <a 
                    onClick={()=>document.getElementById("my_modal_3").showModal()} className="py-2">
                        <Login/>
                        
                        {/* Login */}
                    </a>
                    {/* <Login/> */}
                    
                    </div>
}
                    
                </div>
            </div>

            <div className={`md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 text-black dark:text-white 
                flex flex-col items-center transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
                <ul className="space-y-3 py-4">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
