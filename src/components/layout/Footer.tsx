import Link from "next/link";
import Image from "next/image";
import { Send, Mail } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full relative bg-brand-beige border-t border-brand-beige-dark mt-auto overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-32 z-0">
        <Image src="/images/bg_pattern_footer_border.png" alt="" aria-hidden="true" fill sizes="100vw" className="object-cover object-bottom opacity-25 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
          
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl tracking-wide text-brand-green">
                The Aseel Nest
              </span>
            </Link>
            <p className="text-brand-text-muted text-sm max-w-sm mx-auto md:mx-0">
              Premium Parrot Beak Aseel chicks. Elite bloodlines bred for absolute perfection at our Maharashtra farm.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-lg text-brand-text mb-1">Quick Links</h3>
            <Link href="/bloodline" className="text-sm text-brand-text-muted hover:text-brand-green transition-colors">Bloodline & Gallery</Link>
            <Link href="/pricing" className="text-sm text-brand-text-muted hover:text-brand-green transition-colors">Pricing & Availability</Link>
            <Link href="/contact" className="text-sm text-brand-text-muted hover:text-brand-green transition-colors">Contact Us</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg text-brand-text mb-1">Connect With Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.facebook.com/profile.php?id=61585544751149" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-sand rounded-full text-brand-text-muted hover:text-white hover:bg-brand-green transition-all" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com/theaseelnest" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-sand rounded-full text-brand-text-muted hover:text-white hover:bg-brand-green transition-all" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="mailto:ubc.naturista@gmail.com" className="p-2 bg-brand-sand rounded-full text-brand-text-muted hover:text-white hover:bg-brand-green transition-all" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://wa.me/919819884761?text=Hi!%20I%20have%20an%20inquiry%20regarding%20The%20Aseel%20Nest." target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-sand rounded-full text-brand-text-muted hover:text-white hover:bg-brand-green transition-all" aria-label="WhatsApp">
                <Send size={20} />
              </a>
            </div>
            <p className="text-sm text-brand-text-muted mt-2 leading-relaxed">
              📍 H No 154, Vadpale, Mangaon, Goregaon,<br/> Raigad, Mumbai, Maharashtra 402103
            </p>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-brand-beige-dark/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-text-muted text-center">
            © {new Date().getFullYear()} The Aseel Nest. All rights reserved.
          </p>
          <p className="text-xs text-brand-text-muted text-center">
            For premium buyers only.
          </p>
        </div>
      </div>
    </footer>
  );
}
