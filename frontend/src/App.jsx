/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import ProtectedRoute from "./components/ProtectedRoute";
import Hooks from "./components/Hooks";
import Signup from "./pages/signup-pages/Signup";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute allowedRoles={["admin", "user"]}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Signup />} />
        <Route
          path="/create"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <CreateProduct />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/create" element={<CreateProduct />} /> */}
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="*" element={<p>Page Not Found...</p>} />
      </Routes>
    </div>
  );
};

export default App;
