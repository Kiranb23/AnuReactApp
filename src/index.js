import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Login } from "./Components/Login/login";
import { Signup } from "./Components/signup/signup";
import "./index.css";
import { Dashboard } from "./Components/dashboard/dashboard";

const isuser = false;
const user = {
  name: "sophie",
  email: "sophie@gmail.com",
  password: "123456",
  isLoggedIn: true,
  isVerified: true,
};

// localStorage.setItem("user", JSON.stringify(user));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
