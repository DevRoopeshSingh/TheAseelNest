import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919819884761?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20Aseel%20chicks."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 px-5 py-3 bg-brand-green text-white font-medium rounded-full shadow-lg hover:bg-brand-gold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline">Book Now</span>
    </a>
  );
}
