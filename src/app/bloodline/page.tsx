import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata = {
  title: "Bloodline & Gallery | The Aseel Nest",
  description: "Explore the pure Parrot Beak Aseel bloodlines and view our premium gallery of elite roosters and hens.",
};

const TRAITS = [
  "Distinctive Parrot-like curved beak",
  "Exceptional bone density and structure",
  "Striking upright posture and stance",
  "High intelligence and alertness",
  "Immaculate feather quality",
  "Aggressive yet disciplined temperament"
];

const GALLERY_IMAGES = [
  "/images/aseel_gallery_one_1774342457261.png",
  "/images/aseel_gallery_two_1774342477735.png",
  "/images/aseel_gallery_three_1774342498807.png",
  "/images/aseel_gallery_four_1774342516930.png",
  "/images/aseel_gallery_five_1774342538886.png",
  "/images/aseel_gallery_six_1774342558444.png",
];

export default function Bloodline() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-6">Lineage of Champions</h1>
        <p className="text-lg text-brand-text-muted leading-relaxed font-light">
          At The Aseel Nest, we specialize exclusively in the revered Parrot Beak Aseel. Originating from elite lineages, our birds represent the gold standard of Aseel breeding.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-sm overflow-hidden border border-brand-beige-dark shadow-sm">
          <Image src="/images/aseel_hero_bloodline_1774342439286.png" alt="The Anatomy of Perfection - Premium Aseel" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        
        <div>
          <h2 className="text-3xl font-serif font-bold mb-6 text-brand-text">The Anatomy of Perfection</h2>
          <p className="text-brand-text-muted mb-8 leading-relaxed font-light">
            Our breeding program strictly adheres to classic morphological standards. We focus on preserving the genetic purity that makes the Parrot Beak Aseel so incredibly sought after globally.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRAITS.map((trait, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-green shrink-0 mt-0.5" size={20} />
                <span className="text-sm text-brand-text font-medium">{trait}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-serif font-bold text-brand-text text-center mb-12">The Gallery</h2>
        <ImageGallery images={GALLERY_IMAGES} />
      </div>
    </div>
  );
}
