import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="hidden md:flex bg-primary text-white text-sm py-2 px-4 justify-between items-center">
        <div className="flex items-center space-x-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Open 24/7 for Emergencies</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Delma Street, Al Nahyan, Abu Dhabi</span>
          </div>
          <div className="flex-1" />
          <div className="flex items-center space-x-2 font-semibold">
            <Phone className="w-4 h-4" />
            <span>055 389 7593</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              AK
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-secondary leading-tight">Al Khalidiya</span>
              <span className="text-sm text-primary font-medium leading-tight">Vet Clinic</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  location.pathname === link.path ? "text-primary" : "text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-semibold transition-colors shadow-sm"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-secondary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "block px-3 py-3 rounded-md text-base font-medium",
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-secondary hover:bg-gray-50"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="block w-full text-center mt-4 bg-accent text-white px-3 py-3 rounded-md font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
