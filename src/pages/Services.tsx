import { Syringe, Scissors, HeartPulse, Activity, Stethoscope, Truck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: HeartPulse,
      title: "24/7 Emergency Care",
      description: "Critical care when every second counts. Our emergency facility is fully equipped and staffed around the clock to handle any pet emergency.",
      benefits: ["Immediate triage", "On-site diagnostics", "Oxygen therapy", "Emergency surgery capabilities"]
    },
    {
      icon: Stethoscope,
      title: "General Check-ups & Wellness",
      description: "Preventative care is the foundation of a long, healthy life for your pet. We offer comprehensive physical exams and wellness planning.",
      benefits: ["Nose-to-tail examinations", "Nutritional counseling", "Parasite prevention", "Senior pet care"]
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description: "Protect your pets from dangerous, preventable diseases with our tailored vaccination protocols based on their lifestyle and risk factors.",
      benefits: ["Core & non-core vaccines", "Puppy/kitten series", "Travel certificates", "Titer testing"]
    },
    {
      icon: Activity,
      title: "Surgery & Diagnostics",
      description: "From routine spays/neuters to complex soft tissue surgeries, performed in our state-of-the-art surgical suite with advanced monitoring.",
      benefits: ["Digital X-ray & Ultrasound", "In-house laboratory", "Safe anesthesia protocols", "Comprehensive pain management"]
    },
    {
      icon: Scissors,
      title: "Professional Grooming",
      description: "Keep your pet looking and feeling great. Our gentle groomers handle all breeds and temperaments with care and patience.",
      benefits: ["Breed-specific cuts", "Medicated baths", "Nail trimming", "Ear cleaning"]
    },
    {
      icon: Truck,
      title: "Pet Transport",
      description: "Safe, comfortable, and climate-controlled transportation for your pets. Perfect for busy owners or pets with mobility issues.",
      benefits: ["Door-to-door service", "Trained handlers", "Sanitized vehicles", "Emergency transport available"]
    }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <div className="bg-secondary text-white py-16 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipNo0qJ-xMhmApCXPoKZ75UJDhOU6Vkfjgw7g80u=w1920" 
            alt="Veterinary Services" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Veterinary Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive, compassionate care tailored to the unique needs of your beloved pets.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <service.icon className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-secondary">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="bg-background rounded-xl p-6">
                <h3 className="font-semibold text-secondary mb-4">Key Benefits:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-primary rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a service not listed here?</h2>
          <p className="text-lg mb-8 opacity-90">Contact us to discuss your pet's specific needs. We're here to help.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:0553897593" className="bg-white text-primary hover:bg-gray-50 px-8 py-3 rounded-full font-bold transition-colors">
              Call Us
            </a>
            <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-colors">
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
