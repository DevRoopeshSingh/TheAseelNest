import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, Bird } from "lucide-react";
import { InstagramFeed } from "@/components/ui/InstagramFeed";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-sand">
        <Image src="/images/aseel_home_hero_1774342580167.png" alt="Aseel Flock" fill className="object-cover opacity-20 mix-blend-multiply pointer-events-none" priority />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px] z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-brand-green/20 bg-white/50 rounded-full backdrop-blur-sm mb-8 shadow-sm">
            <Star className="text-brand-gold" size={16} />
            <span className="text-sm font-medium text-brand-green uppercase tracking-wider">Premium Poultry</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-text mb-6 leading-tight max-w-4xl">
            The Pinnacle of <br/> <span className="text-brand-green relative group">
              Aseel Heritage
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-gold transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
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
              className="px-8 py-4 bg-brand-green text-white font-bold rounded-sm hover:bg-brand-green-light transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1 hover:shadow-xl"
            >
              Secure Your Bloodline
            </a>
            <Link
              href="/bloodline"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-brand-green/30 text-brand-green font-medium rounded-sm hover:border-brand-gold hover:text-brand-gold transition-colors flex items-center justify-center gap-2"
            >
              View Gallery <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative border-y border-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-brand-sand border border-brand-beige-dark flex items-center justify-center mb-6 group-hover:border-brand-gold group-hover:bg-brand-green/5 group-hover:scale-110 transition-all duration-300 shadow-sm">
                <ShieldCheck className="text-brand-green" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-brand-text tracking-wide">Pure Bloodlines</h3>
              <p className="text-brand-text-muted leading-relaxed font-light">Guaranteed authentic Parrot Beak Aseel lineage, selectively bred for the finest genetic traits.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-brand-sand border border-brand-beige-dark flex items-center justify-center mb-6 group-hover:border-brand-gold group-hover:bg-brand-green/5 group-hover:scale-110 transition-all duration-300 shadow-sm">
                <Bird className="text-brand-green" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-brand-text tracking-wide">Exceptional Quality</h3>
              <p className="text-brand-text-muted leading-relaxed font-light">Each chick is raised with precision care at our Maharashtra facility, ensuring robust health and perfect structural development.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-brand-sand border border-brand-beige-dark flex items-center justify-center mb-6 group-hover:border-brand-gold group-hover:bg-brand-green/5 group-hover:scale-110 transition-all duration-300 shadow-sm">
                <Star className="text-brand-green" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-brand-text tracking-wide">Premium Service</h3>
              <p className="text-brand-text-muted leading-relaxed font-light">An exclusive buying experience tailored for collectors and enthusiasts who demand only the best.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-brand-sand border-b border-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-green mb-6">Client Experiences</h2>
            <p className="text-lg text-brand-text-muted leading-relaxed font-light">See what our premium collectors and breeders have to say about the pure bloodline quality from The Aseel Nest.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-brand-beige-dark rounded-sm shadow-sm relative hover:-translate-y-1 transition-transform">
              <div className="flex text-brand-gold mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-brand-text-muted italic mb-6 leading-relaxed">"Absolutely stunning Parrot Beak structure. The chicks arrived in perfect health and the lineage certification gave me complete peace of mind. Truly the top farm in Maharashtra."</p>
              <h4 className="font-bold text-brand-text font-serif">— Sameer D., Premium Breeder</h4>
            </div>
            <div className="bg-white p-8 border border-brand-beige-dark rounded-sm shadow-sm relative hover:-translate-y-1 transition-transform">
              <div className="flex text-brand-gold mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-brand-text-muted italic mb-6 leading-relaxed">"The post-purchase breeding guidance from The Aseel Nest has been invaluable. My birds have incredibly tight plumage and aggressive but beautiful stances. Highly recommended."</p>
              <h4 className="font-bold text-brand-text font-serif">— Arif Khan</h4>
            </div>
            <div className="bg-white p-8 border border-brand-beige-dark rounded-sm shadow-sm relative hover:-translate-y-1 transition-transform">
              <div className="flex text-brand-gold mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-brand-text-muted italic mb-6 leading-relaxed">"You get exactly what you pay for. The ₹4,000 price point is entirely justified given the sheer genetic purity of these birds. The handover process was extremely professional."</p>
              <h4 className="font-bold text-brand-text font-serif">— Rajendra M.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-green mb-6">From The Nest</h2>
            <p className="text-lg text-brand-text-muted leading-relaxed font-light">
              Follow our daily journey on Instagram <a href="https://instagram.com/theaseelnest" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-text hover:text-brand-gold transition-colors">@theaseelnest</a> for real-time breeding updates and facility showcases.
            </p>
          </div>
          <InstagramFeed />
        </div>
      </section>
    </>
  );
}
