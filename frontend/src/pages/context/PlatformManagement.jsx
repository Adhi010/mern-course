import React from "react";
import { useParams } from "react-router-dom";
import Signup from "../signup-pages/Signup";
import SignupAdmin from "../signup-pages/SignupAdmin";

const PlatformManagement = () => {
  const { path } = useParams();

  switch (path) {
    case "signup":
      return <Signup />;
    case "admin":
      return <SignupAdmin />;
    default:
      return <PlatformManagement />;
  }
};

export default PlatformManagement;
