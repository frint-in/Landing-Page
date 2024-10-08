import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Internship from "./pages/internship/Internship";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Faq from "./pages/support/Faq"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import TermsConditons from "./pages/support/TermsConditons";
import PrivacyPolicy from "./pages/support/PrivacyPolicy";
import ReturnPolicy from "./pages/support/ReturnPolicy";
import Error from "./pages/error/Error";

const hideNavbarPaths = ["/", "/internship", "/about", "/blog", "/contact", "/faq", "/terms-conditions", "/privacy-policy", "/return-policy"];
const hideFooterPaths = ["/", "/internship", "/about", "/blog", "/faq", "/terms-conditions", "/privacy-policy", "/return-policy"];

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    )
  );
}

function AppContent() {
  const location = useLocation();
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <>
      {shouldHideNavbar && <Navbar />}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms-conditions" element={<TermsConditons />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      {shouldHideFooter && <Footer />}
    </>
  );
}

export default App;
