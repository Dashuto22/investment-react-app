import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AssetList from "./pages/AssetList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/assets"
          element={
            <PrivateRoute>
              <AssetList />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
