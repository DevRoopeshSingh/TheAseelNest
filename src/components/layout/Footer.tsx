import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full relative bg-brand-green-dark mt-auto overflow-hidden" role="contentinfo">
      {/* Decorative border pattern */}
      <div className="absolute inset-x-0 bottom-0 h-24 z-0" aria-hidden="true">
        <Image src="/images/bg_pattern_footer_border.png" alt="" aria-hidden="true" fill sizes="100vw" className="object-cover object-bottom opacity-10 pointer-events-none" loading="lazy" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

          {/* Brand */}
          <div className="md:col-span-1 flex flex-col gap-3">
            <Link href="/" className="inline-block rounded-sm">
              <span className="font-serif text-xl tracking-wide text-brand-gold">
                The Aseel Nest
              </span>
            </Link>
            <p className="text-white/50 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
              Premium Parrot Beak Aseel chicks. Elite bloodlines bred for perfection at our Maharashtra farm.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-semibold text-white/70 uppercase tracking-[0.15em] mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/bloodline" className="text-sm text-white/50 hover:text-brand-gold transition-colors">Bloodline & Gallery</Link></li>
              <li><Link href="/pricing" className="text-sm text-white/50 hover:text-brand-gold transition-colors">Pricing & Availability</Link></li>
              <li><Link href="/contact" className="text-sm text-white/50 hover:text-brand-gold transition-colors">Contact Us</Link></li>
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold text-white/70 uppercase tracking-[0.15em] mb-4">Connect</h3>
            <div className="flex justify-center md:justify-start gap-3">
              <a href="https://wa.me/919819884761" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-gold hover:text-white transition-all">
                <FaWhatsapp size={16} aria-hidden="true" />
              </a>
              <a href="https://instagram.com/theaseelnest" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-gold hover:text-white transition-all">
                <FaInstagram size={16} aria-hidden="true" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61585544751149" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-gold hover:text-white transition-all">
                <FaFacebook size={16} aria-hidden="true" />
              </a>
              <a href="mailto:ubc.naturista@gmail.com" aria-label="Email" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-gold hover:text-white transition-all">
                <Mail size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xs font-semibold text-white/70 uppercase tracking-[0.15em] mb-4">Location</h3>
            <address className="not-italic text-xs text-white/40 leading-relaxed">
              H No 154, Vadpale, Mangaon,<br />
              Goregaon, Raigad 402103,<br />
              Maharashtra, India
            </address>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/30">
            © {new Date().getFullYear()} The Aseel Nest. All rights reserved.
          </p>
          <p className="text-[11px] text-white/30">
            Crafted for premium buyers.
          </p>
        </div>
      </div>
    </footer>
  );
}
