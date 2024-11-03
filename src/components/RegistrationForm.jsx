import React, { useState } from 'react';
import { saveRegistration } from '../firebase.js';
import { Loader2 } from 'lucide-react';
import Modal from './ui/Modal.jsx';
import {countries} from '../assets/countries.js';

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    degree: '',
    fieldOfStudy: '',
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await saveRegistration(formData);
      setLoading(false);
      if (!response.success) {
        setModalContent({
          title: 'Registration Failed',
          message: response.error
        });
        setModalOpen(true);
        return;
      }
      setModalContent({
        title: 'Registration Successful',
        message: 'We will reach out to you soon with more details about the scholarship draw. Good luck! 🎉'
      });
      setModalOpen(true);
    } catch (error) {
      setLoading(false);
      setModalContent({
        title: 'Registration Failed',
        message: 'Please try again.'
      });
      setModalOpen(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Scholarship Roulette Pre-Registration</h2>
      <p className="text-center mb-6">Join the draw for a chance to win a fully funded scholarship in Europe</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block font-semibold">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="block font-semibold">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="country" className="block font-semibold">Country of Residence</label>
          <select
            id="country"
            name="country"
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          >
            <option value="" disabled selected>Select your country</option>
            {countries.map(country => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="degree" className="block font-semibold">Preferred Degree Level</label>
          <select
            id="degree"
            name="degree"
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          >
            <option value="" disabled selected>Select degree level</option>
            <option value="bachelors">Bachelor's Degree</option>
            <option value="masters">Master's Degree</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="fieldOfStudy" className="block font-semibold">Field of Study</label>
          <select
            id="fieldOfStudy"
            name="fieldOfStudy"
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          >
            <option value="" disabled selected>Select field of study</option>
            <option value="business">Business & Management</option>
            <option value="engineering">Engineering</option>
            <option value="cs">Computer Science</option>
            <option value="arts">Arts & Humanities</option>
            <option value="science">Natural Sciences</option>
            {/* Add more fields as needed */}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing
            </span>
          ) : (
            'Pre-Register Now'
          )}
        </button>
      </form>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        message={modalContent.message}
      />
    </div>
  );
};

export default RegistrationForm;
