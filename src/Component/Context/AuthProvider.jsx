import { createContext, useContext, useEffect, useState } from "react";
import LoginRefresh from "../Auth/LoginRefresh";

const authContext = createContext({});

const AuthProvider = ({child}) => {
  const position = false;
  
  const { validateAndRefresh } = LoginRefresh();
  const [auth, setAuth] = useState({
    userId: "",
    username: "",
    role: "CUSTOMER",
    isAuthenticated: false,
    accessExpiration: "",
    refreshExpiration: "",
  });

  const refresh = async () => {
    const user = await validateAndRefresh();
    if (user) {
      setAuth({ ...user });
    }
  };

  useEffect(() => {
    if(!position){
    refresh();
    }
  }, []);

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {child}
    </authContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(authContext);
