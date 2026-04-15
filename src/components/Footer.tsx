import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                AK
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">Al Khalidiya</span>
                <span className="text-sm text-primary font-medium leading-tight">Vet Clinic</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Compassionate, expert care for your pets in Abu Dhabi. We treat your furry friends like family.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">Client Reviews</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/booking" className="text-gray-300 hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Emergency Care</li>
              <li>Vaccinations</li>
              <li>Pet Grooming</li>
              <li>Surgery & Diagnostics</li>
              <li>General Check-ups</li>
              <li>Pet Transport</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-300">Delma Street, Al Nahyan,<br />Abu Dhabi, UAE</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-300">055 389 7593</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-300">Open 24/7 for Emergencies</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Al Khalidiya Vet Clinic. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
