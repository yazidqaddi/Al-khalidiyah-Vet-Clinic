import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    setIsSubmitted(true);
  };

  return (
    <div className="pt-20 pb-16 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Book an Appointment</h1>
          <p className="text-gray-600 text-lg">
            Schedule a visit for your pet. For emergencies, please call us directly.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Form Section */}
            <div className="p-8 md:p-12 md:col-span-3">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">Request Received!</h3>
                  <p className="text-gray-600">
                    Thank you for booking with Al Khalidiya Vet Clinic. Our team will contact you shortly to confirm your appointment time.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-primary font-semibold hover:underline"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Your Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input required type="text" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input required type="tel" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="05X XXX XXXX" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address (Optional)</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input type="email" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input required type="date" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Preferred Time</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select required className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white">
                          <option value="">Select a time</option>
                          <option value="morning">Morning (8AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 4PM)</option>
                          <option value="evening">Evening (4PM - 8PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Reason for Visit</label>
                    <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white">
                      <option value="">Select a reason</option>
                      <option value="checkup">General Check-up</option>
                      <option value="vaccination">Vaccination</option>
                      <option value="grooming">Grooming</option>
                      <option value="illness">Illness / Injury</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-md">
                    Request Appointment
                  </button>
                </form>
              )}
            </div>

            {/* Info Section */}
            <div className="bg-primary p-8 md:p-12 text-white md:col-span-2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Need immediate help?</h3>
              <p className="mb-8 opacity-90 leading-relaxed">
                If your pet is experiencing a medical emergency, please do not use this form. Contact us immediately or come directly to the clinic.
              </p>
              
              <div className="space-y-6">
                <a href="tel:0553897593" className="flex items-center space-x-4 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-colors">
                  <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Call us 24/7</div>
                    <div className="font-bold text-lg">055 389 7593</div>
                  </div>
                </a>

                <a href="https://wa.me/971553897593" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 bg-[#25D366]/20 hover:bg-[#25D366]/30 p-4 rounded-xl transition-colors">
                  <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm opacity-80">WhatsApp Booking</div>
                    <div className="font-bold text-lg">Message Us</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
