import Course from "../components/Course"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { ThemeContext } from "../components/ThemeContext"
import { useContext } from "react"
const Courses = () => {
  const { theme} = useContext(ThemeContext);
  return (
    <>
    <div className={`bg-white text-black min-h-screen ${theme === "dark" ? "dark:bg-gray-900 dark:text-white" : "bg-white text-black"} `}>
    <Navbar/>
    <div className="min-h-screen">
    <Course className=""/>
    </div>
    
    <Footer/>

    </div>
    
    </>
  )
}
export default Courses