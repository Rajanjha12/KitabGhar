import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
 import {Navigate,Route,Routes} from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './Component/Signup'
import Contacts from './Contact/Contacts'
import { useAuth } from './Context/AuthProvider'
import  { Toaster } from 'react-hot-toast';
import About from './Component/About'
function App() {
  const [count, setCount] = useState(0)
  const [authUser, setAuthUser] = useAuth();
   console.log(authUser);
  return (
    <>
    <div className= "">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />

        <Route path="/signup" element={<Signup />}
         />
          <Route path="/contact" element={<Contacts />}
         />
          <Route path="/About" element={<About />}
         />

       </Routes>
       <Toaster />
    </div>
        
    </>
  )
}

export default App
