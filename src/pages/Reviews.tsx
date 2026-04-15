import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah M.",
      pet: "Owner of Luna (Cat)",
      rating: 5,
      date: "2 weeks ago",
      text: "The 24/7 emergency service saved my cat's life. The staff was incredibly calm, professional, and kind during a very stressful time. Highly recommend Dr. Hassan and his team."
    },
    {
      name: "Ahmed K.",
      pet: "Owner of Max (Golden Retriever)",
      rating: 5,
      date: "1 month ago",
      text: "Best vet clinic in Abu Dhabi! They are always gentle with Max, and the facility is spotless. The pet transport service is also a huge lifesaver for my busy schedule."
    },
    {
      name: "Fatima R.",
      pet: "Owner of Bella (Poodle)",
      rating: 5,
      date: "2 months ago",
      text: "I've been bringing Bella here for grooming and check-ups for 2 years. They truly care about the animals. The booking process via WhatsApp is so convenient."
    },
    {
      name: "James T.",
      pet: "Owner of Rocky (Bulldog)",
      rating: 4,
      date: "3 months ago",
      text: "Very professional clinic. The waiting area is clean and they handled Rocky's surgery with great care. The follow-up calls to check on his recovery were much appreciated."
    },
    {
      name: "Layla A.",
      pet: "Owner of Milo (Parrot)",
      rating: 5,
      date: "4 months ago",
      text: "It's hard to find a good avian vet, but the team here is fantastic. They knew exactly how to handle Milo and made him feel comfortable."
    },
    {
      name: "Omar S.",
      pet: "Owner of Daisy (Beagle)",
      rating: 5,
      date: "5 months ago",
      text: "Excellent service from start to finish. The prices are transparent and the care is top-notch. I wouldn't trust my dog with anyone else."
    }
  ];

  return (
    <div className="pt-20 pb-16 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Client Reviews</h1>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-secondary">4.5/5</span>
          </div>
          <p className="text-xl text-gray-600">
            Based on over 600+ reviews from happy pet parents in Abu Dhabi.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative h-full flex flex-col">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100" />
              <div className="flex text-accent mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-8 italic flex-grow text-lg leading-relaxed">
                "{review.text}"
              </p>
              <div className="mt-auto border-t border-gray-50 pt-4">
                <h4 className="font-bold text-secondary text-lg">{review.name}</h4>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm text-primary font-medium">{review.pet}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-secondary mb-4">Experience Our Care</h2>
            <p className="text-gray-600 mb-8">Join hundreds of satisfied pet owners who trust us with their furry family members.</p>
            <a href="tel:0553897593" className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-colors shadow-lg">
              Book Your First Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
