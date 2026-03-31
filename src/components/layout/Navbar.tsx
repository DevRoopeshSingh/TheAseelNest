"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Bloodline & Gallery", href: "/bloodline" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial state on mount to avoid SSR mismatch
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "bg-brand-green-dark/95 backdrop-blur-lg border-brand-green-dark/50 shadow-lg"
          : "bg-brand-sand/90 backdrop-blur-md border-brand-beige-dark"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm">
            <span className={clsx(
              "font-serif text-xl tracking-wide transition-colors duration-300",
              scrolled ? "text-white" : "text-brand-green"
            )}>
              The Aseel Nest
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex gap-6 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors duration-300 pb-0.5 rounded-sm",
                  pathname === link.href
                    ? scrolled
                      ? "text-brand-gold font-semibold border-b-2 border-brand-gold"
                      : "text-brand-green font-semibold border-b-2 border-brand-green"
                    : scrolled
                      ? "text-white/80 hover:text-white border-b-2 border-transparent"
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
              className="px-5 py-2 bg-brand-gold text-white text-sm font-semibold rounded hover:bg-brand-gold-light transition-colors shadow-sm"
            >
              Book Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              "md:hidden p-2 transition-colors rounded-sm",
              scrolled ? "text-white hover:text-brand-gold" : "text-brand-text hover:text-brand-green"
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={clsx(
          "md:hidden absolute w-full bg-brand-green-dark/95 backdrop-blur-lg border-b border-brand-green-dark/50 transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
        aria-hidden={!isOpen}
      >
        <div className="px-4 py-6 flex flex-col gap-4 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={clsx(
                "text-base font-medium transition-colors w-full text-center py-2 rounded-sm",
                pathname === link.href
                  ? "text-brand-gold font-semibold"
                  : "text-white/80 hover:text-white"
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
            className="w-full max-w-[200px] text-center px-5 py-3 bg-brand-gold text-white font-semibold rounded hover:bg-brand-gold-light transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
