import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card.jsx'
import { saveRegistration } from '../firebase.js';
import { Label } from './ui/label.jsx';
import { Input } from './ui/input.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select.jsx';
import { Button } from './ui/button.jsx';
import { Loader2 } from 'lucide-react';

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    degree: '',
    fieldOfStudy: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await saveRegistration(formData);
      setLoading(false);
      alert('Registration successful! Check your email for payment instructions.');
    } catch (error) {
      setLoading(false);
      alert('Registration failed. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">ScholarshipRoulette Pre-Registration</CardTitle>
        <CardDescription className="text-center">
          Join the draw for a chance to win a fully funded scholarship in Europe
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                required
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1234567890"
              required
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country of Residence</Label>
            <Select name="country" required>
              <SelectTrigger>
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                {/* Add more countries as needed */}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="degree">Preferred Degree Level</Label>
            <Select name="degree" required>
              <SelectTrigger>
                <SelectValue placeholder="Select degree level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                <SelectItem value="masters">Master's Degree</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fieldOfStudy">Field of Study</Label>
            <Select name="fieldOfStudy" required>
              <SelectTrigger>
                <SelectValue placeholder="Select field of study" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="business">Business & Management</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="arts">Arts & Humanities</SelectItem>
                <SelectItem value="science">Natural Sciences</SelectItem>
                {/* Add more fields as needed */}
              </SelectContent>
            </Select>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing
            </>
          ) : (
            'Pre-Register Now'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RegistrationForm;