import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const phoneNumber = "0553897593";
  const whatsappUrl = `https://wa.me/971553897593`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <a
        href={`tel:${phoneNumber}`}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-transform hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] transition-transform hover:scale-110"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
