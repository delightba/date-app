import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import NotFound from './pages/NotFound'; // Import the NotFound component
import Index from './pages/Index';
import Index2 from './pages/Index2';
import Index3 from './pages/Index3';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Index2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Index />} />
        <Route path="/home3" element={<Index3 />} />
        <Route path="/about" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<NotFound />} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
}

export default AppRouter;