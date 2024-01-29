import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Auth from "./components/auth/Auth";
import Navbar from "./components/navbar/Navbar";

// Custom component that uses useLocation
function NavbarWithConditionalRendering() {
  const location = useLocation();
  const currentPath = location.pathname;

  return currentPath === "/auth" ? null : <Navbar />;
}

function App() {
  return (
    <BrowserRouter>
      <NavbarWithConditionalRendering />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
