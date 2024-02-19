import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes } from "react-router-dom";
import AuthProvider from "./Component/Context/AuthProvider.jsx";
import AllRoutes from "./Component/Routes/AllRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider child={<AllRoutes/>}/>
    </BrowserRouter>
  </React.StrictMode>
);
