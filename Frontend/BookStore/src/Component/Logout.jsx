import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast'
const Logout = () => {
    const [authUser, setAuthUser] = useAuth()
   const handleLogout=()=>{
    try{
        setAuthUser ({
            ...authUser,
            user:null
        })
        localStorage.removeItem("Users");
        toast.success('Logout Sucessfully');
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
             
            window.location.reload();
          },2000);
        
        
    }
    catch(err){
        toast.error('Error:Logout failed');
        setTimeout(() =>{},3000);
    }
}
  return (
    <div>
      <button className="px-3 py-2 bg-red-500 text-white  hover:bg-red-600 rounded-md cursor-pointer" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout
