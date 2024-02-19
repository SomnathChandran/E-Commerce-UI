import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Register = ({role}) => {

   const navigate = useNavigate();

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const handelRegistration = async(event) => {
      event.preventDefault();
      // fire query to the db
      // using axios
      const URL = "http://localhost:8080/api/v1/ecommerce/users/register";
      const body ={
        email:username,
        password:password,
        userRole:role,
      }
      const header = {
        headers :{
          "Content-Type":"application/json",
        },
        withCredentials : true
      }
      try {
        const response = await axios.post(URL,body,header);
        console.log(response);
        sessionStorage.setItem("email",username);
        sessionStorage.setItem("pwd",password);
       if (response.status === 202){
        alert("OTP Sends SuccessFully..!!")
        navigate("/verify-otp");
       } 
      } catch (error) {
        console.log(error)
      }
      
      
    }
  return (
    <div className="Seller-Register-container h-screen flex justify-center bg-zinc-200 ">

      {/* <div className="bg-blue-400 h-44 w-[500px] border-solid border-2 border-slate-700">


      </div> */}
      
      <div>
      <form className='flex justify-center items-center flex-col bg-slate-100 mt-14 mr-20 h-4/5  w-[500px] rounded-md shadow-md '>
        <h1 className='absolute font-mono uppercase font-bold  text-4xl mb-[400px]
        subpixel-antialiase text-sky-600'>Sign UP</h1>
              {/* Email */}
             <label htmlFor="username" className='text-3xl mb-3 mt-16'>Email</label>
              <input type="text" 
                id="username"
                name="username"
                value={username}
                placeholder='likethis@gmail.com '
                onChange={(event)=> setUsername(event.target.value)}
                 className='w-[300px] rounded-md h-11 mb-3 text-pretty p-4 outline-none shadow-md'/>
                {/* password */}
              <label htmlFor="password"className='text-3xl mb-3 '>Password</label>
              <input type="text"
               id="password" 
               name="password"
               value={password}
               placeholder='Enter The Password.. '
               onChange={(event)=> setPassword(event.target.value)}
               className='w-[300px] rounded-md h-11 mb-3 text-pretty p-4 outline-none shadow-md '/>
                {/* Submit */}
                <button type="submit" onClick={handelRegistration} className='bg-blue-400 mt-9 size-12 rounded-md w-[100px]
               outline-none  hover:shadow-md hover:bg-blue-400 hover:w-[200px]  transition  '> Verify-otp
                 </button>
                 
                
               
        </form>
      </div>
       
   
  </div>
  )
}

export default Register
