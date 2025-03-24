import { useEffect, useState } from "react";
// import List from "../../public/list.json"
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from 'axios'
const Course = () => {
    // console.log(List);
    const [book,setBook]=useState([]);
    useEffect(()=>{
        const getBook =async()=>{
            try {
                const res=await axios.get('http://localhost:4001/book')
                console.log("it's me")
                console.log(res.data);
                setBook(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    },[])
    return (
        <>
            <div className="max-w-screen container mx-auto  md:px-20 px-4text-balance">
                <div className="items-center justify-between text-center py-30">
                    <h1 className=" text-4xl ">We are delighted to have you <span className="text-pink-500 text-4xl">Here! :)</span></h1>
                    <p className="mt-6">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis amet officiis quae corporis sequi ab, voluptas odio ea voluptatem asperiores perspiciatis adipisci, animi, officia enim earum ipsam? Adipisci ex, cumque, repudiandae distinctio iusto, quia saepe maiores nobis in exercitationem ipsum?
                    </p>
                    <Link to="/">
                        <button className="py-2 px-4 rounded-lg bg-pink-500 text-white mt-6 font-semibold hover:bg-pink-700 duration-200 transition-all cursor-pointer">
                            Back
                        </button>
                    </Link>
                </div>

                <div className="courses-cards grid grid-cols-1 md:grid-cols-4 justify-center ">
                    {book.map((item => (
                        <Cards key={item.id} item={item} />
                    )))}
                </div>
            </div>
        </>
    )
}
export default Course