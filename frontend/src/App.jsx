import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import CreateProduct from "./pages/create-page/CreateProduct.jsx";
import Home from "./pages/Home.jsx";
import EditProduct from "./pages/editProduct/EditProduct.jsx";
import Signup from "./pages/signup-pages/Signup.jsx";
import SignupAdmin from "./pages/signup-pages/SignupAdmin.jsx";
import PlatformManagement from "./pages/context/PlatformManagement.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/:path" element={<PlatformManagement />} />
        {/* <Route path="/login/admin" element={<SignupAdmin />} /> */}
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;
