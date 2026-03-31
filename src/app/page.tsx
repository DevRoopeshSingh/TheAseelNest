import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, Bird, ChevronDown } from "lucide-react";
import { InstagramFeed } from "@/components/ui/InstagramFeed";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-sand"
        aria-label="Hero — The Aseel Nest"
      >
        <Image src="/images/aseel_home_hero_1774342580167.png" alt="" aria-hidden="true" fill className="object-cover opacity-20 mix-blend-multiply pointer-events-none" priority />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px] z-0" aria-hidden="true" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-brand-green/20 bg-white/50 rounded-full backdrop-blur-sm mb-8 shadow-sm">
            <Star className="text-brand-gold" size={16} aria-hidden="true" />
            <span className="text-sm font-medium text-brand-green uppercase tracking-wider">Premium Poultry</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-brand-text mb-6 leading-tight max-w-4xl">
            The Pinnacle of <br />
            <span className="text-brand-green relative group">
              Aseel Heritage
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-gold transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100" aria-hidden="true"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-text-muted max-w-2xl mb-10 leading-relaxed font-light">
            Pure Parrot Beak Aseel chicks. Elite bloodlines bred for exceptional quality, striking aesthetics, and absolute perfection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/919819884761?text=Hi!%20I%20want%20to%20secure%20a%20premium%20Parrot%20Beak%20Aseel%20bloodline."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Secure Your Bloodline via WhatsApp (opens in new tab)"
              className="px-8 py-4 bg-brand-green text-white font-bold rounded-sm hover:bg-brand-green-light transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green focus-visible:outline-offset-2"
            >
              Secure Your Bloodline
            </a>
            <Link
              href="/bloodline"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-brand-green/30 text-brand-green font-medium rounded-sm hover:border-brand-gold hover:text-brand-gold transition-colors flex items-center justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green focus-visible:outline-offset-2"
            >
              View Gallery <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10" aria-hidden="true">
          <ChevronDown className="text-brand-green/40" size={32} />
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative py-24 border-y border-brand-beige flex items-center justify-center" aria-labelledby="features-heading">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image src="/images/bg_pattern_farm_texture.png" alt="" aria-hidden="true" fill sizes="100vw" className="object-cover pointer-events-none" loading="lazy" />
          <div className="absolute inset-0 bg-white/90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 id="features-heading" className="sr-only">Why Choose The Aseel Nest</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck className="text-brand-green" size={32} aria-hidden="true" />, title: "Pure Bloodlines", desc: "Guaranteed authentic Parrot Beak Aseel lineage, selectively bred for the finest genetic traits." },
              { icon: <Bird className="text-brand-green" size={32} aria-hidden="true" />, title: "Exceptional Quality", desc: "Each chick is raised with precision care at our Maharashtra facility, ensuring robust health and perfect structural development." },
              { icon: <Star className="text-brand-green" size={32} aria-hidden="true" />, title: "Premium Service", desc: "An exclusive buying experience tailored for collectors and enthusiasts who demand only the best." },
            ].map((card) => (
              <div key={card.title} className="flex flex-col items-center text-center group bg-white/50 backdrop-blur-sm p-8 rounded-sm border-t-2 border-brand-gold border-x border-b border-brand-beige shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-white border border-brand-beige-dark flex items-center justify-center mb-6 group-hover:border-brand-gold group-hover:bg-brand-green/5 group-hover:scale-110 transition-all duration-300 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-brand-text tracking-wide">{card.title}</h3>
                <p className="text-brand-text-muted leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-sand border-b border-brand-beige" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-6">Client Experiences</h2>
            <p className="text-lg text-brand-text-muted leading-relaxed font-light">See what our premium collectors and breeders have to say about the pure bloodline quality from The Aseel Nest.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { initials: "SD", name: "Sameer D.", location: "Premium Breeder · Pune", quote: "Absolutely stunning Parrot Beak structure. The chicks arrived in perfect health and the lineage certification gave me complete peace of mind. Truly the top farm in Maharashtra." },
              { initials: "AK", name: "Arif Khan", location: "Collector · Mumbai", quote: "The post-purchase breeding guidance from The Aseel Nest has been invaluable. My birds have incredibly tight plumage and aggressive but beautiful stances. Highly recommended." },
              { initials: "RM", name: "Rajendra M.", location: "Enthusiast · Nashik", quote: "You get exactly what you pay for. The ₹4,000 price point is entirely justified given the sheer genetic purity of these birds. The handover process was extremely professional." },
            ].map((t) => (
              <figure key={t.name} className="bg-white p-8 border border-brand-beige-dark rounded-sm shadow-sm hover:-translate-y-1 transition-transform">
                <div className="flex text-brand-gold mb-4" aria-label="5 stars">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} aria-hidden="true" />)}
                </div>
                <blockquote>
                  <p className="text-brand-text-muted italic mb-6 leading-relaxed">"{t.quote}"</p>
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-sm shrink-0" aria-hidden="true">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-brand-text text-sm font-serif">{t.name}</p>
                    <p className="text-xs text-brand-text-muted">{t.location}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="relative py-24 flex items-center justify-center" aria-labelledby="instagram-heading">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image src="/images/bg_pattern_aseel_watermark.png" alt="" aria-hidden="true" fill sizes="100vw" className="object-cover pointer-events-none" loading="lazy" />
          <div className="absolute inset-0 bg-brand-sand/85" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="instagram-heading" className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-6">From The Nest</h2>
            <p className="text-lg text-brand-text-muted leading-relaxed font-light">
              Follow our daily journey on Instagram{" "}
              <a href="https://instagram.com/theaseelnest" target="_blank" rel="noopener noreferrer" aria-label="@theaseelnest on Instagram (opens in new tab)" className="font-medium text-brand-text hover:text-brand-gold transition-colors underline underline-offset-2">
                @theaseelnest
              </a>{" "}
              for real-time breeding updates.
            </p>
          </div>
          <InstagramFeed />
        </div>
      </section>
    </>
  );
}
