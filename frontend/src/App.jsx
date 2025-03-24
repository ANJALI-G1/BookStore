import { Navigate, Route, Routes } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import Home from "./Home/Home"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import { useAuth } from './context/AuthProvider';
import Contact from './components/Contact';
import About from './components/About';


const App = () => {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser)
  
  return (
    
     <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={authUser?<Courses/>:<Navigate to='/signup'/>}/>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<About/>}></Route>
     </Routes>
     <Toaster/>
     </>
    
      
   
  )
}
export default App