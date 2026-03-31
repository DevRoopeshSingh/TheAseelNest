import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, Bird, ChevronDown } from "lucide-react";
import { InstagramFeed } from "@/components/ui/InstagramFeed";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden" aria-label="Hero">
        {/* Dark overlay image */}
        <Image
          src="/images/aseel_home_hero_1774342580167.png"
          alt="" aria-hidden="true"
          fill
          className="object-cover pointer-events-none"
          priority
        />
        {/* Dark gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-brand-green-dark/80 z-[1]" aria-hidden="true" />
        {/* Subtle grain texture */}
        <div className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 bg-white/10 rounded-full backdrop-blur-sm mb-8">
            <Star className="text-brand-gold" size={14} aria-hidden="true" />
            <span className="text-xs font-semibold text-white/90 uppercase tracking-[0.2em]">Premium Parrot Beak Aseel</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-5 leading-[1.1] tracking-tight">
            The Pinnacle of Aseel Heritage
          </h1>

          <p className="text-base sm:text-lg text-white/75 max-w-xl mb-10 leading-relaxed font-light">
            Elite bloodlines bred for exceptional quality, striking aesthetics, and absolute perfection. Based in Maharashtra, India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/919819884761?text=Hi!%20I%20want%20to%20secure%20a%20premium%20Parrot%20Beak%20Aseel%20bloodline."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Secure Your Bloodline via WhatsApp (opens in new tab)"
              className="px-8 py-3.5 bg-brand-gold text-white font-semibold rounded hover:bg-brand-gold-light transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
            >
              Secure Your Bloodline
            </a>
            <Link
              href="/bloodline"
              className="px-8 py-3.5 bg-transparent border border-white/30 text-white font-medium rounded hover:border-brand-gold hover:text-brand-gold transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              View Gallery <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10" aria-hidden="true">
          <ChevronDown className="text-white/30" size={28} />
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="relative py-28 bg-white" aria-labelledby="features-heading">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image src="/images/bg_pattern_farm_texture.png" alt="" aria-hidden="true" fill sizes="100vw" className="object-cover pointer-events-none opacity-40" loading="lazy" />
          <div className="absolute inset-0 bg-white/90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="features-heading" className="text-center text-3xl md:text-4xl font-serif font-bold text-brand-green mb-4">Why The Aseel Nest</h2>
          <p className="text-center text-brand-text-muted font-light max-w-2xl mx-auto mb-16">What sets our breeding program apart from the rest.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="text-brand-green" size={28} aria-hidden="true" />, title: "Pure Bloodlines", desc: "Guaranteed authentic Parrot Beak Aseel lineage, selectively bred for the finest genetic traits over generations." },
              { icon: <Bird className="text-brand-green" size={28} aria-hidden="true" />, title: "Exceptional Quality", desc: "Every chick is raised with precision care at our Maharashtra facility, ensuring robust health and perfect structural form." },
              { icon: <Star className="text-brand-green" size={28} aria-hidden="true" />, title: "Premium Service", desc: "An exclusive, personalized buying experience crafted for collectors and breeders who demand only the best." },
            ].map((card) => (
              <div key={card.title} className="bg-brand-sand/50 p-8 rounded border border-brand-beige hover:border-brand-gold/50 hover:shadow-lg transition-all duration-300 group text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-white border border-brand-beige-dark flex items-center justify-center mb-5 group-hover:border-brand-gold group-hover:scale-105 transition-all duration-300 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-lg font-serif font-bold mb-3 text-brand-text">{card.title}</h3>
                <p className="text-sm text-brand-text-muted leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-28 bg-brand-sand" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="testimonials-heading" className="text-center text-3xl md:text-4xl font-serif font-bold text-brand-green mb-4">Client Experiences</h2>
          <p className="text-center text-brand-text-muted font-light max-w-2xl mx-auto mb-16">Trusted by serious breeders and collectors across India.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { initials: "SD", name: "Sameer D.", role: "Premium Breeder · Pune", quote: "Absolutely stunning Parrot Beak structure. The chicks arrived in perfect health and the lineage certification gave me complete peace of mind." },
              { initials: "AK", name: "Arif Khan", role: "Collector · Mumbai", quote: "The post-purchase breeding guidance has been invaluable. My birds have incredibly tight plumage and beautiful aggressive stances." },
              { initials: "RM", name: "Rajendra M.", role: "Enthusiast · Nashik", quote: "The ₹4,000 price point is entirely justified given the sheer genetic quality. The handover process was extremely professional." },
            ].map((t) => (
              <figure key={t.name} className="bg-white p-7 rounded border border-brand-beige-dark flex flex-col h-full hover:shadow-md transition-shadow">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-brand-gold" fill="currentColor" size={15} aria-hidden="true" />
                  ))}
                </div>
                {/* Quote */}
                <blockquote className="flex-grow">
                  <p className="text-sm text-brand-text-muted leading-relaxed italic">"{t.quote}"</p>
                </blockquote>
                {/* Attribution */}
                <figcaption className="flex items-center gap-3 mt-6 pt-5 border-t border-brand-beige">
                  <div className="w-9 h-9 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-xs shrink-0" aria-hidden="true">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-text">{t.name}</p>
                    <p className="text-xs text-brand-text-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram Feed ── */}
      <section className="relative py-28" aria-labelledby="instagram-heading">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image src="/images/bg_pattern_aseel_watermark.png" alt="" aria-hidden="true" fill sizes="100vw" className="object-cover pointer-events-none opacity-50" loading="lazy" />
          <div className="absolute inset-0 bg-white/90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="instagram-heading" className="text-center text-3xl md:text-4xl font-serif font-bold text-brand-green mb-4">From The Nest</h2>
          <p className="text-center text-brand-text-muted font-light max-w-2xl mx-auto mb-16">
            Real updates from our breeding facility on Instagram{" "}
            <a href="https://instagram.com/theaseelnest" target="_blank" rel="noopener noreferrer" className="text-brand-text font-medium hover:text-brand-gold transition-colors underline underline-offset-2" aria-label="@theaseelnest on Instagram (opens in new tab)">@theaseelnest</a>
          </p>

          <InstagramFeed />

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://instagram.com/theaseelnest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-brand-green/30 text-brand-green font-medium rounded hover:bg-brand-green hover:text-white transition-all text-sm"
              aria-label="View full feed on Instagram (opens in new tab)"
            >
              <FaInstagram size={18} aria-hidden="true" />
              View Full Feed on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
