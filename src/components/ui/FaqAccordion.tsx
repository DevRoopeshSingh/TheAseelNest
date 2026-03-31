"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  { question: "How does the shipping and handover process work?", answer: "We arrange specialized safe transportation across India at an additional cost depending on your location. Alternatively, you can personally pick up the bird directly from our farm in Maharashtra." },
  { question: "Is the advance payment refundable?", answer: "Due to high demand and strict batch reservations, the 50% advance booking deposit is non-refundable. Please ensure you are ready to commit before transferring." },
  { question: "Do you offer a mortality or health guarantee?", answer: "We guarantee 100% health, vaccination, and de-worming upon handover. Once the bird safely leaves our facility, mortality risks fall to the buyer due to the sensitive nature of live animal transport and acclimation." },
  { question: "What care guidance do you provide?", answer: "We provide a comprehensive feeding and housing guide tailored strictly for Parrot Beak Aseels upon purchase, and offer ongoing WhatsApp support for the first month to ensure the chick settles nicely." },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number): void => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {FAQS.map((faq, i) => (
        <div key={i} className="border border-brand-beige-dark rounded-sm bg-white overflow-hidden transition-all shadow-sm">
          <button 
            className="w-full text-left px-6 py-5 font-serif font-bold text-brand-text flex items-center justify-between focus:outline-none hover:bg-brand-sand/50 transition-colors"
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-panel-${i}`}
          >
            {faq.question}
            <ChevronDown className={`shrink-0 text-brand-green transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} size={20} />
          </button>
          <div id={`faq-panel-${i}`} role="region" className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-brand-text-muted text-sm leading-relaxed border-t border-brand-beige-dark/50 pt-4">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
