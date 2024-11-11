import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100" style={{ borderRadius: '15px' }}>
        {/* Updated Navigation */}
        <nav className="bg-white shadow-md rounded-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <span className="text-2xl font-bold text-gray-900">Scholarship Roulette</span>
                </Link>
              </div>
              <div className="flex space-x-8">
                <Link 
                  to="/" 
                  className="inline-flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
                >
                  Home
                </Link>
                <Link 
                  to="/register" 
                  className="inline-flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Content Container */}
        <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
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