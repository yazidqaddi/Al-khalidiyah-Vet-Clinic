import React, { useState, useEffect } from "react";

export default function Booking() {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwdCYeAKN_XQpkoJBGJlQZGOHiYNmNWmebt6L0m6wtOTRJoEzqEsTJxU9isX8XDEsT_vg/exec";

  const allSlots = [
    "09:00","09:30","10:00","10:30","11:00","11:30",
    "12:00","12:30","13:00","13:30","14:00","14:30",
    "15:00","15:30","16:00","16:30","17:00","17:30"
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    reason: ""
  });

  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  // Normalize date safely
  const normalize = (d: string) => {
    if (!d) return "";
    return String(d).split("T")[0].trim();
  };

  // Fetch available slots
  const fetchAvailableSlots = async (selectedDate: string) => {
    try {
      const res = await fetch(SCRIPT_URL);
      const data = await res.json();
      const booked = Array.isArray(data) ? data : [];

      const bookedForDate = booked
        .filter((b: any) => normalize(b.date) === normalize(selectedDate))
        .map((b: any) => String(b.time).trim());

      const available = allSlots.filter(
        (slot) => !bookedForDate.includes(slot)
      );

      setAvailableTimes(available);
    } catch (err) {
      console.error("Error fetching slots:", err);
    }
  };

  // Handle input change
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    const newData = {
      ...formData,
      [name]:
        name === "date"
          ? new Date(value).toISOString().split("T")[0]
          : value
    };

    setFormData(newData);

    if (name === "date") {
      fetchAvailableSlots(newData.date);
    }
  };

  // Submit booking
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(formData)
    });

    // WhatsApp auto message
    const message = `Hello, I booked an appointment:
Name: ${formData.name}
Date: ${formData.date}
Time: ${formData.time}`;

    window.open(
      `https://wa.me/971553897593?text=${encodeURIComponent(message)}`
    );

    alert("Booking submitted!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      reason: ""
    });

    setAvailableTimes([]);
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Book Appointment</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Owner Name"
          className="w-full p-3 border rounded"
          required
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="05X XXX XXXX"
          className="w-full p-3 border rounded"
          required
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email (optional)"
          className="w-full p-3 border rounded"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        >
          <option value="">Select time</option>
          {availableTimes.length > 0 ? (
            availableTimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))
          ) : (
            <option disabled>No available time</option>
          )}
        </select>

        <select
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        >
          <option value="">Reason</option>
          <option value="checkup">Checkup</option>
          <option value="vaccination">Vaccination</option>
          <option value="grooming">Grooming</option>
          <option value="illness">Illness</option>
        </select>

        <button className="w-full bg-black text-white p-3 rounded">
          Book Appointment
        </button>

      </form>
    </div>
  );
}
