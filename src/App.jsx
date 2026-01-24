import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- Components ---
import Footer from "./Components/Homecomponents/Footer";
import ScrollToTop from "./ScrollToTop";

// --- Pages ---
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      {/* Resets scroll position to top on every route change */}
      <ScrollToTop />

      {/* Global Navbar */}

      <div className="min-h-screen">
        <Routes>
          {/* Main Page with Employer Info & Apply Button */}
          <Route path="/" element={<Home />} />

          {/* About Page: Mission & Culture */}
          <Route path="/about" element={<About />} />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />

          {/* Specialized Cleaner Application Form */}
          <Route path="/apply" element={<Apply />} />

          {/* Worker Login: Separate from Apply Now */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
