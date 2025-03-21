import List from "/public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { ThemeContext } from "./ThemeContext";
import { useContext} from "react";

const FreeBook = () => {
    const { theme} = useContext(ThemeContext);
    const freeData = List.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className={`max-w-screen container mx-auto md:px-20 px-4 bg-white text-black  ${theme === "dark" ? "dark:bg-gray-900 dark:text-white" : "bg-white text-black"} `}>
                <div className="">
                    <h1 className="font-bold">Free Offered Courses</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quos impedit rem? Architecto, alias at. In quasi ab reprehenderit tenetur fugiat eligendi repellendus, nostrum sed distinctio aliquam. Magnam, quaerat officia!</p>
                </div>

                <div className="text-black font-black mt-8">
                    <div className="slider-container">
                        <Slider {...settings} className="space-2">
                            {/* Fix here: Return Cards component from map */}
                            {freeData.map((item) => (
                                <Cards item={item} key={item.id} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FreeBook;
