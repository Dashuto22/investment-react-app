import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  // Using useEffect to check if the user is logged in when the component mounts
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    setIsAuthenticated(!!isLoggedIn); // !!isLoggedIn converts it to a boolean
  }, []);

  // Return null while authentication status is being determined
  if (isAuthenticated === null) return null;

  // Redirect to login if not authenticated, otherwise render the children
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
