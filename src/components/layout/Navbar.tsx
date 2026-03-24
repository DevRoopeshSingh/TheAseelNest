"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Bloodline & Gallery", href: "/bloodline" },
  { name: "Pricing & Availability", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-sand/90 backdrop-blur-md border-b border-brand-beige-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl tracking-wide text-brand-green">
              The Aseel Nest
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-text-muted hover:text-brand-green transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/919819884761?text=Hi!%20I'm%20interested%20in%20booking%20a%20pure%20Parrot%20Beak%20Aseel%20chick."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-brand-green text-white font-medium rounded-sm hover:bg-brand-gold hover:text-white transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-text hover:text-brand-green transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden absolute w-full bg-brand-sand/95 backdrop-blur-md border-b border-brand-beige-dark transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-4 py-6 flex flex-col gap-6 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-brand-text-muted hover:text-brand-green transition-colors w-full text-center py-2"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/919819884761?text=Hi!%20I'm%20interested%20in%20booking%20a%20pure%20Parrot%20Beak%20Aseel%20chick."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-[200px] text-center px-5 py-3 bg-brand-green text-white font-medium rounded-sm hover:bg-brand-gold hover:text-white transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
