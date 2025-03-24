import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="bg-white min-h-screen p-20">
                <div className="max-w-lg mx-auto p-8 md:p-10 bg-white shadow-md shadow-gray-400 rounded-lg mt-10">
                    <h2 className="text-2xl font-bold text-center mb-6 text-black">Contact Us</h2>

                    {/* Form */}
                    <form className="space-y-4 text-black">
                        {/* Name Input */}
                        <div>
                            <label className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Message Input */}
                        <div>
                            <label className="block text-sm font-medium">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write your message here"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 transition duration-300 focus:ring-2 focus:ring-pink-300 focus:outline-none"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-4 mt-6 text-pink-500">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} className="hover:text-pink-700 transition" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} className="hover:text-blue-500 transition" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} className="hover:text-blue-700 transition" />
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
