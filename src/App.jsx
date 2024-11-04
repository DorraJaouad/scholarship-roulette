import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Navigation */}
          <nav className="text-center mb-8">
            <Link to="/" className="text-2xl font-bold text-gray-900 mr-4">Home</Link>
            <Link to="/register" className="text-2xl font-bold text-gray-900">Register</Link>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>

          {/* Footer */}
          <div className="text-center mt-8 text-sm text-gray-500">
            <p>© 2024 ScholarshipRoulette. All rights reserved.</p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;