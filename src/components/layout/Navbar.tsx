"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-sand/90 backdrop-blur-md border-b border-brand-beige-dark" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green focus-visible:outline-offset-2 rounded-sm">
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
                className={clsx(
                  "text-sm font-medium transition-colors pb-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green focus-visible:outline-offset-2 rounded-sm",
                  pathname === link.href
                    ? "text-brand-green font-bold border-b-2 border-brand-green"
                    : "text-brand-text-muted hover:text-brand-green border-b-2 border-transparent"
                )}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/919819884761?text=Hi!%20I'm%20interested%20in%20booking%20a%20pure%20Parrot%20Beak%20Aseel%20chick."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Now via WhatsApp (opens in new tab)"
              className="px-5 py-2.5 bg-brand-green text-white font-medium rounded-sm hover:bg-brand-gold hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green focus-visible:outline-offset-2"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-text hover:text-brand-green transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green rounded-sm"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={clsx(
          "md:hidden absolute w-full bg-brand-sand/95 backdrop-blur-md border-b border-brand-beige-dark transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
        aria-hidden={!isOpen}
      >
        <div className="px-4 py-6 flex flex-col gap-6 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={clsx(
                "text-lg font-medium transition-colors w-full text-center py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green rounded-sm",
                pathname === link.href
                  ? "text-brand-green font-bold"
                  : "text-brand-text-muted hover:text-brand-green"
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/919819884761?text=Hi!%20I'm%20interested%20in%20booking%20a%20pure%20Parrot%20Beak%20Aseel%20chick."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            aria-label="Book Now via WhatsApp (opens in new tab)"
            className="w-full max-w-[200px] text-center px-5 py-3 bg-brand-green text-white font-medium rounded-sm hover:bg-brand-gold hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
