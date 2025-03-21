import banner from '/banner.png'
import FreeBook from './FreeBook'
import { ThemeContext } from "./ThemeContext";
import { useContext} from "react";
const Banner = () => {
    const { theme} = useContext(ThemeContext);
    return (
        <>
            <div className={`max-w-screen container mx-auto  md:px-20 px-4 bg-white text-black flex  flex-col-reverse md:flex-row  mt-4   justify-between items-center  ${theme === "dark" ? "dark:bg-gray-900 dark:text-white" : "bg-white text-black"} `}>
                <div className=" w-full md:w-1/2 md:mt-30">
                    <div className="space-y-12">
                        <h1 className="text-4xl font-bold"> Hello,welcome here to learn something <span className="text-pink-500"> new everyday !!</span></h1>
                        <p className="text-xl bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde, commodi vero exercitationem inventore dolor repellendus? Nam, repudiandae deserunt? Totam vel iusto perspiciatis.</p>

                        
                        <label className="input validator bg-white border-1 border-black w-full">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                            <input type="email" placeholder="mail@site.com" required />
                        </label>
                        <div className="validator-hint hidden ">Enter valid email address</div>
                        
                    </div>

                    <button className="bg-pink-500 px-4 py-2 rounded-xl text-white md:mb-10">Secondary</button>



                </div>
                <div className="w-full md:w-1/2 flex justify-center p-4 ">
                    <img src={banner} alt="" className='w-95' />

                    </div>

                <hr className='py-3'/>
            </div>
            {/* <FreeBook/> */}
        </>
    )
}
export default Banner