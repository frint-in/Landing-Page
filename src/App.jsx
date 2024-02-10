import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Internship from "./pages/internship/Internship";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Auth from "./components/auth/Auth";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const hideNavbarPaths = ["/", "/internship", "/about", "/blog", "/contact"];

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
        <Route path="/internship" element={<Internship />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      {shouldHideNavbar && <Footer />}
    </>
  );
}

export default App;
