import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const[otp, setOtp] = useState("");
  const navigate = useNavigate();

  const respond = async (event) => {
    event.preventDefault();
    console.log(otp);

    const URL = "http://localhost:8080/api/v1/ecommerce/verify-otp";
    const body ={
      email:sessionStorage.getItem("email"),
      otp:otp
    }
    const header = {
      headers:{
        "Content-Type":"application/json",
      },
      
    }
    try {
      const response = await axios.post(URL,body,header);
      console.log(response);
      sessionStorage.removeItem("email");
      console.log(sessionStorage.getItem("password"))
     if (response.status === 201){
      alert("Verified OTP SuccessFully..!!")
      navigate("/login");
     } 
    } catch (error) {
      console.log(error)
    }
   
  }
  return (
    <div className="login-container h-screen flex justify-center bg-zinc-200">
      {/* <div className="bg-blue-400 flex justify-center items-center flex-col mt-14 h-3/5  w-[500px] rounded-md shadow-md">
        Picture
      </div> */}
      <div className='flex justify-center items-center flex-col bg-slate-100 mt-14 mr-20 h-4/5  w-[500px] rounded-md shadow-md '>
      <h1 className='absolute font-sans uppercase font-bold  text-3xl mb-[400px]
        subpixel-antialiase text-sky-600'>Verify-Otp</h1>
          <label htmlFor="otp" className='text-3xl mb-3'>OTP</label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                placeholder='Enter The OTP '
                onChange={(e) => setOtp(e.target.value)}
                required className='w-[300px] rounded-md h-11 mb-3 text-pretty p-4 outline-none shadow-md'
              />
          
              <button type="submit" onClick={respond} className='bg-blue-400 mt-9 size-12 rounded-md w-[100px]
               outline-none  hover:shadow-md hover:w-[200px] '>
                Verify</button>
        
         
      </div>
    </div>
  )
}

export default VerifyOTP
