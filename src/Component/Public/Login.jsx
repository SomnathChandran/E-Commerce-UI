import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {auth,setAuth}=useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);

    const URL = "http://localhost:8080/api/v1/ecommerce/login";
    const body = {
      email: username,
      password: password,
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      const response = await axios.post(URL, body, header);
      if (response.status === 200) {
        alert("logged in successfully");
        console.log(response);
        const user = {
          userId: response.data.data.userId,
          username: response.data.data.username,
          role: response.data.data.role,
          isAuthenticated: response.data.data.authenticated,
          accessExpiration: response.data.data.accessExpiration,
          refreshExpiration: response.data.data.refreshExpiration,
        };
        localStorage.setItem("user", JSON.stringify(user));
        setAuth(user);
        console.log(auth);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-container h-screen flex justify-center bg-zinc-200 ">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col bg-slate-100 mt-14 mr-20 h-[500px] 
         w-[400px] rounded-md shadow-md "
      >
        <h1
          className="absolute font-sans font-bold  text-4xl mb-[410px]
        subpixel-antialiased text-blue-500 ">
          Login
        </h1>
        <label htmlFor="username" className="text-3xl mb-3 mt-16">
          Email
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          placeholder="likethis@gmail.com "
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-[300px] rounded-md h-11 mb-3 text-pretty p-4 outline-none shadow-md"
        />
        <label htmlFor="password" className="text-3xl  mb-3 ">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter The Password.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-[300px] rounded-md h-11  p-4 outline-none shadow-md"
        />
        <button type="submit" onClick={handleSubmit}
          className="bg-blue-400 mt-9 size-12 rounded-md w-[70px] outline-none hover:shadow-md hover:bg-blue-500 subpixel-antialiased">
          Login
        </button>
        <br/>
        <p className="font-sans">New Customer ?, <Link to={"/customer/register"} className="hover:underline hover:decoration-sky-500 hover:underline-offset-2 hover:text-blue-500 ">
           Create An Account</Link></p>
      
      </form>
    </div>
  );
};

export default Login;
