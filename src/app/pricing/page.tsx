import { Shield, Truck, Star, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Pricing & Availability | The Aseel Nest",
  description: "View pricing and current availability for our pure Parrot Beak Aseel chicks. Starting at ₹4,000 per piece.",
};

export default function Pricing() {
  return (
    <div className="relative min-h-[90vh] py-20 flex flex-col justify-start">
      <div className="absolute inset-0 z-0">
        <Image src="/images/bg_pattern_mandala.png" alt="" aria-hidden="true" fill sizes="100vw" className="object-cover opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-brand-sand/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-6">Investment in Quality</h1>
          <p className="text-lg text-brand-text-muted leading-relaxed font-light">
            We believe in complete transparency. Our pricing reflects the unparalleled genetic quality, rigorous care, and sheer exclusivity of our Parrot Beak Aseel lineage.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md border border-brand-beige-dark rounded-sm p-8 md:p-12 relative overflow-hidden farm-glow mb-12 shadow-sm">
            
            <div className="absolute top-0 right-0 bg-white/95 backdrop-blur-xl border-b border-l border-brand-beige-dark px-5 py-3 flex items-center gap-3 rounded-bl-md shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
              </span>
              <span className="text-brand-text text-sm font-bold uppercase tracking-wider">Current Batch Available</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-brand-beige-dark pb-8 mb-8 mt-6 md:mt-0">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-2 text-brand-text">Pure Parrot Beak Aseel Chick</h2>
                <p className="text-brand-text-muted font-light">Age: 1 to 2 months | Fully Vaccinated</p>
              </div>
              <div className="text-center md:text-right">
                <span className="text-5xl font-bold text-brand-green font-serif">₹4,000</span>
                <span className="block text-brand-text-muted text-sm mt-1">per piece</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex gap-4">
                <Shield className="text-brand-green shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1 text-brand-text">Health Guarantee</h4>
                  <p className="text-sm text-brand-text-muted font-light">Every chick undergoes strict health checks and is delivered vaccinated and dewormed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Star className="text-brand-green shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1 text-brand-text">Lineage Certification</h4>
                  <p className="text-sm text-brand-text-muted font-light">Verified purebred status from our exclusive Maharashtra-based breeding facility.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Truck className="text-brand-green shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1 text-brand-text">Safe Handover</h4>
                  <p className="text-sm text-brand-text-muted font-light">Personal pickup at our farm or specialized safe transportation arrangements available.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Info className="text-brand-green shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1 text-brand-text">Post-Purchase Guidance</h4>
                  <p className="text-sm text-brand-text-muted font-light">We provide a comprehensive care guide and ongoing support for feeding and maintenance.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center border-t border-brand-beige-dark pt-8">
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-brand-green text-white font-bold rounded-sm hover:bg-brand-green-light transition-all shadow-md hover:-translate-y-1 hover:shadow-lg w-full md:w-auto"
              >
                Start Your Booking Process
              </Link>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm border border-brand-beige-dark p-6 text-center rounded-sm mb-20 shadow-sm relative z-10">
            <p className="text-sm text-brand-text-muted font-light leading-relaxed">
              <strong className="text-brand-text font-bold">Please Note:</strong> Due to extreme demand and our commitment to quality, batches are limited. Prices are fixed and non-negotiable. Booking requires a 50% advance deposit.
            </p>
          </div>

          <div className="relative z-10 bg-white/70 backdrop-blur-md p-8 rounded-sm shadow-sm border border-brand-beige-dark">
            <h2 className="text-3xl font-serif font-bold text-center mb-10 text-brand-text">Frequently Asked Questions</h2>
            <FaqAccordion />
          </div>
        </div>
      </div>
    </div>
  );
}
