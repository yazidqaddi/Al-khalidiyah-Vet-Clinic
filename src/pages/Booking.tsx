"use client";

import React, { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, MessageCircle } from "lucide-react";

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    reason: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwdCYeAKN_XQpkoJBGJlQZGOHiYNmNWmebt6L0m6wtOTRJoEzqEsTJxU9isX8XDEsT_vg/exec",
        {
          method: "POST",
          body: JSON.stringify(formData)
        }
      );

      setIsSubmitted(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        reason: ""
      });

    } catch (error) {
      console.error(error);
      alert("Error sending booking. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="pt-20 pb-16 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">
            Book an Appointment
          </h1>
          <p className="text-gray-600 text-lg">
            Schedule a visit for your pet. For emergencies, please call us directly.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">

            {/* FORM SECTION */}
            <div className="p-8 md:p-12 md:col-span-3">

              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-secondary">
                    Request Received!
                  </h3>

                  <p className="text-gray-600">
                    Thank you for booking with Al Khalidiya Vet Clinic. Our team will contact you shortly.
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

                  {/* NAME + PHONE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Your Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          type="tel"
                          placeholder="05X XXX XXXX"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200"
                        />
                      </div>
                    </div>

                  </div>

                  {/* EMAIL */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email (Optional)</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200"
                      />
                    </div>
                  </div>

                  {/* DATE + TIME */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          type="date"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Preferred Time</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200"
                        >
                          <option value="">Select time</option>
                          <option value="morning">Morning</option>
                          <option value="afternoon">Afternoon</option>
                          <option value="evening">Evening</option>
                        </select>
                      </div>
                    </div>

                  </div>

                  {/* REASON */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">Reason for Visit</label>
                    <select
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      required
                      className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200"
                    >
                      <option value="">Select reason</option>
                      <option value="checkup">Check-up</option>
                      <option value="vaccination">Vaccination</option>
                      <option value="grooming">Grooming</option>
                      <option value="illness">Illness / Injury</option>
                    </select>
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg"
                  >
                    {loading ? "Sending..." : "Request Appointment"}
                  </button>

                </form>
              )}

            </div>

            {/* SIDE PANEL */}
            <div className="bg-primary p-8 md:p-12 text-white md:col-span-2 flex flex-col justify-center">

              <h3 className="text-2xl font-bold mb-6">
                Need immediate help?
              </h3>

              <p className="mb-8 opacity-90">
                For emergencies, contact us directly.
              </p>

              <div className="space-y-6">

                <a
                  href="tel:0553897593"
                  className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl"
                >
                  <Phone />
                  <div>
                    <div className="text-sm opacity-80">Call 24/7</div>
                    <div className="font-bold">055 389 7593</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/971553897593?text=I%20want%20to%20book%20an%20appointment"
                  target="_blank"
                  className="flex items-center space-x-4 bg-[#25D366]/20 p-4 rounded-xl"
                >
                  <MessageCircle />
                  <div>
                    <div className="text-sm opacity-80">WhatsApp</div>
                    <div className="font-bold">Book Now</div>
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
