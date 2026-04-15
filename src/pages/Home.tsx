import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Star, 
  Clock, 
  ShieldAlert, 
  Truck,
  Syringe,
  Scissors,
  Stethoscope,
  Activity,
  HeartPulse
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80" 
            alt="Happy dog with vet" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-light border border-primary/30 font-medium text-sm mb-6">
                📍 Delma Street, Al Nahyan, Abu Dhabi
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                24/7 Trusted Veterinary Care in Abu Dhabi
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Compassionate, expert care for your pets — anytime you need it. Because your furry family members deserve the best.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:0553897593" 
                  className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg shadow-primary/30"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a 
                  href="https://wa.me/971553897593" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg shadow-[#25D366]/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <Link 
                  to="/booking" 
                  className="flex items-center justify-center space-x-2 bg-white text-secondary hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-2">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <h3 className="font-bold text-secondary">4.5/5 Rating</h3>
              <p className="text-sm text-gray-500">From 600+ happy clients</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-2">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-secondary">Open 24/7</h3>
              <p className="text-sm text-gray-500">Always here for your pets</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-2">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-secondary">Emergency Care</h3>
              <p className="text-sm text-gray-500">Immediate attention</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-secondary">Pet Transport</h3>
              <p className="text-sm text-gray-500">Safe & comfortable travel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Comprehensive Pet Care Services</h2>
              <p className="text-gray-600 text-lg">From routine check-ups to emergency surgeries, we provide top-tier medical care tailored to your pet's unique needs.</p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipNo0qJ-xMhmApCXPoKZ75UJDhOU6Vkfjgw7g80u=w1200" 
                alt="Veterinary Services" 
                className="rounded-2xl shadow-lg w-full object-cover h-64 lg:h-80"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipMEikGlzb7ZtzdG5s6Tz4JL-vvCbC5jx0d1V5LC=w1200" 
                alt="Pet Care" 
                className="rounded-2xl shadow-lg w-full object-cover h-64 lg:h-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Syringe, title: "Vaccinations", desc: "Keep your pets protected against common and dangerous diseases with our comprehensive vaccination programs." },
              { icon: Scissors, title: "Grooming", desc: "Professional grooming services to keep your pet looking and feeling their absolute best." },
              { icon: HeartPulse, title: "Emergency Care", desc: "24/7 critical care and emergency response when every second counts." },
              { icon: Activity, title: "Surgery", desc: "State-of-the-art surgical facilities with experienced veterinary surgeons." },
              { icon: Stethoscope, title: "Check-ups", desc: "Regular wellness exams to catch potential health issues early and maintain optimal health." },
              { icon: Truck, title: "Pet Transport", desc: "Safe, climate-controlled transportation for your pets to and from our clinic." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Link to="/services" className="text-primary font-semibold hover:text-primary-dark flex items-center">
                  Learn more <span className="ml-2">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80" 
                alt="Dr. Mohamed Hassan examining a dog" 
                className="rounded-2xl shadow-lg w-full object-cover h-[500px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Meet Our Expert Team</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Led by <strong className="text-secondary">Dr. Mohamed Hassan</strong>, our team of passionate veterinarians and technicians are dedicated to providing the highest standard of care. With years of experience and a genuine love for animals, you can trust us with your pet's health.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Decades of combined veterinary experience",
                  "Specialized in advanced diagnostics and surgery",
                  "Continuous education on the latest medical practices",
                  "Compassionate, fear-free handling techniques"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 mr-3">
                      ✓
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/booking" className="inline-block bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-semibold transition-colors">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">What Pet Parents Say</h2>
            <p className="text-gray-600 text-lg">Don't just take our word for it. Here's what our community has to say about their experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                pet: "Owner of Luna (Cat)",
                text: "The 24/7 emergency service saved my cat's life. The staff was incredibly calm, professional, and kind during a very stressful time. Highly recommend Dr. Hassan and his team."
              },
              {
                name: "Ahmed K.",
                pet: "Owner of Max (Golden Retriever)",
                text: "Best vet clinic in Abu Dhabi! They are always gentle with Max, and the facility is spotless. The pet transport service is also a huge lifesaver for my busy schedule."
              },
              {
                name: "Fatima R.",
                pet: "Owner of Bella (Poodle)",
                text: "I've been bringing Bella here for grooming and check-ups for 2 years. They truly care about the animals. The booking process via WhatsApp is so convenient."
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-secondary">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.pet}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/reviews" className="text-primary font-semibold hover:text-primary-dark">
              Read all 600+ reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#pattern)" />
            <defs>
              <pattern id="pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor" />
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Is Your Pet Feeling Unwell?</h2>
          <p className="text-xl text-white/90 mb-10">
            Don't wait. Our expert team is ready to help 24 hours a day, 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:0553897593" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              Call 055 389 7593
            </a>
            <Link 
              to="/booking" 
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
