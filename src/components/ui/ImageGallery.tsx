"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div 
            key={i} 
            className="group relative aspect-square rounded-sm overflow-hidden border border-brand-beige-dark hover:border-brand-green shadow-sm hover:shadow-md transition-all duration-300 cursor-zoom-in"
            onClick={() => setIndex(i)}
          >
            <Image src={img} alt={`Gallery Image ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        ))}
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images.map((src) => ({ src }))}
      />
    </>
  );
}
