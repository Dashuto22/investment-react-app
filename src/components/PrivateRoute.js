import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    setIsAuthenticated(!!isLoggedIn); 
  }, []);

  if (isAuthenticated === null) return null;

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
