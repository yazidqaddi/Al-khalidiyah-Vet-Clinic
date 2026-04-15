import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20 pb-16 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">
            We're here for you and your pets 24 hours a day, 7 days a week. Don't hesitate to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Cards */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">Call Us</h3>
            <p className="text-gray-500 mb-4">Available 24/7 for emergencies and general inquiries.</p>
            <a href="tel:0553897593" className="text-primary font-bold text-xl hover:text-primary-dark">055 389 7593</a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">WhatsApp</h3>
            <p className="text-gray-500 mb-4">Message us for quick replies and easy booking.</p>
            <a href="https://wa.me/971553897593" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold text-xl hover:text-[#20bd5a]">Chat with us</a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">Opening Hours</h3>
            <p className="text-gray-500 mb-4">We never close. We are always ready to help.</p>
            <span className="text-blue-600 font-bold text-xl">24 Hours / 7 Days</span>
          </div>
        </div>

        {/* Map and Address */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-secondary mb-6">Visit Our Clinic</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg mb-1">Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Delma Street<br />
                      Al Nahyan<br />
                      Abu Dhabi, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg mb-1">Email</h4>
                    <p className="text-gray-600">
                      info@alkhalidiyavet.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a 
                  href="https://maps.google.com/?q=Delma+Street,+Al+Nahyan,+Abu+Dhabi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-semibold transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
            
            {/* Map Embed and Image */}
            <div className="h-[600px] lg:h-auto bg-gray-200 relative flex flex-col">
              <div className="h-1/2 relative">
                <img 
                  src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGIRkuXn5RpCe9WQokbUB0DmtZHr1UKpgcNmiQiK9sgPhru6zuO8PA5P0HiaHYImWAZ-D54oiX4Vp2JG6qWrgB1quCGnqpO8Bw6LhTOijdEvLLnKkkJNA-baJDdQtX35HzAaJqeOg=w1920" 
                  alt="Clinic Exterior" 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="h-1/2 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.332306899534!2d54.3773!3d24.4733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI4JzI0LjEiTiA1NMKwMjInMzguMyJF!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Clinic Location"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
