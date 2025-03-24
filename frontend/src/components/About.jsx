import Navbar from "./Navbar";
import Footer from "./Footer";
import aboutImage from "../assets/About.png";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white mt-10">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to our platform, where we provide a collection of valuable books 
            and resources. Our mission is to make learning accessible for everyone.
          </p>
          <button className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
            Learn More
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
