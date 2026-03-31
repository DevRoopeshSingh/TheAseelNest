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
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image src="/images/bg_pattern_organic_woven.png" alt="" aria-hidden="true" fill sizes="100vw" className="object-cover opacity-80 pointer-events-none" loading="lazy" />
        <div className="absolute inset-0 bg-brand-sand/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-green mb-6">Connect With The Nest</h1>
          <p className="text-lg text-brand-text-muted leading-relaxed font-light">
            Ready to secure your elite Parrot Beak Aseel? Follow our simple ordering process or simply drop us a message to check availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side — How It Works */}
          <div className="bg-white/50 backdrop-blur-md p-8 rounded-sm border border-brand-beige shadow-sm">
            <h2 className="text-2xl font-serif font-bold mb-8 border-b border-brand-beige-dark pb-4 text-brand-text">How It Works</h2>
            
            <ol className="space-y-8 mb-12" aria-label="Ordering process steps">
              {[
                { n: "1", title: "Inquiry & Availability", desc: "Contact us via WhatsApp, email, or the inquiry form to check current stock sizes." },
                { n: "2", title: "Confirmation & Deposit", desc: "Once verified, a 50% advance payment secures your chick. Video calls provided on request." },
                { n: "3", title: "Handover", desc: "Organize safe pickup directly from our farm, or inquire about transport routing." },
              ].map((step) => (
                <li key={step.n} className="flex gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-xs shadow-sm" aria-hidden="true">{step.n}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-brand-text">{step.title}</h3>
                    <p className="text-brand-text-muted font-light text-sm">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="bg-white/80 backdrop-blur-sm p-6 border border-brand-beige-dark rounded-sm">
              <h3 className="font-serif font-bold mb-4 text-brand-text">Direct Contact Details</h3>
              <address className="not-italic space-y-4">
                <a href="https://wa.me/919819884761?text=Hi!%20I%20have%20an%20inquiry%20from%20the%20contact%20page." target="_blank" rel="noopener noreferrer" aria-label="Call or WhatsApp +91 98198 84761 (opens WhatsApp)" className="flex items-center gap-3 text-brand-text-muted hover:text-brand-green transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green rounded-sm">
                  <Phone size={18} className="text-brand-green shrink-0" aria-hidden="true" />
                  +91 98198 84761
                  <span className="text-xs ml-1 bg-white border border-brand-beige-dark text-brand-green px-2 py-0.5 rounded-sm shadow-sm hidden sm:inline">WhatsApp Preferred</span>
                </a>
                <a href="mailto:ubc.naturista@gmail.com" className="flex items-center gap-3 text-brand-text-muted hover:text-brand-green transition-colors font-medium break-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green rounded-sm">
                  <Mail size={18} className="text-brand-green shrink-0" aria-hidden="true" />
                  ubc.naturista@gmail.com
                </a>
                <a href="https://www.facebook.com/profile.php?id=61585544751149" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile (opens in new tab)" className="flex items-center gap-3 text-brand-text-muted hover:text-brand-green transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green rounded-sm">
                  <FaFacebook size={18} className="text-brand-green shrink-0" aria-hidden="true" />
                  Facebook Profile
                </a>
                <a href="https://instagram.com/theaseelnest" target="_blank" rel="noopener noreferrer" aria-label="@theaseelnest on Instagram (opens in new tab)" className="flex items-center gap-3 text-brand-text-muted hover:text-brand-green transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green rounded-sm">
                  <FaInstagram size={18} className="text-brand-green shrink-0" aria-hidden="true" />
                  @theaseelnest
                </a>
                <div className="flex items-start gap-3 text-brand-text-muted font-medium">
                  <MapPin size={18} className="text-brand-green shrink-0 mt-1" aria-hidden="true" />
                  <span className="leading-relaxed">H No 154, Vadpale, Mangaon, Goregaon, Raigad, Mumbai, Maharashtra 402103, India</span>
                </div>
              </address>
            </div>
          </div>

          {/* Right Side — Form */}
          <div className="bg-white/90 backdrop-blur-md p-8 border border-brand-beige-dark rounded-sm shadow-sm self-start">
            <h2 className="text-2xl font-serif font-bold mb-2 text-brand-text">Send an Inquiry</h2>
            <p className="text-sm text-brand-text-muted font-light mb-8">We usually respond within a few hours.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
