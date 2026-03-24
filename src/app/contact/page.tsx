import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata = {
  title: "Contact & How to Order | The Aseel Nest",
  description: "Get in touch to book your premium Parrot Beak Aseel chicks. Based in Maharashtra, India.",
};

export default function Contact() {
  return (
    <div className="relative min-h-screen py-20 flex flex-col justify-start">
      <div className="absolute inset-0 z-0">
        <Image src="/images/bg_pattern_organic_woven.png" alt="" aria-hidden="true" fill sizes="100vw" className="object-cover opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-brand-sand/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-6">Connect With The Nest</h1>
          <p className="text-lg text-brand-text-muted leading-relaxed font-light">
            Ready to secure your elite Parrot Beak Aseel? Follow our simple ordering process or simply drop us a message to check availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - How to Order & Info */}
          <div className="bg-white/50 backdrop-blur-md p-8 rounded-sm border border-brand-beige shadow-sm">
            <h2 className="text-2xl font-serif font-bold mb-8 border-b border-brand-beige-dark pb-4 text-brand-text">How It Works</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold shadow-sm">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-brand-text">Inquiry & Availability</h3>
                  <p className="text-brand-text-muted font-light text-sm">Contact us via WhatsApp, email, or our inquiry form to check current stock sizes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold shadow-sm">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-brand-text">Confirmation & Deposit</h3>
                  <p className="text-brand-text-muted font-light text-sm">Once verified, a 50% advance payment strictly secures your chick. Verified video calls provided upon request.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold shadow-sm">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-brand-text">Handover</h3>
                  <p className="text-brand-text-muted font-light text-sm">Organize safe pickup directly from our farm, or inquire about safe transport routing.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 border border-brand-beige-dark rounded-sm">
              <h3 className="font-serif font-bold mb-4 text-brand-text">Direct Contact Details</h3>
              <div className="space-y-4">
                <a href="https://wa.me/919819884761?text=Hi!%20I%20have%20an%20inquiry%20from%20the%20contact%20page." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-text-muted hover:text-brand-green transition-colors font-medium">
                  <Phone size={18} className="text-brand-green shrink-0" />
                  +91 98198 84761 <span className="text-xs ml-2 bg-white border border-brand-beige-dark text-brand-green px-2 py-0.5 rounded-sm shadow-sm hidden sm:inline">WhatsApp Preferred</span>
                </a>
                <a href="mailto:ubc.naturista@gmail.com" className="flex items-center gap-3 text-brand-text-muted hover:text-brand-green transition-colors font-medium break-all">
                  <Mail size={18} className="text-brand-green shrink-0" />
                  ubc.naturista@gmail.com
                </a>
                <a href="https://www.facebook.com/profile.php?id=61585544751149" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-text-muted hover:text-brand-green transition-colors font-medium">
                  <FaFacebook size={18} className="text-brand-green shrink-0" />
                  Facebook Profile
                </a>
                <a href="https://instagram.com/theaseelnest" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-text-muted hover:text-brand-green transition-colors font-medium">
                  <FaInstagram size={18} className="text-brand-green shrink-0" />
                  @theaseelnest
                </a>
                <div className="flex items-start gap-3 text-brand-text-muted font-medium">
                  <MapPin size={18} className="text-brand-green shrink-0 mt-1" />
                  <span className="leading-relaxed">H No 154, Vadpale, Mangaon, Goregaon, Raigad, Mumbai, Maharashtra 402103, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/90 backdrop-blur-md p-8 border border-brand-beige-dark rounded-sm shadow-sm relative overflow-hidden self-start">
            <h2 className="text-2xl font-serif font-bold mb-2 text-brand-text">Send an Inquiry</h2>
            <p className="text-sm text-brand-text-muted font-light mb-8">We usually respond within a few hours.</p>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
