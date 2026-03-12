import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-500">
    <Router basename="/Florence">
      <Navbar />
      <Routes>
   <Route path="/" element={<Home /> } />
      <Route path="/projects" element={<Projects />} />
     <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;