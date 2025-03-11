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
import Dashboard from './pages/Dashboard'; // Import the Dashboard component
import Questionnaire from './pages/Questionnaire'; // Import the Questionnaire component
import Payment from './pages/Payment'; // Import the Payment component
import AdvisorDashboard from './pages/AdvisorDashboard'; // Import the AdvisorDashboard component
import PaymentPage from './pages/PaymentPage'; // Import the PaymentPage component
import ProfileManagement from './pages/ProfileManagement'; // Import the ProfileManagement component
import { AdvisorProvider } from './context/AdvisorContext'; // Import the AdvisorProvider
import './pages/Dashboard.css'; // Ensure the Dashboard component imports the CSS file
import './pages/Register.css'; // Ensure the Register component imports the CSS file

function AppRouter() {
  return (
    <AdvisorProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Index />} />
          <Route path="/home3" element={<Index3 />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard route */}
          <Route path="/questionnaire" element={<Questionnaire />} /> {/* Add Questionnaire route */}
          <Route path="/payment" element={<Payment />} /> {/* Add Payment route */}
          <Route path="/advisor-dashboaad" element={<AdvisorDashboard />} /> {/* Add AdvisorDashboard route */}
          <Route path="/payment-page" element={<PaymentPage />} /> {/* Add PaymentPage route */}
          <Route path="/profile-management" element={<ProfileManagement />} /> {/* Add ProfileManagement route */}
          {/* Add more routes as needed */}
          <Route path="*" element={<NotFound />} /> {/* Fallback route */}
        </Routes>
      </Router>
    </AdvisorProvider>
  );
}

export default AppRouter;