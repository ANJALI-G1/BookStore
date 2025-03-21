import { Route, Routes } from 'react-router-dom'

import Home from "./Home/Home"
import Courses from './courses/Courses'
import Signup from './components/Signup'


const App = () => {
  return (
    
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}></Route>
     </Routes>
      
   
  )
}
export default App