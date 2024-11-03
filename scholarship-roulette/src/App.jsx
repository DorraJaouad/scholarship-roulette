import React from 'react';
import RegistrationForm from './components/RegistrationForm.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ScholarshipRoulette
          </h1>
          <p className="text-gray-600">
            Your chance to study in Europe starts here
          </p>
        </div>

        {/* Registration Form */}
        <RegistrationForm />

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>© 2024 ScholarshipRoulette. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;