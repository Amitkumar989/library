"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Lightbox from "@/components/ui/Lightbox";

const galleryImages = [
  {
    src: "/images/study-hall-1.png",
    alt: "Students studying in the AC hall with blue chairs",
    aspect: "4/3",
  },
  {
    src: "/images/study-hall-2.png",
    alt: "Students studying with books and reference materials",
    aspect: "4/3",
  },
  {
    src: "/images/cubicle-desks.png",
    alt: "Personal cubicle desk setup with partitions",
    aspect: "3/4",
  },
  {
    src: "/images/entrance.png",
    alt: "RB Library Hall exterior entrance at night",
    aspect: "3/4",
  },
  {
    src: "/images/banner.png",
    alt: "RB Library Hall banner showcasing all facilities",
    aspect: "4/3",
  },
];

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Take a Tour"
          subtitle="See the space where hundreds of students achieve their academic goals every day."
        />

        <AnimatedSection>
          <div className="masonry-grid">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative group cursor-pointer overflow-hidden rounded-2xl"
                onClick={() =>
                  setLightboxImage({ src: img.src, alt: img.alt })
                }
              >
                <div style={{ aspectRatio: img.aspect }} className="relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                        <Camera size={20} className="text-dark" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </section>
  );
}
