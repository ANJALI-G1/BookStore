import Footer from "../components/Footer"
import FreeBook from "../components/FreeBook"
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Banner/>
      <FreeBook/>
      <Footer/>
      
    </div>
  )
}
export default Home