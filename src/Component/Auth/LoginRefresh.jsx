import axios from "axios";
import { useAuth } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginRefresh = () => {

    const navigate = useNavigate();
    const URL = "http://localhost:8080/api/v1/ecommerce/refresh-login-token"
    const refresh = async () =>{
        const response = await axios.post(URL,{
            withCredentials : true,
        });
        if(response.status === 200){
            // set the Data into The LocalStorage
            const user ={
                userId            :response.data.data.userId,
                username          :response.data.data.username,
                role              :response.data.data.role,
                isAuthenticated   :response.data.data.authenticated,
                accessExpiration  :response.data.data.accessExpiration,
                refreshExpiration :response.data.data.refreshExpiration,
            };
           console.log(response.data.data);
            localStorage.setItem("user",JSON.stringify(user));
           return user;
        }else{
            console.log("Response did not get, error");
            alert(response.data.data);
                
        }
    };

    const validateAndRefresh = async() =>{
        const userString=localStorage.getItem("user");
        if(userString && userString !== "{}"){
            const user = JSON.parse(userString);
            if(new Date(user.refreshExpiration) > new Date()){
                if(new Date(user.accessExpiration) > new Date()){
                    return user;
                }else return await refresh();
            }navigate("/login")
        }navigate("/")  
    };
     return ({validateAndRefresh});
};
export default LoginRefresh
