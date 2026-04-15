"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

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

  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  // ALL POSSIBLE TIME SLOTS
  const allSlots = [
    "09:00","09:30","10:00","10:30",
    "11:00","11:30","12:00","12:30",
    "13:00","13:30","14:00","14:30",
    "15:00","15:30","16:00","16:30"
  ];

  // HANDLE INPUT
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: name === "date"
      ? new Date(value).toISOString().split("T")[0]
      : value
  });
};

  // FETCH AVAILABLE TIMES
  const fetchAvailableSlots = async (selectedDate: string) => {
    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbwdCYeAKN_XQpkoJBGJlQZGOHiYNmNWmebt6L0m6wtOTRJoEzqEsTJxU9isX8XDEsT_vg/exec");
      const booked = await res.json();

     const normalize = (d: string) => {
  if (!d) return "";
  return String(d).split("T")[0].trim();
}
const bookedForDate = booked
  .filter((b: any) => normalize(b.date) === normalize(selectedDate))
  .map((b: any) => b.time);
      const available = allSlots.filter(
        (slot) => !bookedForDate.includes(slot)
      );

      setAvailableTimes(available);
    } catch (err) {
      console.error("Error fetching slots:", err);
    }
  };

  // SUBMIT FORM
 const handleSubmit = async () => {
  await fetch("YOUR_SCRIPT_URL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      reason: formData.reason
    })
  });
};

      // WHATSAPP MESSAGE
      const message = `Hello Al Khalidiya Vet Clinic,

I would like to confirm my appointment:

Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Service: ${formData.reason}

Please confirm my booking. Thank you.`;

      const whatsappURL = `https://wa.me/971553897593?text=${encodeURIComponent(message)}`;

      window.open(whatsappURL, "_blank");

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
      alert("Error sending booking");
    }

    setLoading(false);
  };

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">

        <h1 className="text-3xl font-bold text-center mb-6">
          Book Appointment
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow">

          {isSubmitted ? (
            <div className="text-center">
              <h2 className="text-xl font-bold">Booking Sent ✅</h2>
              <p className="mt-2">We will contact you shortly.</p>
            </div>
          ) : (

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-xl"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="w-full p-3 border rounded-xl"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email (optional)"
                className="w-full p-3 border rounded-xl"
              />

              {/* DATE */}
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={(e) => {
                  handleChange(e);
                  fetchAvailableSlots(e.target.value);
                }}
                required
                className="w-full p-3 border rounded-xl"
              />

              {/* TIME (ONLY AVAILABLE) */}
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-xl"
              >
                <option value="">Select Time</option>

                {availableTimes.length === 0 ? (
                  <option disabled>No available slots</option>
                ) : (
                  availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))
                )}
              </select>

              {/* REASON */}
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-xl"
              >
                <option value="">Reason</option>
                <option value="checkup">Check-up</option>
                <option value="vaccination">Vaccination</option>
                <option value="grooming">Grooming</option>
                <option value="illness">Illness</option>
              </select>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-xl"
              >
                {loading ? "Sending..." : "Book Appointment"}
              </button>

            </form>
          )}
        </div>

        {/* WHATSAPP QUICK BUTTON */}
        <div className="mt-6 text-center">
          <a
            href="https://wa.me/971553897593"
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-xl"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
