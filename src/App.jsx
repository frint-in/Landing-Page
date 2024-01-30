import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Auth from "./components/auth/Auth";
import Navbar from "./components/navbar/Navbar";

const hideNavbarPaths = ["/"];

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {shouldHideNavbar && <Navbar />}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
